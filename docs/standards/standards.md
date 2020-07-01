**[⬅ Back to root](/../../#readme)**

# Code standards and style

Helps with code reviews. Helps with coding. Helps with maintainability.

## Basic style recommendations

- Line length should be limited to 120 characters. Use your ruler settings.
- Tabs are 2 characters, and thus indentations are also 2 characters.

---

## CSS

See: [CSS standards](stylesheets.md)

## JS

See: [JS standards](javascript.md)

---

## Namespacing/prefixing

To prevent the accidental overriding of third-party system code, the UIDF should provide `uq` namespaced/prefixed resources.

| Resource | Rule |
| -------- | ---- |
| CSS modules | Prefix all class names with `uq-`. E.g. `.uq-main-menu` |
| JS modules | **Module scope should (naturally) be handled by consuming JS project.** Pre-compiled code should be scoped within a `uq` namespace. E.g. `uq.mainMenu` |

---

## Browser support (TODO: replace with more central doc)

All components have to work on the below browsers:

| Browser           | Version           | Platform      | Engine   |
|-------------------|-------------------|---------------|----------|
| Internet Explorer | 11                | Windows 8.1   | Trident  |
| Edge              | Latest            | Windows 10    | EdgeHTML |
| Firefox           | Latest            | OS X          | Gecko    |
| Firefox           | Latest            | Windows 10    | Gecko    |
| Firefox           | Latest            | Android 6     | Gecko    |
| Chrome            | Latest            | OS X          | Blink    |
| Chrome            | Latest            | Windows 10    | Blink    |
| Chrome            | Latest            | Android 4.0   | Blink    |
| Chrome            | Latest            | Android 6     | Blink    |
| Safari            | Latest (11)       | OS X          | WebKit   |
| Safari            | Latest - 1 ( 10 ) | iOS           | WebKit   |

*Subset of the [govau/design-system-components](https://github.com/govau/design-system-components/blob/master/README.md) supported browsers.*
