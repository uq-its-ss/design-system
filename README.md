# UQ User Interface Development Framework

> The UQ Web Components library.  
> Styleguide-driven development using `storybook-html` package.

## Setup instructions for package development

### Install monorepo dependencies

`$ npm i`

### Set up packages w/ Lerna

`$ npx lerna bootstrap`

### Using Storybook for component development

1. Change to the `storybook-html` package directory
```shell
$ cd packages/storybook-html
```
2. Run Storybook
```shell
$ npm run storybook
```

## Creating a new package

Create a package file:
`packages/my-component-name`

Create subfiles and directories:
```
packages/my-component-name/src
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

## Using Github to practice publication of packages

Got the hang of packages? Now move on to publishing private packages to Github.

## Proposal: src/ vs. lib/ vs. dist/

- src: for developers of the UIDF
- lib: for consumers of the UIDF (generated, advanced, bring your own build system)
- dist: for consumers of the UIDF (generated, no build system required, minified)

## WIP: Web Components notes

https://developer.mozilla.org/en-US/docs/Web/Web_Components
