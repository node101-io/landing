import type { Locale } from "./config";
import type { Translations } from "./locales/types";
import { DEFAULT_LOCALE } from "./config";
import { tr } from "./locales/tr";
import { en } from "./locales/en";

const translations: Record<Locale, Translations> = { tr, en };

let currentLocale: Locale = DEFAULT_LOCALE;

export function setLocale(locale: Locale): void {
  currentLocale = locale;
}

export function getLocale(): Locale {
  return currentLocale;
}

// Returns current translation object
export function getTranslations(): Translations {
  return translations[currentLocale];
}

// Shorthand - use: i18n().meta.title
export const i18n = getTranslations;

export {
  LOCALES,
  DEFAULT_LOCALE,
  LOCALE_NAMES,
  SITE_URL,
  type Locale,
} from "./config";
