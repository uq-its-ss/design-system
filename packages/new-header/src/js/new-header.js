'use strict';

/**
 * NewHeader module
 * @file Handles interaction behaviour for the Header. Does not output any
 * HTML elements.
 * TODO: make this class configurable
 */

class newHeader {
  constructor() {
    this.init();
  }

  init() {

    this.body = document.querySelector('body');
    this.menuToggle = document.querySelector('.nav-primary__menu-toggle');
    this.searchToggle = document.querySelector('.nav-primary__search-toggle');
    this.searchLabel = document.querySelector('.search-toggle__label');
    this.searchBlock = document.querySelector('.new-header__search');
    this.searchInput = document.querySelector('.new-header__search-query-input');

    // REFACTOR

    this.menuToggle.addEventListener('click', () => {
      this.body.classList.toggle('no-scroll');
      this.menuToggle.classList.toggle('nav-primary__menu-toggle--is-open');
      this.searchToggle.classList.remove('nav-primary__search-toggle--is-open');
      this.searchBlock.classList.remove('new-header__search--is-open');
    });

    this.searchToggle.addEventListener('click', () => {
      this.searchToggle.classList.toggle('nav-primary__search-toggle--is-open');
      this.searchBlock.classList.toggle('new-header__search--is-open');
      this.menuToggle.classList.remove('nav-primary__menu-toggle--is-open');
      if (this.searchBlock.classList.contains('new-header__search--is-open')) {
        window.setTimeout(() => this.searchInput.focus(), 50);
      } else {
        window.setTimeout(() => this.searchInput.blur(), 50);
        this.searchToggle.blur();
      }
      if ( this.searchLabel.innerHTML === "Search") {
        this.searchLabel.innerHTML = "Close";
      } else {
        this.searchLabel.innerHTML = "Search";
      }
    });
  }

};

export {newHeader as default};
