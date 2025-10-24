import type { Site, Page, Links, Socials, Disclaimer } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Guilherme Teixeira",
  DESCRIPTION: "Welcome to my website.",
  AUTHOR: "Guilherme Teixeira",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// About Page
export const ABOUT: Page = {
  TITLE: "About",
  DESCRIPTION: "About me",
};

// GARDEN Page
export const GARDEN: Page = {
  TITLE: "Digital Garden",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Garden",
    HREF: "/garden",
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
    TEXT: "hello@guiteixeira.dev",
    HREF: 'mailto:website.wildcard272@simplelogin.com',
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

// Disclaimer
export const DISCLAIMER: Disclaimer = {
  NAME: "Disclaimer",
  TITLE: "Disclaimer",
  DESCRIPTION: "Disclaimer",
};
