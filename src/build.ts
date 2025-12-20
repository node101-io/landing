import { mkdir, writeFile, cp, rm, readdir, stat } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import type { HtmlEscapedString } from "hono/utils/html";
import { minify } from "html-minifier-terser";
import { LOCALES, DEFAULT_LOCALE, setLocale, type Locale } from "./i18n";
import { watch } from "chokidar";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC_DIR = join(ROOT, "src");
const VIEWS_DIR = join(SRC_DIR, "views");
const DIST = "dist";
const isDev = process.env.NODE_ENV !== "production";
const isWatch = process.argv.includes("--watch");

type PageComponent = () => HtmlEscapedString | Promise<HtmlEscapedString>;

async function discoverPages() {
  const pages: { slug: string; path: string }[] = [];
  const entries = await readdir(VIEWS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) continue;
    const pagePath = join(VIEWS_DIR, entry.name, "page.tsx");
    try {
      if ((await stat(pagePath)).isFile()) {
        pages.push({ slug: entry.name, path: pagePath });
      }
    } catch {
      // Page file doesn't exist, skip
    }
  }
  return pages;
}

async function buildPage(
  locale: Locale,
  slug: string,
  component: PageComponent,
) {
  setLocale(locale);
  const raw = "<!DOCTYPE html>" + String(component());
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

  await mkdir(`${DIST}/${locale}`, { recursive: true });
  await writeFile(`${DIST}/${locale}/${slug}.html`, html, "utf-8");
  console.log(`  ✓ /${locale}/${slug}.html`);
}

async function build() {
  const start = performance.now();
  console.log(`\n🚀 Building (${isDev ? "dev" : "prod"})...\n`);

  const pages = await discoverPages();
  if (pages.length === 0) {
    console.log("  ⚠ No pages found");
    process.exit(1);
  }

  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  try {
    await cp("public", DIST, { recursive: true });
  } catch {
    // Public directory doesn't exist, skip
  }

  for (const page of pages) {
    const mod = await import(page.path);
    const Component: PageComponent =
      mod.default ||
      mod[`${page.slug[0].toUpperCase()}${page.slug.slice(1)}Page`];
    if (!Component) {
      console.error(`  ✗ No component in ${page.slug}/page.tsx`);
      process.exit(1);
    }
    for (const locale of LOCALES) {
      await buildPage(locale, page.slug, Component);
    }
  }

  // Root redirect
  await writeFile(
    `${DIST}/index.html`,
    `<!DOCTYPE html><meta http-equiv="refresh" content="0;url=/${DEFAULT_LOCALE}/">`,
  );

  console.log(`\n✅ Done in ${(performance.now() - start).toFixed(0)}ms\n`);
}

function runBuild(): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["tsx", join(SRC_DIR, "build.ts")], {
      cwd: ROOT,
      stdio: "inherit",
      shell: true,
    });
    child.on("close", (code) => (code === 0 ? resolve() : reject()));
    child.on("error", reject);
  });
}

async function startWatch() {
  console.log("\n👀 Watching src/...\n");
  await runBuild();

  let building = false;
  let queued = false;

  const rebuild = async () => {
    if (building) {
      queued = true;
      return;
    }
    building = true;
    console.log("\n🔄 Rebuilding...\n");
    try {
      await runBuild();
    } catch {
      // Build failed, continue watching
    }
    building = false;
    if (queued) {
      queued = false;
      rebuild();
    }
  };

  watch(SRC_DIR, {
    ignored: [/node_modules/, /build\.ts$/],
    ignoreInitial: true,
    awaitWriteFinish: { stabilityThreshold: 100, pollInterval: 50 },
  }).on("all", (_, path) => {
    if (path.endsWith(".ts") || path.endsWith(".tsx")) {
      console.log(`\n📝 ${path.replace(ROOT + "/", "")}`);
      rebuild();
    }
  });

  process.on("SIGINT", () => process.exit(0));
}

void (isWatch ? startWatch() : build().catch(() => process.exit(1)));
