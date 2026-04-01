Publish a garden article through the full publication workflow. Follow these steps precisely:

## Step 1 — Detect the article

Run `git status --short` and find all modified or untracked `.md` files under `src/content/garden/`. Ignore template files (`templates/` or `_rascunho.md`).

- If no garden markdown files are changed, stop and tell the user there is nothing to publish.
- If exactly one file is found, use it.
- If multiple files are found, list them and ask the user which one to publish using AskUserQuestion.

## Step 2 — Draft or live?

Ask the user: **"Publicar como draft ou live? (draft/live)"** using AskUserQuestion.

Based on their answer, update the frontmatter in the article file using the Edit tool:

- **draft**: ensure the line `draft: true` is present in the frontmatter
- **live**: remove the `draft` line entirely (the schema treats absence as published)

## Step 3 — Commit

Read the article file to get the `title` from frontmatter.

Check if this is a new or updated post:

```
git log --oneline -- <article-file-path>
```

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

## Step 4 — Push or PR

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
