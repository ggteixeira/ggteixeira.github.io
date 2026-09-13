import type { Lang } from "@i18n/ui";

export type Page = {
  TITLE: string;
  DESCRIPTION: string;
};

export interface Site extends Page {
  AUTHOR: string;
}

export type Links = {
  TEXT: string;
  HREF: string;
  LOCALES?: Lang[];
}[];

export type Socials = {
  NAME: string;
  ICON: string;
  TEXT: string;
  HREF: string;
}[];

export type Disclaimer = {
  NAME: string;
  TITLE: string;
  DESCRIPTION: string;
};
