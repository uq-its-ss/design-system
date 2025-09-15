"use strict";

/**
 * NewHeader module
 * @file Handles interaction behaviour for the Header with hover and keyboard support.
 */
class NewHeader {
  constructor(el) {
    this.header = el;
    this.init();
  }

  init() {
    // --- Mobile and Search Toggles (unchanged) ---
    this.menuToggle = this.header.querySelector(".nav-primary__menu-toggle");
    this.searchToggle = this.header.querySelector(".nav-primary__search-toggle");
    this.searchLabel = this.header.querySelector(".search-toggle__label");
    this.searchBlock = this.header.querySelector(".uq-header__search");
    this.searchInput = this.header.querySelector(".uq-header__search-query-input");

    this.menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("no-scroll");
      this.menuToggle.classList.toggle("nav-primary__menu-toggle--is-open");
      this.searchToggle.classList.remove("nav-primary__search-toggle--is-open");
      this.searchBlock.classList.remove("uq-header__search--is-open");
      this.searchLabel.innerHTML = "Search";
    });

    this.searchToggle.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      this.searchToggle.classList.toggle("nav-primary__search-toggle--is-open");
      this.searchBlock.classList.toggle("uq-header__search--is-open");
      this.menuToggle.classList.remove("nav-primary__menu-toggle--is-open");
      if (this.searchBlock.classList.contains("uq-header__search--is-open")) {
        this.searchInput.focus();
      } else {
        this.searchInput.blur();
        this.searchToggle.blur();
      }
      this.searchLabel.innerHTML = this.searchLabel.innerHTML === "Search" ? "Close" : "Search";
    });

    // ** NEW HYBRID MEGAMENU LOGIC **
    const menuItems = this.header.querySelectorAll('.uq-header__nav-primary-item');

    menuItems.forEach(item => {
      const trigger = item.querySelector('.nav-primary-link--has-dropdown');
      if (!trigger) return;

      // --- Hover Listeners (for mouse users) ---
      item.addEventListener('mouseenter', () => this.openMenu(trigger));
      item.addEventListener('mouseleave', () => this.closeMenu(trigger));

      // --- Focus Listeners (for keyboard tabbing) ---
      item.addEventListener('focusin', () => {
        this.closeAllMenus(trigger); // Close others when a new one gets focus
        this.openMenu(trigger);
      });
      item.addEventListener('focusout', (e) => {
        // Only close if focus moves outside the entire menu item component
        if (!item.contains(e.relatedTarget)) {
          this.closeMenu(trigger);
        }
      });

      // --- Click and Keydown Listeners (for explicit toggle) ---
      trigger.addEventListener('click', e => {
        e.preventDefault();
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        // Close all other menus before toggling the current one
        this.closeAllMenus(trigger);
        if (isExpanded) {
          this.closeMenu(trigger);
        } else {
          this.openMenu(trigger);
        }
      });

      trigger.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          this.closeMenu(trigger);
          trigger.focus(); // Return focus to the button
        }
      });
    });
  }

  /**
   * Opens a specific megamenu.
   * @param {HTMLElement} trigger - The button/link for the menu to open.
   */
  openMenu(trigger) {
    trigger.setAttribute('aria-expanded', 'true');
    trigger.parentElement.classList.add('uq-header__nav-primary-item--is-open');
  }

  /**
   * Closes a specific megamenu.
   * @param {HTMLElement} trigger - The button/link for the menu to close.
   */
  closeMenu(trigger) {
    trigger.setAttribute('aria-expanded', 'false');
    trigger.parentElement.classList.remove('uq-header__nav-primary-item--is-open');
  }

  /**
   * Closes all open megamenus.
   * @param {HTMLElement} [except] - An optional trigger element to ignore.
   */
  closeAllMenus(except = null) {
    this.header.querySelectorAll('.nav-primary-link--has-dropdown').forEach(trigger => {
      if (trigger !== except) {
        this.closeMenu(trigger);
      }
    });
  }
}

export default NewHeader;
// This assumes you have a script that instantiates the class like:
// const headerElem = document.querySelector('.uq-header');
// new NewHeader(headerElem);
