// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import babelParser from "@babel/eslint-parser";
import jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx"],
        },
      },
      react: {
        version: "18.3.1",
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  {
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
  },
  { languageOptions: { parser: babelParser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  jestDom.configs["flat/recommended"],
  testingLibrary.configs["flat/dom"],
  importPlugin.flatConfigs.recommended,
  {
    plugins: {
      "unused-imports": unusedImports,
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
      "@typescript-eslint/no-unused-vars": [
        "error",
        // Allow destructuring a prop purely to omit it from ...rest, a
        // common pattern for stripping a fixed/overridden prop.
        { ignoreRestSiblings: true },
      ],
      "testing-library/await-async-queries": "error",
      "testing-library/no-await-sync-queries": "error",
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
            "packages/**/vite.config.js",
            "packages/**/stories/**/*.stories.{js,jsx,ts,tsx}",
            "packages/storybook-html/stories/**/*.stories.js",
            "packages/storybook-html/stories/**/examples/*.js",
            "packages/**/.storybook/**",
            "packages/**/gulpfile.js",
            "packages/**/build-icons.js",
            "packages/**/build-icons.ts",
            "packages/**/build-css.js",
            "gulpfile.js",
            "eslint.config.mjs",
            ".stylelintrc.js",
            "scripts/*.js",
          ],
        },
      ],
    },
  },
  {
    // These tests locate widget mount-points / structural wrapper elements
    // by CSS class; the elements have no accessible role or text, so no
    // Testing Library query applies (they're fixture setup, not user-facing
    // assertions).
    files: [
      "packages/accordion/src/__tests__/accordion.test.js",
      "packages/alert/src/__tests__/alerts.test.js",
    ],
    rules: {
      "testing-library/no-node-access": "off",
    },
  },
  {
    ignores: [
      // Dependencies
      "node_modules",
      "vendor",
      "bin",
      // Build
      "packages/**/dist/**",
      "packages/**/storybook-static/**",
      // Linted separately
      "packages/icon/src/ts/**",
      // Vendored/bundled third-party build output, not authored source
      "packages/uqds-builder/src/js/slide-menu.js",
      "packages/storybook-html/stories/components/header/slide-menu.js",
    ]
  },
  {
    // Node/CommonJS build tooling and config files - not shipped to the browser.
    // Placed last so it takes precedence over the recommended presets above.
    files: [
      "**/gulpfile.js",
      "scripts/**/*.js",
      "**/scripts/**/*.js",
      "**/.storybook/**/*.{js,cjs,mjs,jsx}",
      "**/vite.config.js",
      "vitest.config.mjs",
      "vitest.setup.js",
      "**/build-css.js",
      "**/build-icons.ts",
      ".stylelintrc.js",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    // slide-menu.js is a vendored/bundled build (see ignores above) that
    // attaches SlideMenu to the global scope as a side effect; these files
    // side-effect-import it rather than importing the SlideMenu export.
    files: [
      "packages/storybook-html/stories/components/header/header.stories.js",
      "packages/storybook-html/stories/patterns/header-footer/basic-page.stories.js",
    ],
    languageOptions: {
      globals: {
        SlideMenu: "readonly",
      },
    },
  },
  {
    // No file in this repo uses the prop-types package; the react package
    // uses TypeScript for prop typing instead.
    rules: {
      "react/prop-types": "off",
    },
  },
  {
    // Project uses the modern (React 17+) automatic JSX runtime, so React
    // does not need to be imported/in-scope for JSX to work.
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
  {
    rules: {
      "import/no-unresolved": [
        "error",
        {
          // eslint-import-resolver-node can't follow package.json "exports"
          // maps, so these otherwise-valid, subpath-exported packages read as
          // unresolved. Vite's `?raw`/`?url` query-suffixed imports aren't
          // real file paths either.
          ignore: [
            "\\?(raw|url)$",
            "^storybook(/|$)",
            "^@storybook/",
            "^vite$",
            "^vitest(/|$)",
            "^@vitejs/",
            "^typescript-eslint$",
            "^eslint-plugin-storybook$",
            "^@uqds/icon/build-utils$",
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
  ...storybook.configs["flat/recommended"],
];
