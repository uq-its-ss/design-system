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
    this.enhanceBackButtons();
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
   * Emits analytics events for open/close actions
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

      // Emit analytics event
      try {
        this.header.dispatchEvent(
          new CustomEvent("uqds:header:mobile-menu-toggle", {
            bubbles: true,
            detail: {
              action: willOpen ? "open" : "close",
              trigger: this.menuToggle,
              menu: this.menuElement,
              label: this.menuToggle.textContent.trim(),
            },
          }),
        );
      } catch (e) {
        // Fail gracefully if event dispatch fails
        if (console && console.warn) {
          console.warn("Failed to emit mobile-menu-toggle event:", e);
        }
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

  /**
   * Enhance back buttons with data-gtm-path attributes for analytics
   * Called after SlideMenu initialization to add hierarchy context to dynamically generated back links
   * @private
   */
  enhanceBackButtons() {
    if (!this.menuElement) return;

    const backButtons = this.menuElement.querySelectorAll(
      ".slide-menu__backlink",
    );
    backButtons.forEach((backBtn) => {
      try {
        const path = this.buildPathFromDom(backBtn);
        if (path) {
          backBtn.setAttribute("data-gtm-path", path);
        }
      } catch (e) {
        // Fail gracefully if path building fails
        if (console && console.warn) {
          console.warn("Failed to enhance back button:", e);
        }
      }
    });
  }

  /**
   * Build hierarchical path from DOM structure for back button
   * Traverses up the menu tree to construct parent hierarchy
   * @param {HTMLElement} backBtn - The back button element
   * @returns {string} Hierarchical path (e.g., "Study > Study options")
   * @private
   */
  buildPathFromDom(backBtn) {
    const pathParts = [];
    let currentList = backBtn.closest(".uq-header__nav-mobile-list");

    while (currentList) {
      // Find parent item's link to get the label
      const parentItem = currentList.closest(".uq-header__nav-mobile-item");
      if (parentItem) {
        const parentLink = parentItem.querySelector(
          ".uq-header__nav-mobile-link, .uq-header__nav-mobile-audience-link",
        );
        if (parentLink) {
          pathParts.unshift(parentLink.textContent.trim());
        }
      }

      // Move up to next level
      currentList = currentList.parentElement?.closest(
        ".uq-header__nav-mobile-list",
      );
    }

    return pathParts.join(" > ");
  }
}
