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

## SASS name spacing

When we `@use` a file, Sass automatically generates a namespace based on the file name:

```html
@use 'buttons'; // creates a `buttons` namespace
@use 'forms'; // creates a `forms` namespace
```

Because the imported features are namespaced, we have to use a new period-divided syntax to access them:

```html
// variables: <namespace>.$variable
$btn-color: buttons.$color;
$form-border: forms.$input-border;
```

We can change or remove the default namespace by adding as <name> to the import:

```html
@use 'buttons' as *; // the star removes any namespace
@use 'forms' as f;

$btn-color: $color; // buttons.$color without a namespace
$form-border: f.$input-border; // forms.$input-border with a custom namespace
```