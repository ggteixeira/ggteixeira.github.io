import { ui, type Lang, type TranslationKey } from "./ui";

export function getLang(locale: string | undefined): Lang {
  return (locale as Lang) in ui ? (locale as Lang) : "en";
}

export function useTranslations(locale: string | undefined) {
  const lang = getLang(locale);
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui["en"][key];
  };
}

export function getOtherLocaleUrl(
  pathname: string,
  currentLocale: string,
): string {
  if (currentLocale === "en") {
    return "/pt-br" + (pathname === "/" ? "" : pathname);
  } else {
    // going to en: strip /pt-br prefix
    return pathname.replace(/^\/pt-br/, "") || "/";
  }
}
