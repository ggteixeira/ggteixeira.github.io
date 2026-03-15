import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";
import { createRequire } from "module";
import path from "path";

const _require = createRequire(import.meta.url);
const viteEnvEntry = path.join(
  path.dirname(_require.resolve("vite/package.json")),
  "dist/client/env.mjs",
);

// Workaround for Vite 7.3.1 regression: client.mjs goes through import-analysis
// but @vite/env alias resolution fails. This pre-plugin short-circuits it.
const fixViteEnvPlugin = {
  name: "fix-vite-env",
  enforce: "pre",
  resolveId(id) {
    if (id === "@vite/env") return viteEnvEntry;
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://guiteixeira.dev",
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [fixViteEnvPlugin],
  },
});
