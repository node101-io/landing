import type { PropsWithChildren } from "hono/jsx";
import { html } from "hono/html";

export const Layout = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => (
  <>
    {html`<!DOCTYPE html>`}
    <html lang="tr" class="overscroll-none">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/static/styles.css" />
        <link rel="icon" href="/favicon.ico" />
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
        {children}
      </body>
    </html>
  </>
);
