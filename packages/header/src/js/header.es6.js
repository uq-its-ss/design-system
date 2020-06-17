'use strict';

/**
 * Header module
 * @file Handles interaction behaviour for the Header. Does not output any
 * HTML elements.
 */

class header {
  constructor() {
    this.toggle = document.querySelector('.search-toggle__button');
    this.search = document.querySelector('.nav-search');
    this.init();
  }

  init() {
    this.toggle.addEventListener('click', () => {
      this.handleToggle();
      this.toggle.blur();
    });
    
  }

  handleToggle() {
    this.toggle.classList.toggle('icon--standard--search');
    this.toggle.classList.toggle('icon--standard--close');
    this.search.classList.toggle('nav-search--open');
    console.log(this.search);
  }
};

export {header as default};
