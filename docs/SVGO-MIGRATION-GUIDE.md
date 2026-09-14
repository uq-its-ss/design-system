# SVGO 4.x Migration Guide

This guide covers the migration from SVGO 2.8.0 to 4.1.0 in the UQ Design System icon packages.

## Overview

**Affected Packages:**

- `@uqds/icon` - Bumped to v5.0.0 (breaking change)
- `@uqds/app-maps` - Internal build process updated (private package)

**Key Changes:**

- SVGO upgraded from 2.8.0 to 4.1.0
- SVG markup output has changed (visually identical)
- New build utilities exported from `@uqds/icon`
- Shared SVGO configuration using preset-default

## For Icon Package Consumers

### Breaking Changes

**1. SVG Markup Structure**

The internal SVG markup has changed due to SVGO 4.x optimizations. The visual output is **identical**, but the code structure is different.

**Before (SVGO 2.8.0):**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <path d="M2.97 10.94c..." fill="~~COLOR~~"/>
</svg>
```

**After (SVGO 4.1.0):**

```svg
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
  <path d='M2.97 10.94c...' fill='~~COLOR~~'/>
</svg>
```

**Impact:**

- If you simply use icons via Sass/CSS → **No changes needed**
- If you post-process SVG markup → **Run visual regression tests**
- If you depend on exact SVG structure → **Validate your integration**

### Validation Steps

1. **Visual Regression Testing:**

   - Update your baseline screenshots
   - Run visual diff tests
   - Verify icons render identically

2. **Integration Testing:**

   - Test icon rendering in your application
   - Verify color placeholders work (if using `get-icon()` Sass function)
   - Check any custom SVG post-processing

3. **Update Dependencies:**
   ```bash
   npm install @uqds/icon@5
   ```

### New Features

**Build Utilities Export:**

You can now use the icon build infrastructure in your own projects:

```typescript
import { buildIcons } from "@uqds/icon/build-utils";

await buildIcons({
  inputDir: "./my-icons/",
  outputDir: "./dist/",
  outputs: {
    sass: "./output.scss",
  },
});
```

See [icon package README](../packages/icon/README.md) for full documentation.

## For Package Maintainers

### SVGO Configuration Changes

**Old (SVGO 2.x):**

```typescript
{
  plugins: [
    "removeDoctype",
    "cleanupIDs",
    // ... 30+ plugin names
  ];
}
```

**New (SVGO 4.x):**

```typescript
{
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          sortAttrs: false,
        },
      },
    },
    "convertStyleToAttrs",
    "removeDimensions",
  ];
}
```

### Build Process Updates

**Icon Package:**

- Refactored to use `buildIcons()` utility
- Build script simplified to configuration
- SVGO config extracted to shared module

**App-maps Package:**

- Converted from JavaScript to TypeScript
- Now imports `buildIcons` from `@uqds/icon/build-utils`
- Removed duplicate SVGO configuration
- Removed `.svgo.yml` file

### Testing Workflow

```bash
# 1. Build icons with new SVGO
npm run build-icons

# 2. Verify output
git diff dist/images/  # Review SVG markup changes

# 3. Visual regression
git add dist/images/
git commit -m "chore: baseline icons before SVGO migration"
# ... make changes ...
npm run build-icons
npm run storybook
npm run reg-suit  # Visual regression in CI
```

## Configuration Examples

### Icon Package (Default Behavior)

```typescript
// All categories get color placeholders
// All categories exported to all outputs
await buildIcons({
  inputDir: "./src/images/",
  outputDir: "./dist/images/",
  outputs: {
    sass: "./src/scss/_build/_icons.scss",
    js: "./src/js/_build/_icons.js",
    ts: "./src/ts/_build/_icons.d.ts",
    sassMixins: "./src/scss/_build/_icons-emit.scss",
  },
});
```

### App-maps (Selective Behavior)

```typescript
// Only 'ui' icons get color placeholders
// Only 'ui' + 'logo' exported to Sass
// 'map' icons optimized but not exported
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

## Troubleshooting

### Issue: Icons not rendering

**Solution:** Clear CSS cache and rebuild:

```bash
npm run clean
npm run prepare
```

### Issue: Wrong colors on icons

**Check:** Ensure `get-icon()` Sass function is being called correctly:

```scss
@use "@uqds/icon/src/scss/global" as icon;

.my-icon {
  background-image: url(icon.get-icon("ui--arrow", #51247a));
}
```

### Issue: Build fails with "plugin not found"

**Solution:** Check SVGO version is 4.1.0+:

```bash
npm list svgo
```

### Issue: TypeScript errors when using build-utils

**Solution:** Ensure TypeScript can resolve the types:

```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

## References

- [ADR 0001: Unified SVG Build Infrastructure](./adr/0001-unified-svg-build-infrastructure.md)
- [SVGO 4.x Documentation](https://github.com/svg/svgo)
- [Icon Package README](../packages/icon/README.md)
- [Icon Package CHANGELOG](../packages/icon/CHANGELOG.md)

## Support

For issues or questions:

- Create an issue: https://github.com/uq-its-ss/design-system/issues
- Email: webservices@uq.edu.au
