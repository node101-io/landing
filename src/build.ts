import { mkdir, writeFile, cp, rm, readdir, stat } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import type { HtmlEscapedString } from "hono/utils/html";
import { minify } from "html-minifier-terser";
import { LOCALES, DEFAULT_LOCALE, setLocale, type Locale } from "./i18n";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const VIEWS_DIR = join(ROOT, "views");
const DIST = "dist";
const isDev = process.env.NODE_ENV !== "production";

// Page component type - returns Hono JSX element
type PageComponent = () => HtmlEscapedString | Promise<HtmlEscapedString>;

interface DiscoveredPage {
  slug: string;
  modulePath: string;
}

/**
 * Auto-discover pages by scanning for page.tsx files in views directory
 * Convention: views/{slug}/page.tsx → /{locale}/{slug}.html
 */
async function discoverPages(): Promise<DiscoveredPage[]> {
  const pages: DiscoveredPage[] = [];

  const entries = await readdir(VIEWS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Skip partials and other non-page directories
    if (entry.name === "partials" || entry.name.startsWith("_")) continue;

    const pageFile = join(VIEWS_DIR, entry.name, "page.tsx");

    try {
      const fileStat = await stat(pageFile);
      if (fileStat.isFile()) {
        pages.push({
          slug: entry.name,
          modulePath: pageFile,
        });
      }
    } catch {
      // page.tsx doesn't exist in this directory, skip
    }
  }

  return pages;
}

async function buildPage(
  locale: Locale,
  slug: string,
  component: PageComponent,
): Promise<void> {
  setLocale(locale);
  const rendered = component();
  const raw = "<!DOCTYPE html>" + String(rendered);

  const html = isDev
    ? raw
    : await minify(raw, {
        collapseWhitespace: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        sortAttributes: true,
        sortClassName: true,
      });

  const dir = `${DIST}/${locale}`;
  await mkdir(dir, { recursive: true });
  await writeFile(`${dir}/${slug}.html`, html, "utf-8");

  console.log(`  ✓ /${locale}/${slug}.html`);
}

async function createRootRedirect(): Promise<void> {
  const targetUrl = `/${DEFAULT_LOCALE}/`;
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <link rel="canonical" href="${targetUrl}">
  <title>Redirecting...</title>
</head>
<body>
  <script>window.location.href = "${targetUrl}";</script>
  <p>Redirecting to <a href="${targetUrl}">${DEFAULT_LOCALE.toUpperCase()} version</a>...</p>
</body>
</html>`;
  await writeFile(`${DIST}/index.html`, html, "utf-8");
  console.log(`  ✓ /index.html (redirect → ${targetUrl})`);
}

async function copyStaticAssets(): Promise<void> {
  try {
    await cp("public", DIST, { recursive: true });
    console.log("  ✓ Static assets copied");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      console.log("  ⚠ No public folder found, skipping...");
    } else {
      throw err;
    }
  }
}

async function build(): Promise<void> {
  const start = performance.now();

  console.log("\n🚀 Building static site...");
  console.log(`   Mode: ${isDev ? "development" : "production"}\n`);

  // Discover pages automatically
  console.log("🔍 Discovering pages:");
  const pages = await discoverPages();

  if (pages.length === 0) {
    console.log("  ⚠ No pages found! Create views/{slug}/page.tsx files.");
    process.exit(1);
  }

  for (const page of pages) {
    console.log(`  ✓ Found: views/${page.slug}/page.tsx`);
  }

  // Clean dist folder
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  // Copy static assets FIRST (so built pages won't be overwritten)
  console.log("\n📁 Copying assets:");
  await copyStaticAssets();

  // Build pages for each locale
  console.log("\n📄 Building pages:");
  for (const page of pages) {
    // Dynamic import of page component
    const module = await import(page.modulePath);
    const PageComponent: PageComponent =
      module.default || module[`${capitalize(page.slug)}Page`];

    if (!PageComponent) {
      console.error(`  ✗ No component found in views/${page.slug}/page.tsx`);
      console.error(`    Export default or ${capitalize(page.slug)}Page`);
      process.exit(1);
    }

    for (const locale of LOCALES) {
      await buildPage(locale, page.slug, PageComponent);
    }
  }

  // Create root redirect
  console.log("\n🔀 Creating redirects:");
  await createRootRedirect();

  const duration = (performance.now() - start).toFixed(0);
  console.log(`\n✅ Build complete in ${duration}ms!\n`);
  console.log(`Output: ./${DIST}/`);
  const totalPages = pages.length * LOCALES.length;
  console.log(
    `Pages: ${pages.length} × ${LOCALES.length} locales = ${totalPages} HTML files`,
  );
  console.log("Run 'npx serve dist' to preview.\n");
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

build().catch((err) => {
  console.error("❌ Build failed:", err);
  process.exit(1);
});
