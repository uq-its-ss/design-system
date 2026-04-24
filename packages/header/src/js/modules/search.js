"use strict";

/**
 * Search Module
 * @file Handles search toggle functionality and interaction with other components
 */

export class SearchModule {
  /**
   * Creates a new SearchModule instance
   * @param {HTMLElement} header - The header element
   * @param {MobileMenuModule} mobileMenu - Reference to mobile menu module
   */
  constructor(header, mobileMenu) {
    this.header = header;
    this.mobileMenu = mobileMenu;
    this.searchToggle = null;
    this.searchLabel = null;
    this.searchBlock = null;
    this.searchInput = null;
    this.init();
  }

  /**
   * Initialize the search module
   * Queries DOM for search elements and sets up event listeners
   */
  init() {
    this.searchToggle = this.header.querySelector(
      ".uq-header__toggle-search-button",
    );
    this.searchLabel = this.header.querySelector(
      ".uq-header__toggle-search-label",
    );
    this.searchBlock = this.header.querySelector(".uq-header__search");
    this.searchInput = this.header.querySelector(".uq-header__search-input");

    if (!this.searchToggle || !this.searchBlock) {
      return; // Search elements don't exist
    }

    this.initToggle();
  }

  /**
   * Initialize search toggle button event listener
   * @private
   */
  initToggle() {
    this.searchToggle.addEventListener("click", (e) => {
      e.preventDefault();

      // Close mobile menu if open
      if (this.mobileMenu) {
        this.mobileMenu.close();
      }

      // Remove scroll lock from mobile menu
      document.body.classList.remove("no-scroll");

      // Toggle search
      this.toggle();
    });
  }

  /**
   * Toggle the search panel open/closed
   */
  toggle() {
    this.searchToggle.classList.toggle(
      "uq-header__toggle-search-button--is-open",
    );
    this.searchBlock.classList.toggle("uq-header__search--is-open");

    if (this.isOpen()) {
      this.open();
    } else {
      this.close();
    }
  }

  /**
   * Open the search panel and focus input
   * @private
   */
  open() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
    if (this.searchLabel) {
      this.searchLabel.innerHTML = "Close";
    }
  }

  /**
   * Close the search panel and reset state
   */
  close() {
    if (this.searchInput) {
      this.searchInput.blur();
    }
    if (this.searchToggle) {
      this.searchToggle.blur();
    }
    if (this.searchLabel) {
      this.searchLabel.innerHTML = "Search";
    }

    this.searchToggle.classList.remove(
      "uq-header__toggle-search-button--is-open",
    );
    this.searchBlock.classList.remove("uq-header__search--is-open");
  }

  /**
   * Check if search panel is currently open
   * @returns {boolean} True if search is open
   */
  isOpen() {
    return (
      this.searchBlock &&
      this.searchBlock.classList.contains("uq-header__search--is-open")
    );
  }
}
