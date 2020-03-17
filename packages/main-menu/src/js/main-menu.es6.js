'use strict';

import domready from 'domready';

/**
 * Main menu module
 * @file Handles interaction behaviour for the main menu. Does not output any
 * HTML elements.
 */
class mainMenu {

  /**
   * Constructor
   * @param {String} [menuClassPrefix] - (Optional; default: 
   * "main-menu"). Prefix for the functional elements of the main menu.
   * @constructor
   */
  constructor(menuClassPrefix) {
    if (!menuClassPrefix) {
      menuClassPrefix = "main-menu";
    } else {
      menuClassPrefix = menuClassPrefix;
    }

    this.menuClassPrefix = menuClassPrefix;

    this.init();
  };

  /**
   * Initialise menu
   * @method
   */
  init() {
    domready(() => {
      const menuLinks = document.querySelectorAll(`.${this.menuClassPrefix}__mobile-menu-link`);
      const menuDropdownLinks = document.querySelectorAll('.menu__dropdown-link');

      menuLinks.forEach(element => {
        element.addEventListener('click', this.handleLinkClick());
      });

      menuDropdownLinks.forEach(element => {
        element.addEventListener('click', this.handleDropdownLinkClick());
      });
    })
  };

  /**
   * Method to replace jQuery's .next() method.
   * See: https://gomakethings.com/finding-the-next-and-previous-sibling-elements-that-match-a-selector-with-vanilla-js/
   * @method
   */
  getNextSibling(elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) {
      return sibling;
    }

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) {
        return sibling;
      }
      sibling = sibling.nextElementSibling
    }
  }

  /**
   * Menu link click handler
   * @method
   */
  handleLinkClick() {
    return (e) => {
      e.preventDefault();
      const targetParent = e.target.closest(`.${this.menuClassPrefix}__mobile-menu`);
      // find the next menu
      const menu = this.getNextSibling(targetParent, '.menu');
      menu.classList.toggle("mobile-open");
      const menuIcon = e.target.querySelector('.icon');
      menuIcon.classList.toggle('icon-bars');
      menuIcon.classList.toggle('icon-close');
    }
  };

  /**
   * Menu dropdown link click handler
   * @method
   */
  handleDropdownLinkClick() {
    return (e) => {
      e.preventDefault();
      const targetNextMenu = this.getNextSibling(e.target, '.menu__dropdown');
      targetNextMenu.classList.toggle('expand');
      e.target.classList.toggle('dropdown-open');
    }
  }
};

export {mainMenu as default};
