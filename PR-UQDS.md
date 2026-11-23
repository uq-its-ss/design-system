# Header Analytics Event Emission

## Summary

Adds analytics event emission to the header component modules, enabling consuming systems to track user interactions with navigation, search, and menus.

**Related:** ITSADSSD-70527

---

## Changes

### JavaScript Modules

**MegaMenuModule (`packages/header/src/js/modules/megamenu.js`)**

- Emits `uqds:header:megamenu-toggle` event when mega menu is expanded
- Tracks only expand actions (collapse not tracked per analytics requirements)
- Event includes: action, trigger element, menu element, label

**MobileMenuModule (`packages/header/src/js/modules/mobile-menu.js`)**

- Emits `uqds:header:mobile-menu-toggle` event on open/close
- Adds `enhanceBackButtons()` method to add `data-gtm-path` attributes to SlideMenu-generated back links
- Builds hierarchical paths from DOM structure for analytics context
- Event includes: action (open/close), trigger element, menu element, label

**SearchModule (`packages/header/src/js/modules/search.js`)**

- Emits `uqds:header:search-toggle` event when search panel opens/closes
- Emits `uqds:header:search-submit` event when search form is submitted
- Toggle event includes: action (open/close), trigger element, input element
- Submit event includes: search term, search scope (site/all-uq)

### Documentation

**`packages/storybook-html/stories/components/header/analytics.md`**

- Complete event reference documentation
- Integration examples
- Browser compatibility notes
- Template requirements for proper tracking

---

## Event Structure

All events are CustomEvents that bubble to document level:

```javascript
// Mega menu expand
{
  type: 'uqds:header:megamenu-toggle',
  detail: {
    action: 'expand',
    trigger: HTMLElement,
    menu: HTMLElement,
    label: string
  }
}

// Mobile menu toggle
{
  type: 'uqds:header:mobile-menu-toggle',
  detail: {
    action: 'open' | 'close',
    trigger: HTMLElement,
    menu: HTMLElement,
    label: string
  }
}

// Search toggle
{
  type: 'uqds:header:search-toggle',
  detail: {
    action: 'open' | 'close',
    trigger: HTMLElement,
    input: HTMLElement
  }
}

// Search submit
{
  type: 'uqds:header:search-submit',
  detail: {
    searchTerm: string,
    searchScope: 'site' | 'all-uq'
  }
}
```

---

## Breaking Changes

**None.** This is an additive change. Events are emitted but consuming systems are not required to listen for them.

---

## Integration Notes

Consuming systems can listen for these events to implement analytics tracking:

```javascript
document.addEventListener("uqds:header:megamenu-toggle", (e) => {
  // Track mega menu interaction
  console.log("Mega menu opened:", e.detail.label);
});
```

For Google Analytics integration, see the documentation in `packages/storybook-html/stories/components/header/analytics.md`.

---

## Testing

### Manual Testing

**Mega Menu:**

1. Open browser console
2. Add event listener: `document.addEventListener('uqds:header:megamenu-toggle', e => console.log(e.detail))`
3. Click "Study" in primary navigation
4. Verify event logged with correct action and label

**Mobile Menu:**

1. Resize browser to mobile viewport
2. Add event listener: `document.addEventListener('uqds:header:mobile-menu-toggle', e => console.log(e.detail))`
3. Click menu toggle button
4. Verify "open" event, then click again and verify "close" event

**Search:**

1. Add listeners for both search events
2. Click search toggle - verify toggle event
3. Enter search term and submit - verify submit event with correct search term and scope

**Back Buttons:**

1. In mobile menu with local navigation
2. Navigate into a submenu
3. Inspect back button element
4. Verify `data-gtm-path` attribute contains hierarchical path (e.g., "Study > Study options")

### Automated Testing

Run existing header component tests - all should pass as events are additive:

```bash
npm test -- packages/header
```

---

## Graceful Degradation

All event emission is wrapped in try/catch blocks:

```javascript
try {
  this.header.dispatchEvent(new CustomEvent('uqds:header:megamenu-toggle', { ... }));
} catch (e) {
  console.warn('Failed to emit megamenu-toggle event:', e);
}
```

Component functionality continues even if event dispatch fails.

---

## Documentation

Full integration documentation available at:
`packages/storybook-html/stories/components/header/analytics.md`

Includes:

- Complete event reference
- Integration examples
- Template requirements
- Error handling patterns
- Browser compatibility

---

### Template Attribute Updates

**Storybook Examples (`packages/storybook-html/stories/components/header/header.stories.js`)**

- Replaced `data-gtm-label` with `data-gtm-path` on all navigation links
- Removed all `data-gtm-category` attributes
- Updated path format to parent-only hierarchy (matches Drupal templates)
- Updated mega menu overview links to single-level path
- Updated mega menu child links to `parent > group` format (excluding leaf title)
- Removed obsolete data-gtm attributes from search and buttons

**UQ Design System Landing Pages (`packages/uqds-builder/src/*.html`)**

- Updated header sections in index.html, homepage.html, interim.html
- Removed `data-gtm-category` from header containers
- Changed mega menu links from `data-gtm-label` to `data-gtm-path`
- Removed `data-gtm-label` from primary/secondary navigation
- Removed `data-gtm-trigger` and `data-gtm-action` from toggle buttons
- Footer analytics attributes preserved (out of scope)

---

## Checklist

- [x] JavaScript changes implemented
- [x] Events emit on all required interactions
- [x] Back buttons enhanced with path attributes
- [x] Graceful degradation implemented
- [x] Documentation created
- [x] Storybook examples updated to use data-gtm-path
- [x] UQ Design System landing pages updated
- [x] Structural parity maintained with Drupal templates
- [x] Manual testing completed
- [ ] Consuming system (Drupal) integration tested

---

## Screenshots / Examples

**Console output when interacting with header:**

```
Event: uqds:header:megamenu-toggle
  action: "expand"
  label: "Study"
  trigger: <button class="uq-header__nav-primary-link">
  menu: <div id="study-megamenu">

Event: uqds:header:mobile-menu-toggle
  action: "open"
  label: "Menu"
  trigger: <button class="uq-header__toggle-menu-button">
  menu: <nav id="global-mobile-nav">

Event: uqds:header:search-submit
  searchTerm: "engineering programs"
  searchScope: "site"
```

---

## Related PRs

- UQ CMS Standard: [Link to Drupal PR once created]

---

## Branch Strategy

**Note:** This branch (`ITSADSSD-70527-analytics`) will be merged into `ITSADSSD-65917-Header-redux-accessibility` before deployment.

All header work (accessibility + analytics) will be consolidated in the accessibility branch and deployed together via PR #758.

---

## Deployment Notes

1. Publish new version to npm
2. Update consuming systems to new version
3. Implement event listeners in consuming systems
4. Test analytics tracking end-to-end

Events are emitted immediately but consuming systems can update at their own pace.
