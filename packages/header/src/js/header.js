"use strict";

/**
 * NewHeader module
 * @file Handles interaction behaviour for the Header. Does not output any
 * HTML elements.
 * TODO: make this class configurable
 */

class NewHeader {
  constructor(el) {
    this.init(el);
  }

  init(el) {
    this.menuToggle = el.querySelector(".uq-header__toggle-menu-button");
    this.searchToggle = el.querySelector(".uq-header__toggle-search-button");
    this.searchLabel = el.querySelector(".uq-header__toggle-search-label");
    this.searchBlock = el.querySelector(".uq-header__search");
    this.searchInput = el.querySelector(".uq-header__search-query-input");

    this.menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("no-scroll");
      this.menuToggle.classList.toggle("uq-header__toggle-menu-button--is-open");
      this.searchToggle.classList.remove("uq-header__toggle-search-button--is-open");
      this.searchBlock.classList.remove("uq-header__search--is-open");
      this.searchLabel.innerHTML = "Search";
    });

    this.searchToggle.addEventListener("click", (e) => {
      document.body.classList.remove("no-scroll");
      this.searchToggle.classList.toggle("uq-header__toggle-search-button--is-open");
      this.searchBlock.classList.toggle("uq-header__search--is-open");
      this.menuToggle.classList.remove("uq-header__toggle-menu-button--is-open");
      if (this.searchBlock.classList.contains("uq-header__search--is-open")) {
        this.searchInput.focus();
      } else {
        this.searchInput.blur();
        this.searchToggle.blur();
      }
      if (this.searchLabel.innerHTML === "Search") {
        this.searchLabel.innerHTML = "Close";
      } else {
        this.searchLabel.innerHTML = "Search";
      }
      e.preventDefault();
    });

    // megamenu
    const megaMenuItem = document.querySelectorAll(
      ".uq-header__nav-primary-item",
    );
    megaMenuItem.forEach((item) => {
      item.addEventListener("mouseenter", this.handleToggle);
      item.addEventListener("mouseleave", this.handleToggle);
    });
  }

  handleToggle(event) {
    let menuItem = event.target;
    if (menuItem.tagName !== "LI") {
      menuItem = menuItem.parentElement;
    }
    menuItem.eventType = event.type;

    window.setTimeout(function () {
      if (
        (event.type === "mouseenter" || event.type === "mouseleave") &&
        window.matchMedia("(max-width: 1024px)").matches
      ) {
        return;
      }

      if (menuItem.eventType === "mouseenter") {
        menuItem.classList.add("uq-header__nav-primary-item--is-open");
      } else {
        menuItem.classList.remove("uq-header__nav-primary-item--is-open");
      }
    }, 250);
  }
}

export default NewHeader;
