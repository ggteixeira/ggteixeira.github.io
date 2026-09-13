import type { Links, Site, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Guilherme Teixeira",
  DESCRIPTION: "Welcome to my website.",
  AUTHOR: "Guilherme Teixeira",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  // {
  //   TEXT: "Work",
  //   HREF: "/work",
  // },
  {
    TEXT: "Garden",
    HREF: "/garden",
    LOCALES: ["pt-br"],
  },
  {
    TEXT: "Notes",
    HREF: "/notes",
    LOCALES: ["pt-br"],
  },
  // {
  //   TEXT: "Projects",
  //   HREF: "/projects",
  // },
  {
    TEXT: "About",
    HREF: "/about",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "e-mail",
    HREF: "mailto:website.agreeable138@passmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "ggteixeira",
    HREF: "https://github.com/ggteixeira",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "guiatf",
    HREF: "https://www.linkedin.com/in/guiatf/",
  },
  {
    NAME: "Bluesky",
    ICON: "bluesky",
    TEXT: "guiteixeira.dev",
    HREF: "https://bsky.app/profile/guiteixeira.dev",
  },
];
