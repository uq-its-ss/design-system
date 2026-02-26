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

Installing an alpha version. NPM won't install alpha versions unless you explicity ask for it with `--tag`

```shell
npm i -S @uqds/react@latest --tag=alpha
```

### Implementation

1. Import the CSS in a top-level file, such as `App.tsx`.

   import '@uqds/react/css';

2. In a React .tsx or .jsx file, import and use the components as needed.

   import { TextInput } from '@uqds/react';

   <TextInput placeholder="Example" />
