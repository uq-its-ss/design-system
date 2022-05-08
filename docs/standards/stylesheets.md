**[⬅ Back to root](/../../#readme) / [Code standards and style](standards.md)**

# SCSS (Sass) and CSS

> We aim to follow the latest Sass language specifications. See
> [Sass documentation](https://sass-lang.com/) for details.

## Prefixing class names

By prefixing our class names, we aim to ensure that we don't cause CSS selector
clashes.

### In component packages

To prevent the accidental overriding of third-party stylesheet properties, the
UQDS should provide `uq` prefixed CSS components. In other words, prefix all
class names with `uq-`. E.g. `.legacy-header`, `.uq-button .uq-button--secondary`.

> RULE OF THUMB: allow UQDS components to work well with other front-end
> frameworks and libraries.

### Documentation styling and design system support classes.

Additional styling maybe required to showcase components or enhance documentation.
These are styles that would not be expected in the production code, **solely** to exhibit or demonstrate usage of components or core styles.

Prefix such classes with
`uqds` E.g. `.uqds-button-example`, `.uqds-example-container`.

#### Repo packages that this rule applies to:

- `storybook-html`
- `private-design-output`

## Class naming convention

In short, we use [BEM](http://getbem.com/) methodology to create reusable
components.

## Sass modules & namespacing

We use the [`@use` rule](https://sass-lang.com/documentation/at-rules/use) to
load other Sass stylesheets as _modules_.
To [load the members](https://sass-lang.com/documentation/at-rules/use#loading-members)
of a stylesheet outside the immediate package, we should always
[choose a namespace](https://sass-lang.com/documentation/at-rules/use#choosing-a-namespace).

For example in `button/src/scss/_component.scss`, I may have:

```scss
@use '@uqds/core/src/scss/_global' as core;

.uq-button {
  // loading a variable
  background-color: core.$uq-purple;
  // loading a mixin
  @include core.box-sizing;
  ...
```

If I'm loading a stylesheet within the `button` package as well, it might be
more like this:

```scss
@use '@uqds/core/src/scss/_global' as core;
@use '_global' as *;

.uq-button {
  // loading a variable from button/src/scss/global.scss
  background-color: $bg-color;
  // loading a mixin
  @include core.box-sizing;
  ...
}
```

In the above example, it makes sense to remove the namespace as the `$bg-color`
variable is defined within the package of concern.
