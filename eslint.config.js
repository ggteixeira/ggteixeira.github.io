import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import pluginSolid from "eslint-plugin-solid";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", "public/**"],
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.tsx"],
    plugins: { solid: pluginSolid },
    languageOptions: {
      parserOptions: {
        jsxPragma: null,
        jsxImportSource: "solid-js",
      },
    },
    rules: {
      ...pluginSolid.configs.recommended.rules,
    },
  },
  ...pluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  },
  prettierConfig,
);
