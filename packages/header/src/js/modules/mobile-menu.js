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
   */
  constructor(header) {
    this.header = header;
    this.slideMenu = null;
    this.menuElement = null;
    this.init();
  }

  /**
   * Initialize the mobile menu module
   * Checks for SlideMenu availability and element existence
   */
  init() {
    this.menuElement = document.getElementById('global-mobile-nav');
    
    // Exit early if SlideMenu library not available or element doesn't exist
    if (!this.menuElement || typeof SlideMenu === 'undefined') {
      return;
    }

    this.initSlideMenu();
    this.initScrollReset();
  }

  /**
   * Initialize the SlideMenu instance
   * @private
   */
  initSlideMenu() {
    this.slideMenu = new SlideMenu(this.menuElement, {
      position: 'left',
      submenuLinkAfter: ' ',
      backLinkBefore: ' ',
    });
  }

  /**
   * Initialize scroll reset on navigation back buttons
   * Ensures user always sees top of submenu when navigating
   * @private
   */
  initScrollReset() {
    const backButtons = this.header.querySelectorAll(
      '.slide-menu__backlink, .global-mobile-nav__audience-link'
    );
    
    backButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.menuElement) {
          this.menuElement.scrollTop = 0;
        }
      });
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
  }

  /**
   * Check if the mobile menu is currently open
   * @returns {boolean} True if menu is open
   */
  isOpen() {
    return this.slideMenu && this.slideMenu.isOpen && this.slideMenu.isOpen();
  }
}
