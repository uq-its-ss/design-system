# Release management

## When w

The design system automates processes where possible. 

We have two main environments. 

Stage 
Production

## When we push to stage

- Automatically when a Pull request is approved
- Critical bug fix

## When we push to Production

- After a major system change or scheduled release

Conventional Commits [eBay](https://ebay.com)

## Publishing Storybook

## Publishing packages

All packages are published to the [NPM registry](https://www.npmjs.com/search?q=uqds). 

Packages are scoped to `@uqds/`



We automaticallu publish *Alpha* and *Latest* packages with semantic versioning.