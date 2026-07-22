Scaffold a new garden article with the next available folder number, today's date, and seedling frontmatter pre-filled.

Work from the project root (`/Users/gui/GitHub/website`).

## Step 1 — Get the title

If the user passed a title after `/post`, use it. Otherwise ask:

> "Qual é o título do artigo? (PT-BR)"

Do not proceed if the title is empty.

## Step 2 — Find the next folder number

Run:

```bash
max=$(ls src/content/garden/ | grep -E '^[0-9]{2}-' | sort | tail -1 | grep -oE '^[0-9]+')
next=$(printf '%02d' $((10#$max + 1)))
echo $next
```

The `10#` prefix forces base-10 interpretation so that `09` is not treated as octal.

## Step 3 — Derive the slug

Use Python for reliable PT-BR accent handling:

```bash
python3 -c "
import unicodedata, re, sys
title = sys.argv[1]
normalized = unicodedata.normalize('NFD', title)
no_accents = ''.join(c for c in normalized if unicodedata.category(c) != 'Mn')
slug = re.sub(r'[^a-z0-9]+', '-', no_accents.lower()).strip('-')
print(slug)
" "TITLE_HERE"
```

## Step 4 — Check for collision

Before creating anything:

```bash
if [ -d "src/content/garden/${next}-${slug}" ]; then echo "EXISTS"; fi
```

If the folder already exists, tell the user and ask for a different title or slug. Stop.

## Step 5 — Format today's date

```bash
date '+%d %b %Y' | tr '[:upper:]' '[:lower:]'
```

Target format: `07 jul 2026`

## Step 6 — Create the folder and file

```bash
mkdir -p src/content/garden/${next}-${slug}
```

Write `src/content/garden/${next}-${slug}/article.md`. Always double-quote `title` and `summary` to handle colons, quotes, or `#` in titles:

```markdown
---
title: "TITLE"
summary: ""
date: "DD mmm YYYY"
draft: true
tags:
  - seedling
---
```

## Step 7 — Report

Tell the user the created path:

```
Criado: src/content/garden/NN-slug/article.md
```
