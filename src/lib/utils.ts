import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

export function formatDate(date: Date) {
  return dateFormatter.format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function daysSince(date: Date): number {
  return (Date.now() - date.getTime()) / 86_400_000;
}

export function isActiveLink(
  pathname: string,
  subpath: string[] | null,
  href: string,
): boolean {
  return (
    pathname === href || pathname + "/" === href || "/" + subpath?.[0] === href
  );
}

export const currentYear = new Date().getFullYear();
