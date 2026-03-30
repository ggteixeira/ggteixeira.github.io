# CLAUDE.md

## Package Manager

Always use **pnpm**. Never use npm or yarn.

## Commands

```
pnpm dev        # start dev server (opens Firefox)
pnpm build      # astro check + astro build
pnpm preview    # preview production build
```

## Stack

- **Astro 4** — static site generator, file-based routing
- **Tailwind CSS** — styling (base styles disabled in integration)
- **SolidJS** — interactive components (`.tsx` files)
- **TypeScript** — strict mode, path alias `@*` → `src/*`

## Key Files

| File                    | Purpose                                       |
| ----------------------- | --------------------------------------------- |
| `src/consts.ts`         | Site metadata, nav links, socials             |
| `src/types.ts`          | TypeScript types (Site, Page, Links, Socials) |
| `src/lib/utils.ts`      | `cn()`, `formatDate()`, `readingTime()`       |
| `src/content/config.ts` | Zod schemas for all content collections       |
| `src/styles/global.css` | Global styles + Tailwind directives           |

## Content Collections

Located in `src/content/`. Four collections: `garden`, `work`, `projects`, `legal`.

### Garden (blog posts)

Articles are stored in **numbered folders** under `src/content/garden/`:

```
src/content/garden/
  NN-slug-name/
    article.md      # content file (any filename)
    media/          # images and assets
```

Frontmatter schema (all required except `draft`):

```yaml
---
title: "Title"
summary: "One-line description"
date: "09 apr 2025" # format: DD MMM YYYY
updatedDate: "15 feb 2026" # optional — only set for meaningful revisions
tags:
  - seedling # seedling | budding | evergreen + custom tags
draft: false # optional, defaults to undefined (published)
---
```

**Garden content is written in Brazilian Portuguese (PT-BR).**

Tag taxonomy:

- `seedling` — early/incomplete idea
- `budding` — developing
- `evergreen` — complete, permanent

### Work

Frontmatter: `company`, `role`, `dateStart`, `dateEnd`, `city`

### Projects

Frontmatter: `title`, `summary`, `date`, `tags`, `draft?`, `demoUrl?`, `repoUrl?`

> The Projects nav link is currently commented out in `consts.ts`.

## Git Commits

Prefer small, focused commits split semantically by type of change. Each commit should do one thing: a bug fix, a new feature, a content edit, a style tweak, etc. Avoid bundling unrelated changes into a single commit.

## Internationalization (i18n)

Translation strings live in `src/i18n/ui.ts` under both `en` and `pt-br` keys. To add a new string:

1. Add the key to **both** locales in `ui.ts`
2. Resolve it server-side in the Astro component via `useTranslations(Astro.currentLocale)`
3. Pass the resolved string as a prop to any SolidJS component that needs it — never call `useTranslations` inside `.tsx` files

```ts
// ui.ts
"article.toc": "Contents",   // en
"article.toc": "Conteúdo",   // pt-br

// SomeLayout.astro
const t = useTranslations(Astro.currentLocale);
<MyComponent label={t("article.toc")} />
```

## Component Conventions

- **Astro components** (`.astro`) — static/server-rendered UI
- **SolidJS components** (`.tsx`) — interactive (search, filtering, counters)
- Tailwind classes merged with `cn()` from `@lib/utils`

## Imports

Use path aliases instead of relative paths:

```ts
import { SITE } from "@consts";
import { cn } from "@lib/utils";
import type { Page } from "@types";
```
