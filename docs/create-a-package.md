**[⬅ Back to root](/../#readme)**

# Create a new package

## 1. Package scaffolding

### SASS (SCSS)

#### Development files

The SASS development files are also the SASS modules for package users.

| @uqmchu/[package folder name]/src/scss |   |
| --------------------------------------- | - |
| ⤵️ `_component.scss` | main stylesheet for the component (imports the `_globals` file) |
| ⤵️ `_globals.scss` | variables, mixins (no CSS is emitted from these files!) |
| ⤵️ `_print.scss` | (optional) print styles |

##### Resulting generated files

| @uqmchu/[package folder name]/dist/css |   |
| ----------------- | - |
| ⤵️ `uq-uidf-[package].css` | Compiled stylesheet for the component |
| ⤵️ `uq-uidf-[package].min.css` | Minified |

---

## JS (ES6)

#### Development files

The JS development files are also the ES6 modules for package users.

| @uqmchu/[package folder name]/src/js |   |
| --------------------------------------- | - |
| ⤵️ `[package].es6.js` | ES6 module export file |

##### Resulting generated files

| @uqmchu/[package folder name]/dist/js |   |
| ----------------- | - |
| ⤵️ `uq-uidf-[package].js` | Compiled output JS |
| ⤵️ `uq-uidf-[package].min.js` | Uglified |

---

Please ensure you read the [standards docs](standards/standards.md).

---

## 2. Add your example to Storybook

Refer to [*Using Storybook as a styleguide for component development*](/../../#using-storybook-as-a-styleguide-for-component-development).
