import type { Translations } from "./locales/types";
import { tr } from "./locales/tr";
import { en } from "./locales/en";

export type Locale = "tr" | "en";
export const LOCALES = ["tr", "en"] as const;
export const DEFAULT_LOCALE: Locale = "tr";

export const LOCALE_NAMES: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

const translations: Record<Locale, Translations> = { tr, en };

export function getTranslations(
  locale: Locale | string | undefined,
): Translations {
  const validLocale =
    locale && (locale === "tr" || locale === "en") ? locale : DEFAULT_LOCALE;
  return translations[validLocale];
}
