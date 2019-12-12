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

## Creating a new package

Create a package file:
`packages/my-component-name`

Create subfiles and directories:
```packages/my-component-name/src
packages/my-component-name/src/scss
packages/my-component-name/src/scss/_component.scss
packages/my-component-name/src/scss/_global.scss
```
Create the storybook files:
```
packages/storybook-html/src/components/my-component-name
packages/storybook-html/stories/components/my-component-name.stories.js
```

Add component to Storybook dependencies:
 `packages/storybook-html/packages.json`
```
  "dependencies": {
    "@uq-uidf/my-component-name": "^0.0.0",
  }
```


## Running Verdaccio to simulate publication of packages

Verdaccio is a local npm registry proxy that we can use to simulation publishing packages.  
**If you wish to simulate the publication of packages for training reasons, please fork this monorepo**. `npx lerna publish` will create a commit on your repo.

### Set up Verdaccio for local package publication

Set up Verdaccio globally:  
`$ npm i -g verdaccio`

Run Verdaccio:  
`$ verdaccio`

Configure the monorepo's `lerna.json` file to point to the registry server, i.e.:  
```
"command": {
  "publish": {
    "registry": "http://localhost:4873/"
  }
}
```

All packages should also be configured as so:
```
"publishConfig": {
  "registry": "http://localhost:4873/"
}
```
This is to prevent accidental publication to a public registry (TODO: needs revisiting).

Publish using Lerna:  
`$ npx lerna publish`  
Follow the instructions to bump you package versions.  
You may need to create a user account during this step.

Voila!

## Proposal: src/ vs. lib/ vs. dist/

- src: for developers of the UIDF
- lib: for consumers of the UIDF (generated, advanced, bring your own build system)
- dist: for consumers of the UIDF (generated, no build system required, minified)