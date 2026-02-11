import { ui, defaultLang, languages } from "./ui";

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
export type TranslationFn = (key: TranslationKey) => string;

// Re-export for compatibility
export const LOCALES = Object.keys(ui) as Lang[];
export const DEFAULT_LANG = defaultLang;
export { languages };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function toLang(locale: string | undefined): Lang {
  if (locale && locale in ui) return locale as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
