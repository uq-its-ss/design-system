# `@uqds/react`

> React components

## Usage

### Installation

With Yarn:

```shell
yarn add @uqds/react
```

With NPM:

```shell
npm i @uqds/react
```

Installing an alpha version. NPM won't install alpha versions unless you explicitly ask for it with `--tag`:

```shell
npm i -S @uqds/react@latest --tag=alpha
```

### Implementation

The package provides two build outputs to support different environments:

#### CSS Modules Build (Default - Recommended)

For modern React apps with bundlers that support CSS Modules (Vite, Webpack, etc.). Provides scoped, hashed class names to avoid style conflicts.

1. Import the CSS in a top-level file, such as `App.tsx`:

   ```tsx
   import '@uqds/react/css';
   ```

2. Import and use components:

   ```tsx
   import { Button, Alert } from '@uqds/react';

   <Button label="Click me" onClick={() => {}} />
   <Alert variant="info">Important message</Alert>
   ```

#### Plain CSS Build

For environments that require global CSS class names (e.g., Drupal with mixed React/Twig templates). Components use unscoped class names like `uq-button`.

1. Import the plain CSS:

   ```tsx
   import '@uqds/react/plain/css';
   ```

2. Import components from the plain build:

   ```tsx
   import { UqCard, UqPane } from '@uqds/react/plain';

   <UqCard title="Example" variant="default" />
   ```

**Note:** Both builds compile from the same Style Package SCSS sources (`@uqds/button`, `@uqds/card`, etc.) to ensure visual consistency.

### Architecture

See [ADR 0001: Co-located CSS Modules with Dual-Build System](../../docs/adr/0001-co-located-css-modules-with-dual-build.md) for technical details about the package architecture.
