**[⬅ Back to root](/../../#readme) / [Staff training](training.md)**

# JavaScript packages

> If you haven't created and published Javascript packages before (e.g. NPM,
> Yarn), it may help you to run through the exercises contained in this page.

## JavaScript packages introductory reading

[TODO]

## JavaScript package registries

A JavaScript package registry is a JavaScript software-package hosting service.
For example,

- AWS CodeArtifact
- NPM.org (serves as the default for proxy registries)
- Github packages etc.

Packages in these registries are in CommonJS format and include a metadata file
in JSON format (`package.json`).

### Why JavaScript packages?

[TODO]

### Private vs. Public registries/packages

[TODO]

## Running and publishing to Verdaccio

Verdaccio is a local npm registry proxy that we can use to play with publishing
packages from the design system.

> **🚨 Before continuing, please [fork][1] (NOT branch) the UQDS monorepo — as
> `npx lerna publish` will create tags on the repo.**

### 1. Set up Verdaccio for local package publication

Install Verdaccio package globally:

```shell
$ npm i -g verdaccio
```

Run Verdaccio:

```shell
$ verdaccio
```

Your registry should now be running. You will need to create a user account
during this step as well. For instructions, navigate the Verdaccio
local server address (http://localhost:4873/ by default).

### 2. Point NPM to your Verdaccio registry

You must configure the design system folder's `.npmrc` file (you have to create
this) to point your new local registry (Verdaccio) server, i.e.:

```
# ~/.npmrc
registry=http://localhost:4873/
```

With Verdaccio still running, publish the packages using the Lerna `publish`
command.

```shell
$ npx lerna publish
```

Follow the instructions to bump your package versions.

Voila! You have now published the packages to a registry.

## Consuming the packages you've published

You can do this step in an existing project or start a new project. Doing as
little as running `npm init` or as much as using [_Create React App_][3] to
scaffold your new project is up to you.

Firstly, you will need to configure the `registry` setting in an [`.npmrc`][2]
file (located at the root of your project or you have to create it) like below.

```
# ~/.npmrc
registry=http://localhost:4873/
```

Once this is done, you can install packages as you normally would, e.g.
`npm i @uqds/accordion`.

[1]: https://docs.github.com/en/github/getting-started-with-github/fork-a-repo
[2]: https://docs.npmjs.com/cli/v7/configuring-npm/npmrc
[3]: https://create-react-app.dev/docs/getting-started/
