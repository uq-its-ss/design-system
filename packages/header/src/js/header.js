"use strict";

/**
 * Header module
 * @file Handles interaction behaviour for the Header.
 */

class Header {
  constructor(el) {
    this.header = el;
    this.init();
  }

  init() {
    this.menuToggle = this.header.querySelector(".uq-header__toggle-menu-button");
    this.searchToggle = this.header.querySelector(".uq-header__toggle-search-button");
    this.searchLabel = this.header.querySelector(".uq-header__toggle-search-label");
    this.searchBlock = this.header.querySelector(".uq-header__search");
    this.searchInput = this.header.querySelector(".uq-header__search-input");

    this.menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("no-scroll");
      this.menuToggle.classList.toggle(
        "uq-header__toggle-menu-button--is-open",
      );
      this.searchToggle.classList.remove(
        "uq-header__toggle-search-button--is-open",
      );
      this.searchBlock.classList.remove("uq-header__search--is-open");
      this.searchLabel.innerHTML = "Search";
    });

    this.searchToggle.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("no-scroll");
      this.searchToggle.classList.toggle(
        "uq-header__toggle-search-button--is-open",
      );
      this.searchBlock.classList.toggle("uq-header__search--is-open");
      this.menuToggle.classList.remove(
        "uq-header__toggle-menu-button--is-open",
      );
      if (this.searchBlock.classList.contains("uq-header__search--is-open")) {
        this.searchInput.focus();
      } else {
        this.searchInput.blur();
        this.searchToggle.blur();
      }
      this.searchLabel.innerHTML =
        this.searchLabel.innerHTML === "Search" ? "Close" : "Search";
    });

    // megamenu + accessibility logic
      this.megaMenuTriggers = this.header.querySelectorAll(
      ".uq-header__nav-primary--has-dropdown",
    );
    this.megaMenuTriggers.forEach((trigger) => {
      // Toggle menu on click
      trigger.addEventListener("click", (e) => {
        // Prevent link navigation when opening/closing the menu
        e.preventDefault();
        this.toggleMenu(trigger);
      });

      // Handle keyboard events
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggleMenu(trigger);
        }
        if (e.key === "Escape") {
          this.closeMenu(trigger);
          trigger.focus(); // Return focus to the button
        }
      });
    });

    // Close menus when clicking outside
    document.addEventListener("click", (e) => {
      if (!this.header.contains(e.target)) {
        this.closeAllMenus();
      }
    });
  }

  /**
   * Toggles a megamenu's visibility.
   * @param {HTMLElement} currentTrigger - The button/link that was clicked.
   */
  toggleMenu(currentTrigger) {
    const isExpanded = currentTrigger.getAttribute("aria-expanded") === "true";

    // First, close all other menus
    this.closeAllMenus(currentTrigger);

    // Now, toggle the current menu
    if (isExpanded) {
      this.closeMenu(currentTrigger);
    } else {
      this.openMenu(currentTrigger);
    }
  }

  /**
   * Opens a specific megamenu.
   * @param {HTMLElement} trigger - The button/link for the menu to open.
   */
  openMenu(trigger) {
    trigger.setAttribute("aria-expanded", "true");
    trigger.parentElement.classList.add("uq-header__nav-primary-item--is-open");
  }

  /**
   * Closes a specific megamenu.
   * @param {HTMLElement} trigger - The button/link for the menu to close.
   */
  closeMenu(trigger) {
    trigger.setAttribute("aria-expanded", "false");
    trigger.parentElement.classList.remove(
      "uq-header__nav-primary-item--is-open",
    );
  }

  /**
   * Closes all open megamenus.
   * @param {HTMLElement} [except] - An optional trigger element to ignore.
   */
  closeAllMenus(except = null) {
    this.megaMenuTriggers.forEach((trigger) => {
      if (trigger !== except) {
        this.closeMenu(trigger);
      }
    });
  }
}

export default Header;
