#!/usr/bin/env node
/**
 * Validates garden/notes/til frontmatter and auto-sets updatedDate for updates.
 * Run via lint-staged on staged src/content/{garden,notes,til} files.
 *
 * Garden articles require title, summary, date, and tags (with a stage).
 * Notes only require a date. TILs require a title and a date.
 * Notes (always seedling) and TILs (always evergreen) take no stage tags.
 */
import { readFileSync, writeFileSync } from "fs";
import { spawnSync } from "child_process";
import { formatDate } from "./format-date.mjs";

const filePaths = process.argv.slice(2);
if (filePaths.length === 0) {
  console.error("Usage: validate-garden.mjs <file> [file...]");
  process.exit(1);
}

const REQUIRED_STAGES = ["seedling", "budding", "evergreen"];

function getScalar(yaml, key) {
  const m = yaml.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return m ? m[1].trim() : null;
}

// Treats quoted empty values (`title: ""`) as missing
function isBlank(value) {
  return !value || /^(["'])\1$/.test(value);
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
  const isNote = filePath.includes("/content/notes/");
  const isTil = filePath.includes("/content/til/");
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

  if (!date) errors.push("missing: date");

  if (isTil) {
    if (isBlank(title)) errors.push("missing: title");
  } else if (!isNote) {
    if (!title) errors.push("missing: title");
    if (!summary) errors.push("missing: summary");
    if (tags.length === 0) {
      errors.push("missing: tags");
    } else if (!tags.some((t) => REQUIRED_STAGES.includes(t))) {
      errors.push(`tags must include one of: ${REQUIRED_STAGES.join(", ")}`);
    }
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
    const todayStr = formatDate();

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
