# Spike of Lerna and a monorepository for a CSS(modern/postCSS)/JS(ES6 classes) components library with HTML examples

The `storybook-html` package is used to develop components.

## Stack
  - Verdaccio: local Javascript package registry (for packages that implement the CommonJS Compliant Package specification; local network proxy).
  - Lerna.js: management tool for Javascript monorepositories (for the components library).
  - Storybook.js: UI component explorer for front-end developers (consumes and documents the components library for development of the latest versions).

## Setup instructions for package development

### Install monorepo dependencies

`$ npm i`

### Set up packages w/ Lerna

`$ npx lerna bootstrap`

### Using Storybook for component development

1. Change to the `storybook-html` package directory
2. `$ npm run storybook`

Note: you may need to manually install `font-awesome 4.7.0`, which is a peer dependency of `@uq-uidf/core`, as Lerna does not bootstrap peer dependencies.

## Running Verdaccio to simulated publishing of packages

Verdaccio is a local npm registry proxy that we can use to simulation publishing packages.

### Set up Verdaccio for local package publication

Set up Verdaccio globally:  
`$ npm i -g verdaccio`

Publish using Lerna:  
`$ npx lerna publish`