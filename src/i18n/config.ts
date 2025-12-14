export const LOCALES = ["tr", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "tr";

export const SITE_URL = "https://node101.io";

export const LOCALE_NAMES: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};
