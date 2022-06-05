import { useEffect } from '@storybook/client-api';

// import styles
import './header.scss';

// import js
import './slide-menu.js';

// import scripts
import headerCreate from '@uqds/header/src/js/header';

// import HTML template strings
import HeaderHTML from './header.html';

import docs from './header.docs.mdx';

export default {
  title: 'Components/Header',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "fullscreen",
    backgrounds: {
      default: 'UQ Neutral 1'
    },
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const Header = () => {
  useEffect(() => {
    const headerElem = document.querySelector('.uq-header');
    new headerCreate(headerElem);

    document.addEventListener('DOMContentLoaded', function() {
      const menuLeftElem = document.getElementById('global-mobile-nav');

      const menuLeft = new SlideMenu(menuLeftElem, {
        position: 'left',
        submenuLinkAfter: ' ',
        backLinkBefore: ' ',
      });

      this.searchToggle = document.querySelector('.nav-primary__search-toggle');

      this.searchToggle.addEventListener('click', () => {
        menuLeft.close();
      });


      var slideMenuBackButtons = document.querySelectorAll('.slide-menu__backlink, .global-mobile-nav__audience-link');
      
      Array.prototype.forEach.call(slideMenuBackButtons, function(el, i){
          el.addEventListener('click', () => {
            document.querySelector('.global-mobile-nav').scrollTop = 0;
          });
      });

      // Responsive Resize Close menu and update toggles 
      window.addEventListener('resize', (event) => {
      
      // Target Resize of LG ($screen-lg, 64rem, 1024px). 
      if (window.innerWidth > 1024) {
            menuLeft.close(true);
            //reset the menu toggle after closing. 
            this.mainNavToggle = document.querySelector('.nav-primary__toggle');
            this.mainNavToggle.classList.remove('nav-primary__menu-toggle--is-open');
            this.body = document.querySelector('body');
            this.body.classList.remove('no-scroll');
            }
      });
    });

  });
  return HeaderHTML;
};

Header.storyName = 'Header';