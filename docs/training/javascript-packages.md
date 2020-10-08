**[⬅ Back to root](/../../#readme) / [Staff training](training.md)**

# Javascript packages

> If you haven't created and published Javascript packages before (e.g. NPM, 
> Yarn), it may help you to run through the exercises contained in this page.

## Javascript packages introductory reading

[TODO]

## Javascript package registries

[TODO]

- registry.npm.org
- Github packages
- Gemfury
- ...

### Private vs. Public registries/packages

## Running Verdaccio to simulate publication of packages

Verdaccio is a local npm registry proxy that we can use to simulate publishing
packages. By default, this monorepo is set to publish to the default Verdaccio
local server address (http://localhost:4873/).

> **🚨 Before continuing, please fork or branch the UQDS monorepo — as 
> `npx lerna publish` will create tags on the repo.**

### Set up Verdaccio for local package publication

Set up Verdaccio globally:
```ssh
$ npm i -g verdaccio
```

Run Verdaccio:  
```ssh
$ verdaccio
```

Your registry should now be running.

🚨 IMPORTANT: you must configure the monorepo's `lerna.json` file to point your
local registry server, i.e.:

```json
"command": {
  "publish": {
    "registry": "http://localhost:4873/"
  }
}
```

Also as a precaution, please also configure the `registry` setting in the
`.npmrc` file as below (make sure that the line is not commented out):

```
registry=http://localhost:4873/
```

Then publish using Lerna:
```ssh
$ npx lerna publish
```
Follow the instructions to bump you package versions.  
You may need to create a user account during this step. For more information,
please refer to the Verdaccio docs.

Voila!

## Next steps

If you're comfortable with the above, please refer to 
[our guide on publishing packages](./docs/development/publishing-packages.md) to
our registry.
