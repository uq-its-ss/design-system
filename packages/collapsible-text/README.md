# `@uqds/collapsible-text`

> Collapsible text component with fade-to-transparent teaser view

## Features

✨ **Smart Behavior** - Button only appears if content exceeds threshold  
🎯 **Smooth Transitions** - JavaScript measures exact heights for consistent timing  
📱 **Responsive** - Responds to window resize and adjusts accordingly
🎨 **Customizable** - CSS variables and data attributes for easy styling  
♿ **Accessible** - Keyboard navigation and semantic HTML

🎭 **Variants** - Tall and custom options

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
- ✅ Only shows button if content exceeds threshold height (default: **9rem**)
- ✅ Custom collaspe height via `data-collapsed-height` attribute
- ✅ Provides consistent timing for opening and closing
- ✅ Automatically recalculates on window resize
- ✅ Hides button and fade effect for short content

### Basic HTML Structure

```html
<div class="uq-collapsible-text" data-component="collapsible-text">
  <!-- Content with fade effect -->
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content goes here...</p>
  </div>

  <!-- Button to toggle expanded/collapsed state -->
  <button
    class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right"
    data-collapsible-button
    aria-expanded="false"
  >
    Read more
  </button>
</div>
```

**Note:** The JavaScript will automatically update the button text and ARIA attributes.

### Custom Collapsed Height

You can customize the collapsed height per instance using the `data-collapsed-height` attribute:

```html
<!-- Custom collapsed height of 8rem -->
<div
  class="uq-collapsible-text"
  data-component="collapsible-text"
  data-collapsed-height="8"
>
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button
    class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right"
    data-collapsible-button
    aria-expanded="false"
  >
    Read more
  </button>
</div>
```

The `data-collapsed-height` attribute accepts a number value in rems

### Variants

**Tall** (16rem collapsed height):

```html
<div
  class="uq-collapsible-text uq-collapsible-text--tall"
  data-component="collapsible-text"
>
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button
    class="uq-collapsible-text__button"
    data-collapsible-button
    aria-expanded="false"
  >
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
"
>
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Your content...</p>
  </div>
  <button
    class="uq-collapsible-text__button"
    data-collapsible-button
    aria-expanded="false"
  >
    Read more
  </button>
</div>
```

Available CSS variables:

- `--collapsible-collapsed-height`: Height when collapsed (default: 6rem)
- `--collapsible-fade-height`: Height of fade gradient (default: 3rem)
- `--collapsible-transition-duration`: Animation speed (default: 0.3s)
- `--collapsible-fade-from`: Start color of gradient
- `--collapsible-fade-to`: End color of gradient

**Note:** For more flexibility, use the `data-collapsed-height` attribute which takes precedence over the CSS variable.

### Examples

See the [`JS-ENHANCEMENT.md`](./JS-ENHANCEMENT.md) for JavaScript details.

## How It Works

### JavaScript-Driven Interactivity

The component uses JavaScript to provide smooth, consistent transitions:

1. On initialization, JavaScript measures the actual content height
2. Reads `data-collapsed-height` to set the initial collapsed height
3. A button element controls the expanded/collapsed state
4. Click events toggle between states with exact height values
5. ARIA attributes provide accessibility information

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
