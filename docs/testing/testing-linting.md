# Code Quality and Testing Guide

Maintaining consistent code quality and ensuring proper functionality are crucial for our project. This document outlines the commands and processes we use for formatting, linting, and testing our codebase.

---

## 1. Formatting

We use **Prettier** to enforce a consistent code style across the entire project. This helps reduce merge conflicts and keeps the codebase visually uniform.

* **`npm run format`**
    * **Purpose:** Automatically reformats all supported files (`.css`, `.scss`, `.js`, `.jsx`, `.json`, `.md`, `.mdx`, `.tsx`) according to our Prettier configuration.
    * **Usage:** Run this command to fix any formatting issues before committing your code.
    * **Example:** `npm run format`

* **`npm run check:format`**
    * **Purpose:** Checks if all supported files are correctly formatted **without** making any changes. This command is primarily used in our Continuous Integration (CI) pipeline to ensure no unformatted code is merged.
    * **Usage:** You can run this locally to verify formatting, but `npm run format` is usually preferred for fixing issues.
    * **Example:** `npm run check:format`

---

## 2. Linting

We leverage various linting tools to identify and report problematic patterns, potential errors, and enforce coding conventions.

* **`npm run lint`**
    * **Purpose:** This is the main command to run all configured linting checks across the project. It combines checks for code formatting, JavaScript/TypeScript, CSS/SCSS, and TypeScript compilation.
    * **Usage:** Always run this command before committing changes to ensure your code adheres to our quality standards. This command also runs in our CI pipeline and will fail if any linting issues are found.
    * **Example:** `npm run lint`
    * **Checks Performed:**
        * `npm run check:format`: Verifies code formatting.
        * `npm run lint:es`: Runs ESLint for JavaScript/TypeScript code.
        * `npm run lint:style`: Runs Stylelint for CSS/SCSS code.
        * `npm run lint:tsc:react`: Performs a TypeScript type-check specifically for the `packages/react` workspace.

* **`npm run lint:es`**
    * **Purpose:** Runs **ESLint** to analyze JavaScript and TypeScript files for code quality, potential errors, and adherence to coding guidelines.
    * **Usage:** Rarely run directly, as it's included in `npm run lint`.
    * **Example:** `npm run lint:es`

* **`npm run lint:style`**
    * **Purpose:** Runs **Stylelint** to lint CSS and SCSS files, ensuring consistent styling and preventing common errors.
    * **Usage:** Rarely run directly, as it's included in `npm run lint`.
    * **Example:** `npm run lint:style`

* **`npm run lint:tsc:react`**
    * **Purpose:** Performs a **TypeScript type-check** specifically for the `packages/react` workspace. The `--noEmit` flag ensures no JavaScript files are generated, making it a pure type validation step.
    * **Usage:** Rarely run directly, as it's included in `npm run lint`.
    * **Example:** `npm run lint:tsc:react`

### Automatically Fixing Linting Issues

Some linting issues can be automatically fixed.

* **`npm run fix`**
    * **Purpose:** This is the comprehensive fix command. It first runs Prettier to format code and then attempts to automatically fix fixable issues reported by ESLint and Stylelint.
    * **Usage:** Use this command to quickly resolve common linting and formatting problems. Always re-run `npm run lint` afterward to ensure all issues are resolved or to identify any remaining problems that require manual intervention.
    * **Example:** `npm run fix`
    * **Fixes Performed:**
        * `npm run format`: Formats code using Prettier.
        * `npm run fix:es`: Runs ESLint with the `--fix` option.
        * `npm run fix:style`: Runs Stylelint with the `--fix` option.

* **`npm run fix:es`**
    * **Purpose:** Runs ESLint with the `--fix` option to automatically correct fixable JavaScript/TypeScript errors.
    * **Usage:** Rarely run directly, as it's included in `npm run fix`.
    * **Example:** `npm run fix:es`

* **`npm run fix:style`**
    * **Purpose:** Runs Stylelint with the `--fix` option to automatically correct fixable CSS/SCSS errors.
    * **Usage:** Rarely run directly, as it's included in `npm run fix`.
    * **Example:** `npm run fix:style`

---

## 3. Testing

We use **Vitest** for running our unit and integration tests, ensuring our code behaves as expected.

* **`npm run test`**
    * **Purpose:** Executes all tests once and exits. This is the standard command used in our CI pipeline to validate code functionality.
    * **Usage:** Run this before committing to ensure your changes haven't introduced regressions.
    * **Example:** `npm run test`

* **`npm run test:ui`**
    * **Purpose:** Launches the Vitest UI, providing an interactive interface to run, filter, and inspect test results visually.
    * **Usage:** Useful for local development and debugging tests.
    * **Example:** `npm run test:ui`

* **`npm run test:watch`**
    * **Purpose:** Runs tests in watch mode. This means Vitest will monitor your files for changes and re-run relevant tests automatically, providing rapid feedback during development.
    * **Usage:** Ideal for local development when actively writing or modifying tests and code.
    * **Example:** `npm run test:watch`

---

## 4. Continuous Integration (CI)

Our GitHub Actions workflow (`.github/workflows/validate.yml`) automatically runs the formatting, linting, and testing steps on every `push` to `master` and `beta` branches, and for every `pull_request`.

* **Workflow Steps:**
    1.  **Cancel Previous Runs:** Stops any redundant ongoing workflow runs for the same branch/PR.
    2.  **Checkout repository:** Fetches the latest code.
    3.  **Setup Node.js:** Configures the Node.js environment (v18).
    4.  **Install dependencies:** Installs all project dependencies using `npm ci` for a clean and fast install.
    5.  **Check Code Formatting (`npm run check:format`):** Ensures all code adheres to our Prettier formatting rules. This step will fail the CI if any unformatted files are found.
    6.  **Run All Linting Checks (`npm run lint`):** Executes ESLint, Stylelint, and TypeScript type checks. This step will fail if any quality or type errors are detected.
    7.  **Run Tests (`npm run test`):** Executes all Vitest tests. This step will fail if any tests do not pass.

By integrating these checks into our CI, we ensure that only high-quality, functional, and consistently styled code is merged into our `master` and `beta` branches.