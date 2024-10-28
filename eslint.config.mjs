import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import babelParser from "@babel/eslint-parser";
import jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        beforeEach: true,
        afterEach: true,
        expect: true,
      },
    },
  },
  { languageOptions: { parser: babelParser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      ...jestDom.configs["flat/recommended"],
      ...testingLibrary.configs["flat/dom"],
      ...unusedImports,
      ...importPlugin.flatConfigs.recommended,
    },
    rules: {
      "jest-dom/prefer-checked": "error",
      "jest-dom/prefer-empty": "error",
      "jest-dom/prefer-enabled-disabled": "error",
      "jest-dom/prefer-focus": "error",
      "jest-dom/prefer-in-document": "error",
      "jest-dom/prefer-required": "error",
      "jest-dom/prefer-to-have-attribute": "error",
      "jest-dom/prefer-to-have-class": "error",
      "jest-dom/prefer-to-have-style": "error",
      "jest-dom/prefer-to-have-text-content": "error",
      "jest-dom/prefer-to-have-value": "error",
      "no-console": "error",
      "testing-library/await-async-query": "error",
      "testing-library/no-await-sync-query": "error",
      "testing-library/no-container": "error",
      "testing-library/no-manual-cleanup": "error",
      "testing-library/no-debugging-utils": "error",
      "unused-imports/no-unused-imports": "error",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "packages/**/src/__tests__/*.test.js",
            "tests/jest/*.js",
            "tests/msw/*.js",
            "vitest.*.mjs",
            "vitest.*.js",
            "packages/storybook-html/stories/**/*.stories.js",
            "packages/storybook-html/stories/**/examples/*.js",
            "packages/**/gulpfile.js",
            "packages/**/build-icons.js",
            "packages/**/build-css.js",
            "gulpfile.js",
            "scripts/*.js",
          ],
        },
      ],
    },
  },
  {
    ignores: [
      // Dependencies
      "/node_modules",
      "/vendor",
      "/bin",
      // Build
      "/packages/**/dist",
      "/packages/**/storybook-static/",
      // Linted separately
      "/packages/icon/src/ts",
    ]
  },
  eslintConfigPrettier,
];
