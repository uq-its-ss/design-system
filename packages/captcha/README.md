# @uqds/captcha

> Setup and guidelines for captcha usage

## Usage

### Installation

With Yarn:

```shell
yarn add @uqds/captcha
```

With NPM:

```shell
npm i @uqds/captcha
```

### Create a widget

```html
<div id="uq-captcha" class="uq-captcha"></div>
```

```javascript
import { captcha } from "@uqds/captcha/src/js/main";

captcha(document.querySelector("#uq-captcha"), "YOUR_SITEKEY");
```

### Styles

```scss
@use "@uqds/captcha/src/scss/main";
```

---

## Dependencies

```
@uqds/captcha
├─ @uqds/core
└─ @friendlycaptcha/sdk
```
