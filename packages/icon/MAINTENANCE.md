# Icon package maintenance
There are a number of steps you will have to follow to maintain the icons. Briefly the process involves the SVG icons in the images folder to be converted to data urls via PostCSS and then copying the generated data urls to _icons.scss file as specified below. The process is semi manual and would be preferably automated in the future. Please follow the steps below for a detailed understanding.

## Adding Icon
1. Add the SVG icon in its appropriate category folder. (Path: `packages/icon/src/images/category folder/...`)
2. Edit the PostCSS file `style.css` to add appropriate css code for the icon reflecting its category-name and icon-name. (Example: `@mixin icon standard, phone;`) (Path: `packages/icon/src/css/style.css`) 
3. The PostCSS file generates an output css file `style.css` when the CLI command `npm run generate` is run. (Path to output file: `packages/icon/temp/style.css`). 
4. Copy the data URL of the icon from the generated `style.css` and paste it into `_icons.scss` following the name, value pairs format (Example: `"icon-name" : "icon-data-url"`) (Path: `packages/icon/src/scss/_icons.scss`). When copying the data url of the icon, make sure to copy only starting from `%3Csvg` and ending with `svg%3E`. Also to note is that there can't be duplicate icon-names which will throw an error.
5. Replace the color in the data URL with `%%COLOR%%`. (For example, `stroke='%23000'` becomes `stroke='%%COLOR%%'` or `fill='%23000'` becomes `fill='%%COLOR%%'`. Some browsers have an issue with `#` in the data url hence hex colour value `#000` is replaced by `%23000` which is already generated that way via PostCSS)
6. Edit SCSS file `_component.scss` and include the icon in the format `@include icon('category-name', 'icon-name');` (For example, `@include icon('agriculture-and-environment', 'ecology-leaf-book-open');`)
7. Update the icon examples in Storybook: edit the `icon.html` and add the html code for the respective icon under its category title. (Sample format: `<span class="uq-icon uq-icon--search uq-icon--light"></span>`) (Path: `packages/storybook-html/src/components/icon/icon.html`)

Thats it. You should be able to see the icon when the `storybook-html` package is run.

### Notes
1. For changing icon styles, edit the SCSS file `_global.scss`.
2. Some icon categories have the same icon names and hence cause of duplication in the SCSS file `_icons.scss`. Currently the duplicate ones have been commented.

## Generate the inlined SVG icons into temporary CSS file

`npm run generate` will transform the `src/css/style.css` file and dump the
results into `temp/css/style.css`.
