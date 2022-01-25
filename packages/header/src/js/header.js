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
    // this.toggle = document.querySelector('.uq-header__search-toggle-button');
    // this.search = document.querySelector('.uq-header__search');
    // this.searchInput = document.querySelector('.uq-header__search-query-input');
    // this.meta = document.querySelector('meta.uq-header__mq--desktop');
    // this.navigation = document.querySelector('.uq-header__navigation');

    // if (this.meta == null) {
    //   this.meta = document.createElement('meta');
    //   this.meta.classList.add('uq-header__mq--desktop');
    //   document.head.appendChild(this.meta);
    // };

    // this.mqLarge = window.getComputedStyle(this.meta).getPropertyValue('font-family');
    // this.mqLarge = this.mqLarge.trim().slice(1, -1); // browsers re-quote string style values
    // this.mqLargeList = window.matchMedia(this.mqLarge);

    this.searchToggle = document.querySelector('.main-nav__search-toggle');
    this.searchBlock = document.querySelector('.new-header__search');


    this.searchToggle.addEventListener('click', (event) => {
      this.searchBlock.classList.toggle('new-header__search--is-open');
      event.preventDefault();
    });



    console.log('init');



  }

  // handleToggle() {
  //   console.log('click');
  //   this.megamenu.classList.toggle('new-header__megamenu--open');
  //   // this.search.classList.toggle('uq-header__search--open');
  //   // this.navigation.classList.toggle('uq-header__navigation--open');

  //   // if (this.search.classList.contains('uq-header__search--open')) {
  //   //   if (this.mqLargeList.matches) {
  //   //     this.searchInput.focus();
  //   //   } else {
  //   //     this.toggle.blur();
  //   //   }
  //   // } else {
  //   //   this.toggle.blur();
  //   // }
  // }
};

export {header as default};
