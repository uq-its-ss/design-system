# `blockquote`

> TODO: description

## Usage

```
const blockquote = require('blockquote');

// TODO: DEMONSTRATE API
```

# Quote mark in Blockquote
As there were nesting issues when using font icons for open quote marks (as per the brand design there is only open quotes) in blockquotes, we have now resolved to use SVG icons instead.

As SVG are sourced in as a background-image in the CSS, we cannot change its colour property. As a work around we are using individual SVGs with different colours.

At present SVG sprite hasn't been used for the different colour states of the quotes as some browsers like Safari doesn't support fragment identifiers within CSS.

Example of a fragment identifier in CSS

.title:after {
    background-image: url(directory/path-to-svg-sprite.svg#arrow-right);
}

```