Pre-publish review for a garden article. Run before `/publish` to catch structural and metadata issues.

## Step 1 — Detect the article

Run `git status --short` and find modified (`M`) or untracked (`??`) `.md` files under `src/content/garden/`. Ignore `templates/` and `_rascunho.md`.

- If none found, check if the user passed a path argument; if so, use it directly.
- If exactly one candidate, use it.
- If multiple, list them and ask the user which one to review using AskUserQuestion.

Read the full file content.

## Step 2 — Run checks

Go through each check below. Track results as ✓ or ✗ with a short note.

### Frontmatter

- `title` — present and non-empty
- `summary` — present and non-empty
- `date` — present, formatted as `DD MMM YYYY` (e.g. `09 apr 2025`)
- `tags` — present and contains at least one entry
- **Maturity tag** — at least one of `seedling`, `budding`, or `evergreen` is in the tags list
- **Draft flag** — if `draft: true` is present, flag it as a reminder (not an error)

### Footnote integrity

Scan the article body (everything after the closing `---` of frontmatter).

1. **Collect inline links** — all `[text](url)` patterns where the URL starts with `http`
2. **Collect footnote markers** — all `[^N]` references in prose
3. **Collect footnote definitions** — all `[^N]:` lines at the bottom

Run these checks:

- **Unanchored external links** — every external inline link `[text](url)` should be followed by a `[^N]` marker within the same sentence or immediately after the closing `)`. Flag any that aren't.
- **Orphaned markers** — every `[^N]` in prose must have a matching `[^N]:` definition. Flag missing definitions.
- **Unused definitions** — every `[^N]:` definition must be referenced somewhere in prose. Flag unreferenced ones.
- **Definition order** — footnote definitions at the bottom should be numbered sequentially and ordered by first appearance in the text. Flag if out of order.

### References section

- A `# Referências e Notas de Rodapé` (or similar) heading must exist if there are any footnote definitions.

## Step 3 — Report

Output a clean checklist:

```
## Review: <article title>

### Frontmatter
✓ title
✓ summary
✓ date
✓ maturity tag (budding)
⚠ draft: true — article is still a draft

### Footnote integrity
✓ all external links anchored to footnotes
✗ [^3] in prose has no matching definition
✓ no unused definitions
✗ definitions out of order — [^2] appears before [^1] in prose

### References section
✓ present
```

If all checks pass, say so clearly. If any `✗` items exist, list what needs fixing before publishing.

Do not auto-fix anything — report only.
