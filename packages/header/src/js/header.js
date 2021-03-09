'use strict';

/**
 * Header module
 * @file Handles interaction behaviour for the Header. Does not output any
 * HTML elements.
 * TODO: make this class configurable
 */

class header {
  constructor() {
    this.init();
  }

  init() {
    this.toggle = document.querySelector('.search-toggle__button');
    this.search = document.querySelector('.nav-search');
    this.searchInput = document.querySelector('.search-query__input');
    this.meta = document.querySelector('meta.uq-header__mq--desktop');

    if (this.meta == null) {
      this.meta = document.createElement('meta');
      this.meta.classList.add('uq-header__mq--desktop');
      document.head.appendChild(this.meta);
    };

    this.mqLarge = window.getComputedStyle(this.meta).getPropertyValue('font-family');
    this.mqLarge = this.mqLarge.trim().slice(1, -1); // browsers re-quote string style values
    this.mqLargeList = window.matchMedia(this.mqLarge);

    this.toggle.addEventListener('click', () => {
      this.handleToggle();
    });
  }

  handleToggle() {
    this.toggle.classList.toggle('search-toggle__button--icon-close');
    this.search.classList.toggle('nav-search--open');

    if (this.search.classList.contains('nav-search--open')) {
      if (this.mqLargeList.matches) {
        this.searchInput.focus();
      } else {
        this.toggle.blur();
      }
    } else {
      this.toggle.blur();
    }
  }
};

export {header as default};
