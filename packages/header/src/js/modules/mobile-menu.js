"use strict";

/**
 * Mobile Menu Module
 * @file Handles SlideMenu integration and mobile navigation behavior
 * Isolates external SlideMenu dependency for easier maintenance
 */

export class MobileMenuModule {
  /**
   * Creates a new MobileMenuModule instance
   * @param {HTMLElement} header - The header element
   * @param {Function} onOpening - Callback to notify coordinator when opening
   */
  constructor(header, onOpening) {
    this.header = header;
    this.onOpening = onOpening;
    this.slideMenu = null;
    this.menuElement = null;
    this.menuToggle = null;
    this.init();
  }

  /**
   * Initialize the mobile menu module
   * Checks for SlideMenu availability and element existence
   */
  init() {
    this.menuElement = document.getElementById("global-mobile-nav");
    this.menuToggle = this.header.querySelector(
      ".uq-header__toggle-menu-button",
    );

    // Exit early if SlideMenu library not available or element doesn't exist
    if (!this.menuElement || typeof SlideMenu === "undefined") {
      return;
    }

    this.initSlideMenu();
    this.initScrollReset();
    this.initToggleButton();
  }

  /**
   * Initialize the SlideMenu instance
   * @private
   */
  initSlideMenu() {
    this.slideMenu = new SlideMenu(this.menuElement, {
      position: "left",
      submenuLinkAfter: " ",
      backLinkBefore: " ",
    });
  }

  /**
   * Initialize scroll reset on navigation back buttons
   * Ensures user always sees top of submenu when navigating
   * @private
   */
  initScrollReset() {
    const backButtons = this.header.querySelectorAll(
      ".slide-menu__backlink, .global-mobile-nav__audience-link",
    );

    backButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (this.menuElement) {
          this.menuElement.scrollTop = 0;
        }
      });
    });
  }

  /**
   * Initialize toggle button click handler
   * @private
   */
  initToggleButton() {
    if (!this.menuToggle) return;

    this.menuToggle.addEventListener("click", () => {
      const willOpen = !this.menuToggle.classList.contains(
        "uq-header__toggle-menu-button--is-open",
      );

      // Notify coordinator to close other exclusive toggles before opening
      if (willOpen && this.onOpening) {
        this.onOpening("mobileMenu");
      }

      // Toggle menu button icon state
      this.menuToggle.classList.toggle(
        "uq-header__toggle-menu-button--is-open",
      );

      // Toggle scroll lock
      if (willOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    });
  }

  /**
   * Close the mobile menu
   * @param {boolean} immediately - If true, close without animation
   */
  close(immediately = false) {
    if (this.slideMenu) {
      this.slideMenu.close(immediately);
    }

    // Remove scroll lock when closing
    document.body.classList.remove("no-scroll");

    // Update toggle button state
    if (this.menuToggle) {
      this.menuToggle.classList.remove(
        "uq-header__toggle-menu-button--is-open",
      );
    }
  }

  /**
   * Check if the mobile menu is currently open
   * @returns {boolean} True if menu is open
   */
  isOpen() {
    return this.slideMenu && this.slideMenu.isOpen && this.slideMenu.isOpen();
  }
}
