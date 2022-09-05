"use strict";

/**
 * Header module
 * @file Handles interaction behaviour for the Header. Does not output any
 * HTML elements.
 * TODO: make this class configurable
 */

class header {
  constructor() {
    this.init();
  }

  init() {
    this.toggle = document.querySelector(
      ".legacy-header__search-toggle-button"
    );
    this.search = document.querySelector(".legacy-header__search");
    this.searchInput = document.querySelector(
      ".legacy-header__search-query-input"
    );
    this.meta = document.querySelector("meta.legacy-header__mq--desktop");
    this.navigation = document.querySelector(".legacy-header__navigation");

    if (this.meta == null) {
      this.meta = document.createElement("meta");
      this.meta.classList.add("legacy-header__mq--desktop");
      document.head.appendChild(this.meta);
    }

    this.mqLarge = window
      .getComputedStyle(this.meta)
      .getPropertyValue("font-family");
    this.mqLarge = this.mqLarge.trim().slice(1, -1); // browsers re-quote string style values
    this.mqLargeList = window.matchMedia(this.mqLarge);

    this.toggle.addEventListener("click", () => {
      this.handleToggle();
    });
  }

  handleToggle() {
    this.toggle.classList.toggle(
      "legacy-header__search-toggle-button--icon-close"
    );
    this.search.classList.toggle("legacy-header__search--open");
    this.navigation.classList.toggle("legacy-header__navigation--open");

    if (this.search.classList.contains("legacy-header__search--open")) {
      if (this.mqLargeList.matches) {
        this.searchInput.focus();
      } else {
        this.toggle.blur();
      }
    } else {
      this.toggle.blur();
    }
  }
}

export { header as default };
