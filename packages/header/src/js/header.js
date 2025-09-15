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
    this.menuToggle = el.querySelector(".nav-primary__menu-toggle");
    this.searchToggle = el.querySelector(".nav-primary__search-toggle");
    this.searchLabel = el.querySelector(".search-toggle__label");
    this.searchBlock = el.querySelector(".uq-header__search");
    this.searchInput = el.querySelector(".uq-header__search-query-input");

    this.menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("no-scroll");
      this.menuToggle.classList.toggle("nav-primary__menu-toggle--is-open");
      this.searchToggle.classList.remove("nav-primary__search-toggle--is-open");
      this.searchBlock.classList.remove("uq-header__search--is-open");
      this.searchLabel.innerHTML = "Search";
    });

    this.searchToggle.addEventListener("click", (e) => {
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

    el.querySelectorAll('.nav-primary-link--has-dropdown').forEach(link => {
      const menuId = link.getAttribute('aria-controls');
      const menu = el.getElementById(menuId);

      // Toggle menu on click or Enter/Space
      link.addEventListener('click', e => {
        e.preventDefault();
        this.toggleMenu(link, menu);
      });
      link.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleMenu(link, menu);
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.openMenu(link, menu);
          // Focus first menu item
          const firstItem = menu.querySelector('[role="menuitem"]');
          if (firstItem) firstItem.focus();
        }
        if (e.key === 'Escape') {
          this.closeMenu(link, menu);
          link.focus();
        }
      });

      // Close menu on Escape inside menu
      menu.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          this.closeMenu(link, menu);
          link.focus();
        }
      });
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

  toggleMenu(link, menu) {
    const expanded = link.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      this.closeMenu(link, menu);
    } else {
      this.openMenu(link, menu);
    }
  }

  openMenu(link, menu) {
    link.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
  }

  closeMenu(link, menu) {
    link.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  }
}

export default NewHeader;
