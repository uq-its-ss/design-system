"use strict";

/**
 * Search Module
 * @file Handles search toggle functionality and interaction with other components
 */

export class SearchModule {
  /**
   * Creates a new SearchModule instance
   * @param {HTMLElement} header - The header element
   * @param {Function} onOpening - Callback to notify coordinator when opening
   */
  constructor(header, onOpening) {
    this.header = header;
    this.onOpening = onOpening;
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
      this.toggle();
    });
  }

  /**
   * Toggle the search panel open/closed
   */
  toggle() {
    const willOpen = !this.isOpen();

    // Notify coordinator to close other exclusive toggles before opening
    if (willOpen && this.onOpening) {
      this.onOpening("search");
    }

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
