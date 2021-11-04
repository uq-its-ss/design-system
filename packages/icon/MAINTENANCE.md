# Special maintenance instructions

In an effort to make maintenance easier, a build script (`src/ts/build-icons/index.ts` compiled to `dist/index.js`)
generates resources (into `src/scss/_build`) by processing the `src/images`
folder. The image folder has this convention, which you should follow:

```text
src/
└─ images/
   ├─ some-category/
   │  ├─ some-image.svg
   │  └─ ...
   ├─ some-other-category/
   │  ├─ some-other-image.svg
   │  └─ ...
   └─ ...
```

## Add, remove, or modify an icon

1. Add/remove an icon (to/from the `src/images` directory), or modify an
existing SVG file (please follow above folder convention).
2. Then, run the following command from the package root:

```bash
npm run build
```

3. Commit your generated `src/scss/_build` files.

> Caveat: the source SVG files themselves should be well-formed. If they are
> not, the process will not correctly apply colour and your icon might not
> display as intended. At this stage, multi-colour fills and strokes are not
> supported.
