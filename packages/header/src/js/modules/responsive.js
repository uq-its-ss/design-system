"use strict";

/**
 * Responsive Module
 * @file Handles responsive behavior across breakpoints
 * Uses matchMedia API for optimal performance
 */

export class ResponsiveModule {
  /**
   * Creates a new ResponsiveModule instance
   * @param {HTMLElement} header - The header element
   * @param {MobileMenuModule} mobileMenu - Reference to mobile menu module
   * @param {HTMLElement} menuToggle - The menu toggle button element
   */
  constructor(header, mobileMenu, menuToggle) {
    this.header = header;
    this.mobileMenu = mobileMenu;
    this.menuToggle = menuToggle;
    this.init();
  }

  /**
   * Initialize responsive behavior
   * Sets up matchMedia listener for desktop breakpoint
   */
  init() {
    // Use matchMedia for better performance than resize events
    // Matches the $screen-lg breakpoint (64rem = 1024px)
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    
    const handleBreakpoint = (e) => {
      if (e.matches) {
        this.onDesktopBreakpoint();
      }
    };

    // Modern browsers (addEventListener)
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', handleBreakpoint);
    } else {
      // Fallback for older browsers (addListener)
      desktopQuery.addListener(handleBreakpoint);
    }
  }

  /**
   * Handle transition to desktop breakpoint
   * Closes mobile menu and resets UI state
   * @private
   */
  onDesktopBreakpoint() {
    // Close mobile menu
    if (this.mobileMenu) {
      this.mobileMenu.close(true);
    }
    
    // Reset menu toggle state
    if (this.menuToggle) {
      this.menuToggle.classList.remove('uq-header__toggle-menu-button--is-open');
    }
    
    // Remove scroll lock from body
    document.body.classList.remove('no-scroll');
  }
}
