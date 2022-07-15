# Special maintenance instructions

## Icons SCSS

In an effort to make applying icons to style rules easier, an icon Sass file
(`src/scss/_icons.scss`) gets generated—providing the public `get-icon($icon, $color)` function. This function has access to a private map of icons—generated from
the SVG files that are stored in the `src/images/` directory.

For example, we can use the function as follows:

```scss
// src/scss/_component.scss

@use "icons" as *;

select {
  background-image: url(get-icon("form-chevron-down", core.$uq-purple));
}

// where `form-chevron-down` is a key in the generated icon map.
```

### Add, remove, or modify an icon

1. Add/remove an icon (to/from the `src/images` directory), or modify an
   existing SVG file.
2. Then, run the following command from the package root:

```bash
npm run build-icons
```

3. Commit your newly generated `_icon.scss` file.

> Caveat: the source SVG files themselves should be well-formed. If they are
> not, the process will not correctly apply colour and your icon might not
> display as intended.
