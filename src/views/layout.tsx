import type { PropsWithChildren } from "hono/jsx";
import { getLocale, LOCALES, i18n, SITE_URL, DEFAULT_LOCALE } from "@/i18n";
// import { Curtain } from "@/components/curtain";

export const Layout = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => (
  <html lang={getLocale()} class="overscroll-none">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={i18n().meta.description} />
      {/* Critical resource preloads - break request chain */}
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/fonts/node-sans.woff2"
        crossOrigin="anonymous"
        fetchpriority="high"
      />
      <link rel="preload" as="style" href="/static/styles.css" />
      <link rel="stylesheet" href="/static/styles.css" />
      {/* SEO: hreflang alternates */}
      {LOCALES.map((loc) => (
        <link
          key={loc}
          rel="alternate"
          hreflang={loc}
          href={`${SITE_URL}/${loc}/`}
        />
      ))}
      <link
        rel="alternate"
        hreflang="x-default"
        href={`${SITE_URL}/${DEFAULT_LOCALE}/`}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
        media="print"
        onload="this.media='all'"
      />
      <noscript>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </noscript>
      <link
        rel="preload"
        as="image"
        href="/img/hero-background.webp"
        fetchpriority="high"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body
      class={`
        mx-auto
        w-full
        max-w-[1920px]
        bg-background
        font-sans
      `}
    >
      {/* <Curtain /> */}
      <main>{children}</main>
      <script src="/static/fade.js" defer></script>
    </body>
  </html>
);
