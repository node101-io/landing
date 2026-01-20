import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import css from "@eslint/css";
import { tailwind4 } from "tailwind-csstree";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.wrangler/**",
      "**/public/**",
      "**/pnpm-lock.yaml",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/*.css",
      "**/.astro/**",
      "**/src/env.d.ts",
    ],
  },
  // TypeScript files (configs, utilities)
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, prettier },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "with-single-extends" },
      ],
      ...prettierConfig.rules,
    },
  },
  // CSS files
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
    languageOptions: {
      customSyntax: tailwind4,
    },
    rules: {
      "css/no-invalid-at-rules": "off",
    },
  },
  // Astro files
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    plugins: { "better-tailwindcss": betterTailwindcss },
    rules: {
      "better-tailwindcss/multiline": [
        "warn",
        {
          classesPerLine: 1,
          indent: 2,
          group: "newLine",
        },
      ],
      "better-tailwindcss/sort-classes": [
        "warn",
        {
          entryPoint: "./src/styles/global.css",
        },
      ],
    },
  },
]);
