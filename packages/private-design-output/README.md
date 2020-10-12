# 🔒 `private-design-output`

> Generate a flat distribution of the UQDS

## Modify to achieve desired output

Modify the `src/js/main.js`, `src/scss/main.scss`, and `src/kitchen-sink.html`
files to customise your output. Please consider that other users of this package
may require resources that you do not — so be careful when deleting contents if
you intend to commit and propose changes.

## Run tasks

Firstly, [install the Gulp CLI](https://gulpjs.com/docs/en/getting-started/quick-start/), if you haven't already.

Then, make sure you are in the correct working directory i.e.

```bash
cd [path to repo...]/design-system/packages/private-design-output
```

From this directory, you can run all the tasks:

```bash
gulp
```

Or, you can run individual tasks:

```bash
gulp compileSCSS
gulp exportFontFiles
gulp exportImages
gulp exportKitchenSink
gulp bundleJS
```
