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
    this.searchBlock = document.querySelector('.uq-header__search');
    this.searchInput = document.querySelector('.uq-header__search-query-input');

    // REFACTOR

    this.menuToggle.addEventListener('click', () => {
      this.body.classList.toggle('no-scroll');
      this.menuToggle.classList.toggle('nav-primary__menu-toggle--is-open');
      this.searchToggle.classList.remove('nav-primary__search-toggle--is-open');
      this.searchBlock.classList.remove('uq-header__search--is-open');
    });


    this.searchToggle.addEventListener('click', (e) => {
      this.body.classList.remove('no-scroll');
      this.searchToggle.classList.toggle('nav-primary__search-toggle--is-open');
      this.searchBlock.classList.toggle('uq-header__search--is-open');
      this.menuToggle.classList.remove('nav-primary__menu-toggle--is-open');
      if (this.searchBlock.classList.contains('uq-header__search--is-open')) {
        this.searchInput.focus();
      } else {
        this.searchInput.blur();
        this.searchToggle.blur();
      }
      if ( this.searchLabel.innerHTML === "Search") {
        this.searchLabel.innerHTML = "Close";
      } else {
        this.searchLabel.innerHTML = "Search";
      }
      e.preventDefault();
    });
  }

};

export {newHeader as default};
