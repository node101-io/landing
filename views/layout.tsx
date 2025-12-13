import type { PropsWithChildren } from "hono/jsx";
import { html } from "hono/html";

export const Layout = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => (
  <>
    {html`<!DOCTYPE html>`}
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/static/styles.css" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js"
          integrity="sha384-/TgkGk7p307TH7EXJDuUlgG3Ce1UVolAOFopFekQkkXihi5u/6OCvVKyz1W+idaz"
          crossorigin="anonymous"
        ></script>{" "}
      </head>
      <body className="bg-cream font-primary max-w-4xl mx-auto p-5">
        {children}
      </body>
    </html>
  </>
);
