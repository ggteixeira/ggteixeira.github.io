Scaffold a new note as a flat file in `src/content/notes/`, with today's date pre-filled.

Work from the project root (`/Users/gui/GitHub/website`).

## Step 1 — Get the topic

If the user passed text after `/new-note`, use it as the topic. Otherwise ask:

> "Sobre o que é a nota? (usado para o nome do arquivo)"

Do not proceed if empty.

## Step 2 — Derive the slug

Use Python for reliable PT-BR accent handling:

```bash
python3 -c "
import unicodedata, re, sys
topic = sys.argv[1]
normalized = unicodedata.normalize('NFD', topic)
no_accents = ''.join(c for c in normalized if unicodedata.category(c) != 'Mn')
slug = re.sub(r'[^a-z0-9]+', '-', no_accents.lower()).strip('-')
print(slug)
" "TOPIC_HERE"
```

## Step 3 — Check for collision

Notes are flat files — no folder, no numbering:

```bash
if [ -f "src/content/notes/${slug}.md" ]; then echo "EXISTS"; fi
```

If it already exists, tell the user and ask for a different topic. Stop.

## Step 4 — Format today's date

```bash
node scripts/format-date.mjs
```

Target format: `07 jul 2026`

## Step 5 — Create the file

Notes default to quick-note style — don't ask. Write `src/content/notes/${slug}.md`
directly (no folder, no `article.md`), with the full frontmatter present but left
empty for the user to fill in themselves later:

```markdown
---
title: ""
summary: ""
date: "DD mmm YYYY"
tags: []
draft: false
---
```

## Step 6 — Report

Tell the user the created path:

```
Criado: src/content/notes/slug.md
```
