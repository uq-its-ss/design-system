# @uqds/icon

Icon component for the UQ Design System.

## Installation

With NPM:

```shell
npm install @uqds/icon
```

With Yarn:

```shell
yarn add @uqds/icon
```

## Usage

See [Storybook documentation](https://design-system.uq.edu.au) for examples and full documentation.

## Build Utilities (v5.0.0+)

This package exports build utilities for SVG optimization and icon generation, allowing you to create custom icon libraries with the same tooling.

### Basic Usage

```typescript
import { buildIcons } from "@uqds/icon/build-utils";

await buildIcons({
  inputDir: "./src/images/",
  outputDir: "./dist/images/",
  outputs: {
    sass: "./src/scss/_icons.scss",
    js: "./src/js/_icons.js",
    ts: "./src/ts/_icons.d.ts",
  },
});
```

### Configuration Options

**Required:**

- `inputDir` - Source directory containing SVG files organized in category folders
- `outputDir` - Destination directory for optimized SVGs

**Optional:**

- `colorPlaceholderCategories` - Array of categories to receive `~~COLOR~~` placeholders for runtime color control (default: all categories)
- `exportCategories` - Array of categories to export to output modules (default: all categories)
- `outputs` - Output file paths (all optional):
  - `sass` - Sass module with $icons map
  - `js` - JavaScript module with icon metadata
  - `ts` - TypeScript type definitions
  - `sassMixins` - Sass mixins for generating icon CSS classes
- `svgoConfig` - SVGO configuration override (uses shared SVGO 4.x config by default)

### Example: Selective Export

```typescript
// Only 'ui' icons get color placeholders
// Only 'ui' and 'logo' icons are exported to Sass
await buildIcons({
  inputDir: "./src/images/",
  outputDir: "./dist/images/",
  colorPlaceholderCategories: ["ui"],
  exportCategories: ["ui", "logo"],
  outputs: {
    sass: "./src/scss/_icons.scss",
  },
});
```

### TypeScript Types

```typescript
import type { BuildIconsConfig, ProcessedIcon } from "@uqds/icon/build-utils";
```

## Architecture

See [ADR 0001: Unified SVG Build Infrastructure](../../docs/adr/0001-unified-svg-build-infrastructure.md) for design decisions and architecture details.

## Dependencies

```
@uqds/icon
└─ @uqds/core
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.
