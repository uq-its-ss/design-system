"use strict";

import { MobileMenuModule } from './modules/mobile-menu.js';
import { SearchModule } from './modules/search.js';
import { MegaMenuModule } from './modules/megamenu.js';
import { ResponsiveModule } from './modules/responsive.js';

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
    this.menuToggle = null;
    this.modules = {};
    this.init();
  }

  /**
   * Initialize the header and all modules
   * Sets up menu toggle and delegates specialized behaviors to modules
   */
  init() {
    // Get menu toggle element (used by multiple modules)
    this.menuToggle = this.header.querySelector('.uq-header__toggle-menu-button');

    // Initialize menu toggle if it exists
    this.initMenuToggle();
    
    // Initialize specialized modules
    this.initModules();
  }

  /**
   * Initialize menu toggle button
   * Handles mobile menu open/close and coordinates with search module
   * @private
   */
  initMenuToggle() {
    if (!this.menuToggle) return;

    this.menuToggle.addEventListener('click', () => {
      // Toggle scroll lock on body
      document.body.classList.toggle('no-scroll');
      
      // Toggle menu button state
      this.menuToggle.classList.toggle('uq-header__toggle-menu-button--is-open');
      
      // Close search when menu is toggled
      if (this.modules.search) {
        this.modules.search.close();
      }
    });
  }

  /**
   * Initialize all header modules
   * Creates instances of specialized modules and stores references
   * @private
   */
  initModules() {
    // Initialize mobile menu module (handles SlideMenu integration)
    this.modules.mobileMenu = new MobileMenuModule(this.header);

    // Initialize search module (needs reference to mobile menu)
    this.modules.search = new SearchModule(this.header, this.modules.mobileMenu);

    // Initialize mega menu module (desktop dropdowns)
    this.modules.megaMenu = new MegaMenuModule(this.header);

    // Initialize responsive module (needs references to mobile menu and toggle)
    this.modules.responsive = new ResponsiveModule(
      this.header, 
      this.modules.mobileMenu, 
      this.menuToggle
    );
  }
}

export default Header;
