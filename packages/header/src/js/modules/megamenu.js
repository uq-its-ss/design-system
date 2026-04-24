"use strict";

/**
 * Mega Menu Module
 * @file Handles mega menu dropdowns and accessibility features
 */

export class MegaMenuModule {
  /**
   * Creates a new MegaMenuModule instance
   * @param {HTMLElement} header - The header element
   */
  constructor(header) {
    this.header = header;
    this.triggers = [];
    this.init();
  }

  /**
   * Initialize the mega menu module
   * Sets up event listeners for menu triggers and click outside behavior
   */
  init() {
    this.triggers = Array.from(
      this.header.querySelectorAll(".uq-header__nav-primary--has-dropdown"),
    );

    if (this.triggers.length === 0) {
      return; // No mega menus on this page
    }

    this.initTriggers();
    this.initClickOutside();
  }

  /**
   * Initialize event listeners for all menu triggers
   * Handles both click and keyboard interactions
   * @private
   */
  initTriggers() {
    this.triggers.forEach((trigger) => {
      // Click handler
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleMenu(trigger);
      });

      // Keyboard handler for accessibility
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggleMenu(trigger);
        }
        if (e.key === "Escape") {
          this.closeMenu(trigger);
          trigger.focus(); // Return focus to trigger
        }
      });
    });
  }

  /**
   * Initialize click outside behavior to close menus
   * @private
   */
  initClickOutside() {
    document.addEventListener("click", (e) => {
      if (!this.header.contains(e.target)) {
        this.closeAllMenus();
      }
    });
  }

  /**
   * Toggle a specific menu open or closed
   * Automatically closes other menus when opening one
   * @param {HTMLElement} trigger - The menu trigger element
   */
  toggleMenu(trigger) {
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    // Close all other menus
    this.closeAllMenus(trigger);

    // Toggle current menu
    if (isExpanded) {
      this.closeMenu(trigger);
    } else {
      this.openMenu(trigger);
    }
  }

  /**
   * Open a specific mega menu
   * Updates ARIA attributes and adds open class
   * @param {HTMLElement} trigger - The menu trigger element
   */
  openMenu(trigger) {
    trigger.setAttribute("aria-expanded", "true");
    trigger.parentElement.classList.add("uq-header__nav-primary-item--is-open");
  }

  /**
   * Close a specific mega menu
   * Updates ARIA attributes and removes open class
   * @param {HTMLElement} trigger - The menu trigger element
   */
  closeMenu(trigger) {
    trigger.setAttribute("aria-expanded", "false");
    trigger.parentElement.classList.remove(
      "uq-header__nav-primary-item--is-open",
    );
  }

  /**
   * Close all mega menus
   * @param {HTMLElement} [except] - Optional trigger element to exclude from closing
   */
  closeAllMenus(except = null) {
    this.triggers.forEach((trigger) => {
      if (trigger !== except) {
        this.closeMenu(trigger);
      }
    });
  }
}
