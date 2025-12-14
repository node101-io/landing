import type { Locale } from "./config";
import type { TranslationKey } from "./types";
import { DEFAULT_LOCALE, LOCALES } from "./config";
import { tr } from "./locales/tr";
import { en } from "./locales/en";

const translations = { tr, en } as const;

let currentLocale: Locale = DEFAULT_LOCALE;

export function setLocale(locale: Locale): void {
  currentLocale = locale;
}

export function getLocale(): Locale {
  return currentLocale;
}

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  let current: unknown = obj;
  for (const key of path.split(".")) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // fallback to key if not found
    }
  }
  return typeof current === "string" ? current : path;
}

export function t(key: TranslationKey): string {
  const dict = translations[currentLocale];
  return getNestedValue(dict as Record<string, unknown>, key);
}

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export {
  LOCALES,
  DEFAULT_LOCALE,
  LOCALE_NAMES,
  SITE_URL,
  type Locale,
} from "./config";
export type { TranslationKey } from "./types";
