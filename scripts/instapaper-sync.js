import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Instapaper } from "instapaper-api";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLE_PATH = path.resolve(
  __dirname,
  "../src/content/garden/06-ai-bullshit/ai-bullshit.md",
);

// Known Portuguese-language domains that don't use .br TLD
const PT_DOMAINS = [
  "manualdousuario.net",
  "pcdomanual.com",
  "victorhg.com",
  "iedamarcondes.com",
  "poder360.com.br",
];

function detectType(url) {
  return /youtube\.com\/watch|youtu\.be\/|vimeo\.com\/\d/.test(url)
    ? "video"
    : "article";
}

function detectLanguage(url) {
  try {
    const hostname = new URL(url).hostname;
    if (hostname.endsWith(".br")) return "pt";
    if (PT_DOMAINS.some((d) => hostname === d || hostname.endsWith("." + d)))
      return "pt";
  } catch {}
  return "en";
}

function insertEntry(content, entry, type, lang, year) {
  const lines = content.split("\n");

  const sectionLabel = type === "video" ? "## Videos" : "## Articles";
  const subsectionLabel =
    lang === "pt"
      ? type === "video"
        ? "### Vídeos em Português"
        : "### Artigos em Português"
      : type === "video"
        ? "### Videos in English"
        : "### Articles in English";
  const yearLabel = `#### ${year}`;

  const sectionIdx = lines.findIndex((l) => l.trimEnd() === sectionLabel);
  if (sectionIdx === -1) {
    console.warn(`Section "${sectionLabel}" not found — skipping entry`);
    return content;
  }

  let subsectionIdx = -1;
  for (let i = sectionIdx + 1; i < lines.length; i++) {
    if (lines[i].startsWith("## ")) break;
    if (lines[i].trimEnd() === subsectionLabel) {
      subsectionIdx = i;
      break;
    }
  }
  if (subsectionIdx === -1) {
    console.warn(`Subsection "${subsectionLabel}" not found — skipping entry`);
    return content;
  }

  // Boundary: where the next ### or ## heading starts
  let subsectionEnd = lines.length;
  for (let i = subsectionIdx + 1; i < lines.length; i++) {
    if (lines[i].startsWith("## ") || lines[i].startsWith("### ")) {
      subsectionEnd = i;
      break;
    }
  }

  // Find existing year heading
  let yearIdx = -1;
  for (let i = subsectionIdx + 1; i < subsectionEnd; i++) {
    if (lines[i].trimEnd() === yearLabel) {
      yearIdx = i;
      break;
    }
  }

  if (yearIdx === -1) {
    // No heading for this year yet — insert at top of subsection (newest year first)
    const after =
      subsectionIdx + (lines[subsectionIdx + 1]?.trim() === "" ? 1 : 0);
    lines.splice(after + 1, 0, yearLabel, entry, "");
    return lines.join("\n");
  }

  // Append after the last bullet in this year block
  let lastBulletIdx = yearIdx;
  for (let i = yearIdx + 1; i < subsectionEnd; i++) {
    if (lines[i].startsWith("#### ")) break;
    if (lines[i].startsWith("- ")) lastBulletIdx = i;
  }
  lines.splice(lastBulletIdx + 1, 0, entry);
  return lines.join("\n");
}

async function main() {
  const required = ["INSTAPAPER_ACCESS_TOKEN"];
  for (const v of required) {
    if (!process.env[v]) throw new Error(`Missing required env var: ${v}`);
  }

  console.log("Connecting...");

  const client = new Instapaper({
    accessToken: process.env.INSTAPAPER_ACCESS_TOKEN,
  });

  const folders = await client.folders.list();

  const publishFolder = folders.find((f) => f.title === "Publish");
  if (!publishFolder) {
    console.log('No "Publish" folder found in Instapaper. Nothing to do.');
    return;
  }

  const { bookmarks } = await client.bookmarks.list({
    folderId: publishFolder.id,
    limit: 500,
  });

  if (bookmarks.length === 0) {
    console.log('"Publish" folder is empty. Nothing to do.');
    return;
  }

  console.log(`Found ${bookmarks.length} bookmark(s) to sync.`);
  let content = fs.readFileSync(ARTICLE_PATH, "utf-8");
  const year = new Date().getFullYear().toString();

  const synced = [];
  for (const bm of bookmarks) {
    if (!bm.url || !bm.title) continue;

    const type = detectType(bm.url);
    const lang = detectLanguage(bm.url);
    const entry = `- [${bm.title}](${bm.url})`;

    content = insertEntry(content, entry, type, lang, year);
    synced.push(bm.id);
    console.log(`  ✓ [${lang}/${type}] ${bm.title}`);
  }

  // Write before archiving so a failed API call never loses a link
  fs.writeFileSync(ARTICLE_PATH, content, "utf-8");
  for (const id of synced) {
    await client.bookmarks.archive(id);
  }
  console.log("\nDone. Article updated and bookmarks archived.");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
