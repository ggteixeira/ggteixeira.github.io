Publish a garden article through the full publication workflow. Follow these steps precisely:

## Step 1 — Detect the article

Run `git status --short` and collect all modified (`M`) or untracked (`??`) `.md` files under `src/content/garden/`. Ignore template files (`templates/` or `_rascunho.md`).

For each candidate file, read its frontmatter:

- **Untracked (`??`) files**: always include (brand-new articles).
- **Modified (`M`) files**: include only if frontmatter contains `draft: true`. Skip already-live articles — they are edits, not new publications.

If any modified-but-live files were skipped, mention them briefly so the user knows why they aren't listed.

- If no candidates remain from git status, scan all `.md` files under `src/content/garden/` (ignoring `templates/` and `_rascunho.md`) and collect any that have `draft: true` in their frontmatter. These are committed drafts that haven't been published yet.
- If committed drafts are found, list them and ask the user which one to publish using AskUserQuestion.
- If still no candidates, stop and tell the user there is nothing to publish.
- If exactly one candidate is found (from git status or committed drafts), use it.
- If multiple candidates are found, list them and ask the user which one to publish using AskUserQuestion.

## Step 2 — Pre-publish review

Run the checks from `.claude/commands/review-article.md` Step 2 against the detected article.

If any ✗ items are found, show the checklist and ask via AskUserQuestion: **"Fix these first, or publish anyway?"** (fix/publish anyway/cancel). "Fix" stops here so the user can address the issues. ⚠ items (like `draft: true`) are informational only and don't block.

## Step 3 — Draft or live?

If the article was found as a committed draft (not modified in git status), first confirm with the user using AskUserQuestion: **"This article is already committed as draft. Are you sure you want to change its status?"** (yes/cancel). If they cancel, stop.

Ask the user: **"Publicar como draft ou live? (draft/live)"** using AskUserQuestion.

Based on their answer, update the frontmatter in the article file using the Edit tool:

- **draft**: ensure the line `draft: true` is present in the frontmatter
- **live**: remove the `draft` line entirely (the schema treats absence as published)

## Step 4 — Commit

Read the article file to get the `title` from frontmatter.

Check if this is a new or updated post:

```
git log --oneline -- <article-file-path>
```

`updatedDate` is stamped automatically by the pre-commit hook (`scripts/validate-garden.mjs`) whenever a previously-published article changes. Don't set it manually here.

Stage the entire article folder (includes any media assets):

```
git add src/content/garden/<NN-slug>/
```

Choose the commit message:

- New post, live: `content: publish "<title>"`
- New post, draft: `content: draft "<title>"`
- Updated post, live: `content: update "<title>"`
- Updated post, draft: `content: draft "<title>"`

Use the exact title from the frontmatter. Create the commit.

## Step 5 — Push or PR

Check the current branch:

```
git branch --show-current
```

- **On `main`**: run `git push`. Deployment is automatic via GitHub Actions.
- **Not on `main`**: run `git push -u origin <branch-name>`, then create a PR with:
  ```
  gh pr create --title "<commit-message-title>" --body "Published via /publish skill." --base main
  ```
  Report the PR URL.

Report the final result to the user.
