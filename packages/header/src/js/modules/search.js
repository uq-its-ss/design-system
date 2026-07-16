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
    this.initFormSubmit();
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
   * Emits analytics event for tracking
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

    // Emit analytics event
    try {
      this.header.dispatchEvent(
        new CustomEvent("uqds:header:search-toggle", {
          bubbles: true,
          detail: {
            action: willOpen ? "open" : "close",
            trigger: this.searchToggle,
            input: this.searchInput,
          },
        }),
      );
    } catch (e) {
      // Fail gracefully if event dispatch fails
      if (console && console.warn) {
        console.warn("Failed to emit search-toggle event:", e);
      }
    }

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

  /**
   * Initialize form submit tracking
   * Emits analytics event when search is submitted
   * @private
   */
  initFormSubmit() {
    const searchForm = this.header.querySelector(".uq-header__search-form");
    if (!searchForm) return;

    searchForm.addEventListener("submit", () => {
      const searchTerm = this.searchInput?.value || "";
      const isSiteSearch =
        searchForm.querySelector("#edit-as_sitesearch-on") !== null;

      try {
        this.header.dispatchEvent(
          new CustomEvent("uqds:header:search-submit", {
            bubbles: true,
            detail: {
              searchTerm: searchTerm,
              searchScope: isSiteSearch ? "site" : "all-uq",
            },
          }),
        );
      } catch (e) {
        // Fail gracefully if event dispatch fails
        if (console && console.warn) {
          console.warn("Failed to emit search-submit event:", e);
        }
      }
    });
  }
}
