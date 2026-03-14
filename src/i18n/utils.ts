import {
  ui,
  LOCALES,
  PT_BR_PREFIX,
  type Lang,
  type TranslationKey,
} from "./ui";

export function getLang(locale: string | undefined): Lang {
  return (locale as Lang) in ui ? (locale as Lang) : LOCALES.EN;
}

export function useTranslations(locale: string | undefined) {
  const lang = getLang(locale);
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[LOCALES.EN][key];
  };
}

export function getOtherLocaleUrl(
  pathname: string,
  currentLocale: string,
): string {
  if (currentLocale === LOCALES.EN) {
    return PT_BR_PREFIX + (pathname === "/" ? "" : pathname);
  } else {
    // going to en: strip /pt-br prefix
    return pathname.replace(new RegExp(`^${PT_BR_PREFIX}`), "") || "/";
  }
}
