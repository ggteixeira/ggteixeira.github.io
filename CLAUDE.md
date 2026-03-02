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
