import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLE_PATH = path.resolve(
  __dirname,
  "../src/content/garden/06-ai-bullshit/ai-bullshit.md",
);
const API_BASE = "https://www.instapaper.com/api/1";

// Known Portuguese-language domains that don't use .br TLD
const PT_DOMAINS = [
  "manualdousuario.net",
  "pcdomanual.com",
  "victorhg.com",
  "iedamarcondes.com",
  "poder360.com.br",
];

// RFC 3986 percent-encoding (stricter than encodeURIComponent)
function enc(str) {
  return encodeURIComponent(String(str)).replace(
    /[!'()*]/g,
    (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase(),
  );
}

function buildAuthHeader(
  method,
  url,
  bodyParams,
  token = "",
  tokenSecret = "",
) {
  const oauthParams = {
    oauth_consumer_key: process.env.INSTAPAPER_CONSUMER_KEY,
    oauth_nonce: crypto.randomBytes(16).toString("hex"),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_version: "1.0",
    ...(token ? { oauth_token: token } : {}),
  };

  // Signature base includes both oauth params and body params
  const allParams = { ...oauthParams, ...bodyParams };
  const paramStr = Object.keys(allParams)
    .sort()
    .map((k) => `${enc(k)}=${enc(allParams[k])}`)
    .join("&");

  const sigBase = `${method.toUpperCase()}&${enc(url)}&${enc(paramStr)}`;
  const sigKey = `${enc(process.env.INSTAPAPER_CONSUMER_SECRET)}&${enc(tokenSecret)}`;
  const signature = crypto
    .createHmac("sha1", sigKey)
    .update(sigBase)
    .digest("base64");

  return (
    "OAuth " +
    Object.entries({ ...oauthParams, oauth_signature: signature })
      .map(([k, v]) => `${enc(k)}="${enc(v)}"`)
      .join(", ")
  );
}

async function post(endpoint, bodyParams = {}, token = "", tokenSecret = "") {
  const url = `${API_BASE}${endpoint}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: buildAuthHeader(
        "POST",
        url,
        bodyParams,
        token,
        tokenSecret,
      ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(bodyParams).toString(),
  });
  if (!res.ok)
    throw new Error(`Instapaper API ${res.status}: ${await res.text()}`);
  return res.json();
}

async function authenticate() {
  const url = `${API_BASE}/oauth/access_token`;
  const body = {
    x_auth_username: process.env.INSTAPAPER_USERNAME,
    x_auth_password: process.env.INSTAPAPER_PASSWORD,
    x_auth_mode: "client_auth",
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: buildAuthHeader("POST", url, body),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body).toString(),
  });
  if (!res.ok)
    throw new Error(`Auth failed ${res.status}: ${await res.text()}`);
  const params = new URLSearchParams(await res.text());
  return {
    token: params.get("oauth_token"),
    secret: params.get("oauth_token_secret"),
  };
}

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
  const required = [
    "INSTAPAPER_CONSUMER_KEY",
    "INSTAPAPER_CONSUMER_SECRET",
    "INSTAPAPER_USERNAME",
    "INSTAPAPER_PASSWORD",
  ];
  for (const v of required) {
    if (!process.env[v]) throw new Error(`Missing required env var: ${v}`);
  }

  console.log("Authenticating...");
  const { token, secret } = await authenticate();

  const folders = await post("/folders/list", {}, token, secret);
  const publishFolder = folders.find(
    (f) => f.type === "folder" && f.title === "Publish",
  );
  if (!publishFolder) {
    console.log('No "Publish" folder found in Instapaper. Nothing to do.');
    return;
  }

  const data = await post(
    "/bookmarks/list",
    { folder_id: String(publishFolder.folder_id), limit: "500" },
    token,
    secret,
  );
  const bookmarks = data.filter((d) => d.type === "bookmark");
  if (bookmarks.length === 0) {
    console.log('"Publish" folder is empty. Nothing to do.');
    return;
  }

  console.log(`Found ${bookmarks.length} bookmark(s) to sync.`);
  let content = fs.readFileSync(ARTICLE_PATH, "utf-8");
  const year = new Date().getFullYear().toString();

  for (const bm of bookmarks) {
    const type = detectType(bm.url);
    const lang = detectLanguage(bm.url);
    const entry = `- [${bm.title}](${bm.url})`;

    content = insertEntry(content, entry, type, lang, year);
    await post(
      "/bookmarks/archive",
      { bookmark_id: String(bm.bookmark_id) },
      token,
      secret,
    );
    console.log(`  ✓ [${lang}/${type}] ${bm.title}`);
  }

  fs.writeFileSync(ARTICLE_PATH, content, "utf-8");
  console.log("\nDone. Article updated and bookmarks archived.");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
