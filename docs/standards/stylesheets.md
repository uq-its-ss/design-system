**[⬅ Back to root](/../../#readme) / [Code standards and style](standards.md)**

# SCSS (Sass) and CSS

## Prefixing class names

To prevent the accidental overriding of third-party system code, the UIDF should
provide `uq` prefixed CSS components. In other words, prefix all class names
with `uq-`. E.g. `.uq-header`.

> RULE OF THUMB: the user of a UIDF package may also use other frameworks and
> libraries.

## Class naming convention

In short, we use [BEM](http://getbem.com/) methodology to to create reusable
components.
