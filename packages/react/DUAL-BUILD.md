# @uqds/react - Dual Distribution Build

This package provides React components in **two build configurations** to support different use cases.

## 📦 Build Distributions

### 1. CSS Modules Build (Default - `dist/modules/`)
**For: Third-party apps, embedded widgets, apps needing CSS isolation**

- **Path:** `@uqds/react`
- **CSS:** Scoped class names (e.g., `index-module__uq-button___AbC12`)
- **Use case:** Prevents CSS conflicts when embedding in external applications
- **Output:** `dist/modules/index.js` + `dist/modules/index.css`

### 2. Plain CSS Build (`dist/plain/`)
**For: Apps that compile SCSS locally, Twig templates with shared styles**

- **Path:** `@uqds/react/plain`
- **CSS:** Standard class names (e.g., `uq-button`)
- **Use case:** Compatible with apps that compile `@uqds/button/src/scss/main.scss` directly
- **Output:** `dist/plain/index.js` + `dist/plain/index.css`

---

## 🚀 Usage Examples

### Default (CSS Modules) - For Third-Party Apps

```tsx
// Components with scoped CSS built-in
import { Button, Alert, Icon } from '@uqds/react';
import '@uqds/react/css'; // Scoped CSS

function App() {
  return (
    <Button 
      label="Click me" 
      style="primary"
      onClick={() => alert('Clicked!')} 
    />
  );
}
```

**CSS Output:**
```css
.index-module__uq-button___AbC12 { ... }
.index-module__uq-button--primary___XyZ89 { ... }
```

### Plain Build - For Local SCSS Compilation

```tsx
// Components with standard class names
import { Button, Alert, Icon } from '@uqds/react/plain';

// Compile SCSS yourself from individual packages
import '@uqds/button/src/scss/main.scss';
import '@uqds/alert/src/scss/main.scss';
import '@uqds/icon/src/scss/main.scss';

function App() {
  return (
    <Button 
      label="Click me" 
      style="primary"
      onClick={() => alert('Clicked!')} 
    />
  );
}
```

**CSS Output:**
```css
.uq-button { ... }
.uq-button--primary { ... }
```

---

## 🔧 Import Paths Reference

| Import Path | Description | CSS Type |
|-------------|-------------|----------|
| `@uqds/react` | Components (CSS Modules) | Scoped |
| `@uqds/react/plain` | Components (Plain CSS) | Standard |
| `@uqds/react/css` | Compiled CSS (Modules) | Scoped |
| `@uqds/react/plain/css` | Compiled CSS (Plain) | Standard |
| `@uqds/react/scss` | Raw SCSS entry point | - |
| `@uqds/react/tsx` | TypeScript source (no CSS) | - |

---

## 🏗️ Build Configuration

### Building Both Distributions

```bash
npm run build
```

This runs:
1. `build:modules` - Creates `dist/modules/` with CSS Modules
2. `build:plain` - Creates `dist/plain/` with plain CSS

### Individual Builds

```bash
# CSS Modules only
npm run build:modules

# Plain CSS only
npm run build:plain
```

### Build Files

- `vite.config.modules.js` - CSS Modules configuration
- `vite.config.plain.js` - Plain CSS configuration
- `vite.config.js` - Default (points to modules)

---

## 🎯 When to Use Which Build?

### Use CSS Modules Build (`@uqds/react`) When:
- ✅ Building third-party widgets/embeds
- ✅ Integrating into external applications
- ✅ Need guaranteed CSS isolation
- ✅ Don't want to manage SCSS compilation
- ✅ Want plug-and-play components

### Use Plain Build (`@uqds/react/plain`) When:
- ✅ Compiling SCSS locally in your app
- ✅ Sharing styles between Twig and React
- ✅ Need predictable class names for testing/automation
- ✅ Already have SCSS compilation pipeline
- ✅ Want full control over CSS output

---

## 🔍 How It Works

Both builds use **the same component source code**. The difference is in how CSS Modules are processed:

**CSS Modules Build:**
```js
// vite.config.modules.js
css: {
  modules: {
    generateScopedName: "[name]__[local]___[hash:base64:5]"
  }
}
```
Result: `css["uq-button"]` → `"index-module__uq-button___AbC12"`

**Plain Build:**
```js
// vite.config.plain.js
css: {
  modules: {
    generateScopedName: "[local]"  // No scoping!
  }
}
```
Result: `css["uq-button"]` → `"uq-button"`

---

## 📝 Component Migration Status

### Migrated to CSS Modules Pattern:
- ✅ Alert
- ✅ Button
- ✅ Hero
- ✅ Icon
- ✅ LoadingSpinner
- ✅ Table
- ✅ TextInput

### Using Plain Class Names (Compatible with both builds):
- ✅ UqCard
- ✅ UqIcon
- ✅ UqPagination
- ✅ UqPane
- ✅ UqStoryCard

---

## 🤝 Compatibility

Both distributions:
- ✅ Export the same TypeScript interfaces
- ✅ Have identical component APIs
- ✅ Include full TypeScript definitions
- ✅ Work with React 18+
- ✅ Support tree-shaking

---

## 📚 Additional Resources

- [Documentation](../../docs/)
- [Storybook](../storybook-react/)
- [Component SCSS Sources](../../packages/)
