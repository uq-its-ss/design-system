# `@uqds/collapsible-text`

> Collapsible text component with fade-to-transparent teaser view

## Features

✨ **Smart Behavior** - Button only appears if content exceeds configurable threshold  
🎯 **Smooth Transitions** - JavaScript measures exact heights for consistent timing  
🎨 **Customizable** - CSS variables and data attributes for easy styling  
♿ **Accessible** - Keyboard navigation and semantic HTML  
📱 **Responsive** - Works on all screen sizes  
🎭 **Variants** - Compact and tall options

## Usage

### Installation

With Yarn:

```shell
yarn add @uqds/collapsible-text
```

With NPM:

```shell
npm i @uqds/collapsible-text
```

### JavaScript Initialization (Recommended)

For smooth, consistent transitions, initialize with JavaScript:

```javascript
import { collapsibleText } from "@uqds/collapsible-text";

// Initialize all collapsible text components
new collapsibleText();
```

The JavaScript enhancement:

- ✅ Measures actual content height for precise animations
- ✅ Only shows button if content exceeds threshold height (default: **16rem**)
- ✅ Configurable threshold via `data-collapse-threshold` attribute
- ✅ Provides consistent timing for opening and closing
- ✅ Automatically recalculates on window resize
- ✅ Hides button and fade effect for short content

See [`JS-ENHANCEMENT.md`](./JS-ENHANCEMENT.md) for details.

### Basic HTML Structure

```html
<div class="uq-collapsible-text" data-component="collapsible-text">
  <h3>Your Title</h3>

  <!-- Content with fade effect -->
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content goes here...</p>
  </div>

  <!-- Button to toggle expanded/collapsed state -->
  <button class="uq-collapsible-text__button" data-collapsible-button aria-expanded="false">
    Read more
  </button>
</div>
```

**Note:** The JavaScript will automatically update the button text and ARIA attributes.

### Custom Threshold

By default, the button only appears if content height exceeds **16rem**. You can customize this per instance:

```html
<!-- Button appears if content exceeds 20rem -->
<div class="uq-collapsible-text" data-component="collapsible-text" data-collapse-threshold="20">
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button class="uq-collapsible-text__button" data-collapsible-button aria-expanded="false">
    Read more
  </button>
</div>

<!-- Button appears if content exceeds 10rem -->
<div class="uq-collapsible-text" data-component="collapsible-text" data-collapse-threshold="10">
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button class="uq-collapsible-text__button" data-collapsible-button aria-expanded="false">
    Read more
  </button>
</div>
```

### Custom Collapsed Height

You can customize the collapsed height per instance using the `data-collapsed-height` attribute:

```html
<!-- Custom collapsed height of 8rem -->
<div class="uq-collapsible-text" data-component="collapsible-text" data-collapsed-height="8rem">
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button class="uq-collapsible-text__button" data-collapsible-button aria-expanded="false">
    Read more
  </button>
</div>

<!-- Custom collapsed height of 12rem -->
<div class="uq-collapsible-text" data-component="collapsible-text" data-collapsed-height="12rem">
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button class="uq-collapsible-text__button" data-collapsible-button aria-expanded="false">
    Read more
  </button>
</div>
```

The `data-collapsed-height` attribute accepts any CSS height value (e.g., `8rem`, `200px`, `10em`).

### Variants

**Compact** (4rem collapsed height):

```html
<div class="uq-collapsible-text uq-collapsible-text--compact" data-component="collapsible-text">
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button class="uq-collapsible-text__button" data-collapsible-button aria-expanded="false">
    Read more
  </button>
</div>
```

**Tall** (10rem collapsed height):

```html
<div class="uq-collapsible-text uq-collapsible-text--tall" data-component="collapsible-text">
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button class="uq-collapsible-text__button" data-collapsible-button aria-expanded="false">
    Read more
  </button>
</div>
```

### Customization with CSS Variables

```html
<div
  class="uq-collapsible-text"
  data-component="collapsible-text"
  style="
  --collapsible-collapsed-height: 8rem;
  --collapsible-button-bg: #de5454;
  --collapsible-button-bg-hover: #e67f7f;
"
>
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button class="uq-collapsible-text__button" data-collapsible-button aria-expanded="false">
    Read more
  </button>
</div>
```

Available CSS variables:

- `--collapsible-collapsed-height`: Height when collapsed (default: 6rem)
- `--collapsible-fade-height`: Height of fade gradient (default: 3rem)
- `--collapsible-transition-duration`: Animation speed (default: 0.3s)
- `--collapsible-button-bg`: Button background color
- `--collapsible-button-bg-hover`: Button hover color
- `--collapsible-button-color`: Button text color
- `--collapsible-fade-from`: Start color of gradient
- `--collapsible-fade-to`: End color of gradient

**Note:** For more flexibility, use the `data-collapsed-height` attribute which takes precedence over the CSS variable.

### Examples

See the [`JS-ENHANCEMENT.md`](./JS-ENHANCEMENT.md) for JavaScript details.

## How It Works

### JavaScript-Driven Interactivity

The component uses JavaScript to provide smooth, consistent transitions:

1. On initialization, JavaScript measures the actual content height
2. Reads `data-collapse-threshold` to determine when to show the button
3. Reads `data-collapsed-height` to set the initial collapsed height
4. A button element controls the expanded/collapsed state
5. Click events toggle between states with exact height values
6. ARIA attributes provide accessibility information

### CSS Styling

1. Content has a max-height constraint in collapsed state
2. A gradient overlay creates the fade-to-transparent effect
3. CSS transitions provide smooth animations
4. JavaScript sets exact heights for consistent timing
5. Data attributes allow per-instance customization

This ensures animations feel natural in both directions, without the timing issues that can occur with CSS-only `max-height` transitions.

## Browser Support

Works in all modern browsers. Requires support for:

- CSS sibling selectors (`~`)
- CSS custom properties (variables)
- CSS transitions

---

## Dependency graph

```shell
@uqds/collapsible-text
└─ @uqds/core
```
