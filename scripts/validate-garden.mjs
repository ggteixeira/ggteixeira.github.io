#!/usr/bin/env node
/**
 * Validates garden article frontmatter and auto-sets updatedDate for updates.
 * Run via lint-staged on staged src/content/garden files.
 */
import { readFileSync, writeFileSync } from "fs";
import { spawnSync } from "child_process";

const filePaths = process.argv.slice(2);
if (filePaths.length === 0) {
  console.error("Usage: validate-garden.mjs <file> [file...]");
  process.exit(1);
}

const REQUIRED_STAGES = ["seedling", "budding", "evergreen"];
const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

function getScalar(yaml, key) {
  const m = yaml.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return m ? m[1].trim() : null;
}

function getList(yaml, key) {
  const m = yaml.match(
    new RegExp(`^${key}:\\s*\\n((?:[ \\t]+-[ \\t]*.+\\n?)+)`, "m"),
  );
  if (!m) return [];
  return m[1]
    .split("\n")
    .filter((l) => l.trim())
    .map((l) => l.replace(/^[ \t]+-[ \t]*/, "").trim());
}

let failed = false;

for (const filePath of filePaths) {
  const content = readFileSync(filePath, "utf8");

  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    console.error(`[garden] No frontmatter found: ${filePath}`);
    failed = true;
    continue;
  }

  const fm = fmMatch[1];
  const errors = [];

  const title = getScalar(fm, "title");
  const summary = getScalar(fm, "summary");
  const date = getScalar(fm, "date");
  const tags = getList(fm, "tags");

  if (!title) errors.push("missing: title");
  if (!summary) errors.push("missing: summary");
  if (!date) errors.push("missing: date");
  if (tags.length === 0) {
    errors.push("missing: tags");
  } else if (!tags.some((t) => REQUIRED_STAGES.includes(t))) {
    errors.push(`tags must include one of: ${REQUIRED_STAGES.join(", ")}`);
  }

  if (errors.length > 0) {
    console.error(`\n[garden] Frontmatter errors in ${filePath}:`);
    errors.forEach((e) => console.error(`  - ${e}`));
    failed = true;
    continue;
  }

  // Auto-set updatedDate for articles that have prior commits (i.e. updates)
  const log = spawnSync("git", ["log", "--oneline", "--", filePath], {
    encoding: "utf8",
  });
  const hasHistory = log.stdout.trim().length > 0;

  if (hasHistory) {
    const now = new Date();
    const todayStr = `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;

    let updated = content;
    if (/^updatedDate:/m.test(content)) {
      updated = content.replace(
        /^updatedDate:.*$/m,
        `updatedDate: ${todayStr}`,
      );
    } else {
      updated = content.replace(/^(date:.+)$/m, `$1\nupdatedDate: ${todayStr}`);
    }

    if (updated !== content) {
      writeFileSync(filePath, updated, "utf8");
      spawnSync("git", ["add", filePath]);
      console.log(`[garden] updatedDate set to ${todayStr} in ${filePath}`);
    }
  }
}

if (failed) process.exit(1);
