# Co-located CSS Modules with Dual-Build System

The `@uqds/react` package uses co-located CSS Module files (e.g., `button.module.scss` next to `Button.tsx`) and maintains two separate builds: a CSS Modules build with code-splitting for modern bundlers, and a plain CSS build that outputs a single global stylesheet for environments like Drupal. Each component imports styles from its co-located `.module.scss` file, which in turn imports from the canonical Style Package SCSS (e.g., `@uqds/button/src/scss/main`). This approach provides tree-shaking benefits for CSS Modules consumers while supporting Drupal's constraint of needing a global stylesheet for mixed React/Twig rendering.

## Context

The design system supports multiple consumer environments:

1. **Storybook and standalone React apps** — modern bundlers that benefit from CSS code-splitting and scoped class names
2. **Drupal platform** — renders both React islands and server-side Twig templates that share a single global stylesheet

Both environments must render components identically from the same SCSS source of truth maintained in individual Style Packages (`@uqds/button`, `@uqds/card`, etc.).

## Decision

### Component Structure

Each React component imports its own co-located `.module.scss` file:

```tsx
// Button.tsx
import styles from "./button.module.scss";
className={styles["uq-button"]}
```

```scss
// button.module.scss
@use "@uqds/button/src/scss/main" as button;
```

### Build Configuration

**CSS Modules Build** (`dist/modules/`, via `@uqds/react`):

- `cssCodeSplit: true` — outputs separate CSS chunks per component
- `generateScopedName: "[name]__[local]___[hash:base64:5]"` — hashed class names
- Enables tree-shaking: import only Button → load only button CSS

**Plain CSS Build** (`dist/plain/`, via `@uqds/react/plain`):

- `cssCodeSplit: false` — outputs single `index.css` with all component styles
- `generateScopedName: "[local]"` — unscoped class names (e.g., `uq-button`)
- Drupal loads this as a global stylesheet

Both builds use the same component source code. Vite automatically discovers and bundles CSS by following component imports.

## Considered Options

### Shared `index.module.scss` (rejected)

Components import from a central stylesheet:

```tsx
import css from "../index.module.scss";
```

**Why rejected:**

- No tree-shaking — all component styles bundled even if only one component imported
- Tight coupling — adding/removing components requires editing shared file
- Merge conflicts when multiple developers add components
- Manual synchronization between components and import list

### Single-build system (rejected)

Maintain only CSS Modules build or only plain CSS build.

**Why rejected:**

- CSS Modules only: breaks Drupal, which needs global class names for Twig templates
- Plain CSS only: loses tree-shaking benefits for modern consumers
- Drupal's constraint (mixed React/Twig rendering) is not changing

### Co-located files without dual-build (rejected - qa65812 mistake)

Use co-located CSS Modules but remove the plain CSS build.

**Why rejected:**

- Breaks Drupal platform immediately
- Would require Drupal to adopt CSS Modules or compile SCSS directly
- Not feasible given Drupal's architecture

## Consequences

**Benefits:**

- Tree-shaking works for CSS Modules consumers (import Button → load only button CSS)
- Self-contained components — styles, logic, and imports in one directory
- No central stylesheet bottleneck — parallel development without conflicts
- Easy to extract or move components between packages
- Clear migration path — all components follow one pattern

**Trade-offs:**

- Increased build complexity — must maintain two Vite configs and build outputs
- Build time slightly longer (two builds instead of one)
- Package size includes both builds (though npm consumers only use one)
- Repetitive import boilerplate in each component (small developer cost)
- **Note:** Vite's library mode bundles all CSS into single files (`dist/modules/index.css` and `dist/plain/index.css`) regardless of `cssCodeSplit` setting. Tree-shaking benefits apply when consumers use their own bundler to import components, as each component's explicit imports allow dead-code elimination at the consumer level.

**Migration:**

- Existing OLD components (UqCard, UqIcon, UqPane, UqStoryCard) currently use plain string class names
- All are only consumed via `/plain` build (Drupal), so migrating to CSS Modules is non-breaking
- Each OLD component needs co-located `.module.scss` file created and import updated
