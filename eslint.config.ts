import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import css from "@eslint/css";
import { tailwind4 } from "tailwind-csstree";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";

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
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, prettier, "better-tailwindcss": betterTailwindcss },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "with-single-extends" },
      ],
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
          entryPoint: "./src/styles.css",
        },
      ],
      ...prettierConfig.rules,
    },
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
    languageOptions: {
      customSyntax: tailwind4,
    },
  },
]);
