"use strict";

import { MobileMenuModule } from "./modules/mobile-menu.js";
import { SearchModule } from "./modules/search.js";
import { MegaMenuModule } from "./modules/megamenu.js";
import { ResponsiveModule } from "./modules/responsive.js";

/**
 * Header Class
 * @file Main orchestrator that coordinates all header modules
 * Handles menu toggle and delegates specific behaviors to focused modules
 */
class Header {
  /**
   * Creates a new Header instance
   * @param {HTMLElement} el - The header element
   */
  constructor(el) {
    this.header = el;
    this.modules = {};
    this.init();
  }

  /**
   * Initialize the header and all modules
   * Sets up menu toggle and delegates specialized behaviors to modules
   */
  init() {
    // Initialize specialized modules with mutual exclusion coordination
    this.initModules();
  }

  /**
   * Close all exclusive toggles except the specified one
   * Implements mutual exclusion coordination
   * @param {string} except - The toggle name to keep open ('search', 'mobileMenu', 'megaMenu')
   */
  closeAllExcept(except) {
    if (this.modules.search && except !== "search") {
      this.modules.search.close();
    }
    if (this.modules.mobileMenu && except !== "mobileMenu") {
      this.modules.mobileMenu.close();
    }
    if (this.modules.megaMenu && except !== "megaMenu") {
      this.modules.megaMenu.close();
    }
  }

  /**
   * Initialize all header modules
   * Creates instances of specialized modules and stores references
   * Passes mutual exclusion coordinator callback to each module
   * @private
   */
  initModules() {
    // Create coordinator callback
    const onOpening = (toggleName) => this.closeAllExcept(toggleName);

    // Initialize mobile menu module (handles SlideMenu integration and toggle button)
    this.modules.mobileMenu = new MobileMenuModule(this.header, onOpening);

    // Initialize search module
    this.modules.search = new SearchModule(this.header, onOpening);

    // Initialize mega menu module (desktop dropdowns)
    this.modules.megaMenu = new MegaMenuModule(this.header, onOpening);

    // Initialize responsive module (needs reference to mobile menu)
    this.modules.responsive = new ResponsiveModule(
      this.header,
      this.modules.mobileMenu,
    );
  }
}

export default Header;
