import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LOCALES } from "@i18n/ui";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, locale?: string) {
  const tag = locale === LOCALES.PT_BR ? "pt-BR" : "en-US";
  return Intl.DateTimeFormat(tag, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string, locale?: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  const label = locale === LOCALES.PT_BR ? "min de leitura" : "min read";
  return `${readingTimeMinutes} ${label}`;
}

export function daysSince(date: Date): number {
  return (Date.now() - date.getTime()) / 86_400_000;
}

export const currentYear = new Date().getFullYear();
