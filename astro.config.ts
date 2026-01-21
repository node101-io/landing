import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  output: "static", // Static pages with server islands
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  site: "https://node101.io",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
