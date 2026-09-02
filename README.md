# UQ Design System (UQDS)

This is the repository for the UQ Design System.

The UQ Design System is a guide to how user interfaces should look, feel, behave and be coded at UQ. It includes a guide to the core styles, components, patterns and standards for UQ user interfaces.

Go to the [UQ Design System](https://design-system.uq.edu.au/) website for information about:

- what the design system is
- how to use it
- UQ styles, components, patterns and examples
- how to contribute.

---

# Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for detailed contribution guidelines including:

- Commit message format (conventional commits)
- Pull request process
- Multi-package change handling
- Release workflow

## Quick Start

If your development environment is setup simply run the following line in your terminal.

`npm run ci && npm run storybook`

It will install dependancies, build and deploy both Storybook HTML (http://localhost:6006/) and Storybook REACT (http://localhost:6007).

Otherwise see the full [Setup instructions](./docs/setup-instructions.md).

---

## Releases

**Latest release:** See [GitHub Releases](https://github.com/uq-its-ss/design-system/releases)

**Changelog:** [CHANGELOG.md](./CHANGELOG.md) (auto-generated from stable releases)

**Release types:**

- **Alpha releases** (master branch): Published to npm with `@alpha` tag, multiple times per week
- **Stable releases** (releases branch): Published to npm with `@latest` tag, monthly

---

## GitHub documentation

This contains information only relevent to working in the repository. Documentation about designing and developing user interfaces is on the [UQ Design System](https://design-system.uq.edu.au) website.

Contents:

### Getting Started

- [Contributing Guide](./docs/CONTRIBUTING.md) ⭐
- [Setup instructions](./docs/setup-instructions.md)
- [Commit workflow](./docs/commit-workflow.md)

### Development

- [Using Storybook as a styleguide for component development](./docs/using-storybook.md)
- [Creating a new package](./docs/create-a-package.md)
- [Bundling](./docs/bundling.md)
- [Code Quality and Testing Guide](./docs/testing/testing-linting.md)
- [Code standards and style](./docs/standards/standards.md)

### Architecture

- [ADR-0001: Release Documentation Strategy](./docs/adr/0001-release-documentation-strategy.md)

### Other

- [Access requests](./docs/access-request.md)
- [Staff training](./docs/training/training.md)
- [Accessibility requirements](./docs/accessibility.md)
- Testing
  - [Visual Regression Testing](./docs/testing/visual-regression.md)
- Package docs
  - [`icons`](./packages/icon/MAINTENANCE.md)
  - [`uqds-builder`](./packages/uqds-builder#readme)
  - [`storybook-html`](./packages/storybook-html#readme)
