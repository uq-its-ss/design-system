# Unified SVG build infrastructure in icon package

The icon package (`@uqds/icon`) now exports shared build utilities at `./build-utils` for SVG optimization and icon generation. The app-maps package consumes these utilities instead of maintaining duplicate SVGO configuration and build logic. We chose to house utilities in the icon package (rather than creating a separate builder package) because icon is the canonical implementation with the most comprehensive requirements, and app-maps is a private legacy package with specific overrides.

## Status

Accepted

## Considered Options

**Option A (chosen):** Export build utilities from `@uqds/icon` package

- icon package contains `buildIcons()` function and SVGO configuration
- app-maps imports from `@uqds/icon/build-utils`
- Version coupling: app-maps build utilities version matches icon version
- Minimal package overhead

**Option B:** Create dedicated `@uqds/icon-builder` package

- Separate package for build infrastructure
- Both icon and app-maps depend on it
- Additional package to maintain and publish
- More architecturally pure but adds complexity for a two-consumer scenario

**Option C:** Keep duplicate implementations

- Each package maintains its own build script and SVGO config
- Risk of configuration drift
- app-maps was already broken (using SVGO 1.x API with SVGO 4.x package)

## Decision Drivers

- **Icon package is canonical:** Public, published package with 18+ icon categories and comprehensive build outputs (Sass, JS, TypeScript modules)
- **App-maps is legacy:** Private package for UQ Maps with only 3 categories and selective behavior (only `ui` icons get color placeholders, only `ui` + `logo` exported to Sass)
- **Dependency direction makes sense:** app-maps already conceptually depends on design system components; depending on icon's build infrastructure is a natural extension
- **Avoid package proliferation:** Creating a separate builder package for two consumers adds maintenance overhead without proportional value

## Configuration Model

Build utilities use **convention with explicit overrides**:

- **Default behavior:** All auto-discovered icon categories receive color placeholders and are exported to all output formats
- **Override for selective behavior:** Packages specify `colorPlaceholderCategories` and `exportCategories` arrays to restrict behavior

This means:

- icon package uses zero-config (all discovered categories processed identically)
- app-maps explicitly states its exceptions (`colorPlaceholderCategories: ['ui']`, `exportCategories: ['ui', 'logo']`)
- Adding new category folders to icon package "just works"

## SVGO Configuration

Migrated from SVGO 2.8.0 to SVGO 4.1.0 using `preset-default` with minimal overrides:

```typescript
{
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          sortAttrs: false, // Explicitly disabled in original config
        },
      },
    },
    "convertStyleToAttrs", // Not in preset-default, we want this
    "removeDimensions", // Not in preset-default, we want this
  ];
}
```

## TypeScript Adoption

- **icon package:** Full TypeScript for build utilities (exports compiled JavaScript for consumers)
- **app-maps:** TypeScript only for build-icons script via `tsx` runtime; other scripts remain JavaScript
- Minimal disruption to legacy app-maps package while enabling modern build infrastructure

## Consequences

**Positive:**

- Single source of truth for SVGO configuration
- icon package build utilities available to external consumers who need custom icon processing
- app-maps build script fixed (was using broken SVGO 1.x API)
- Future SVGO updates happen once, propagate to all consumers

**Negative:**

- Version coupling: app-maps build process tied to icon package version
- icon package surface area expands (build-utils export is new public API)
- Requires major version bump (4.x → 5.0.0) for icon package due to SVG markup changes

**Neutral:**

- Sass helper functions remain package-specific (icon's sophisticated API in `_global.scss`, app-maps' simpler generated functions)
- Visual output identical despite SVG markup changes (validated via reg-suit)
