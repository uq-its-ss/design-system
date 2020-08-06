import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './main-navigation.scss';

// import scripts
import mainNavigationCreate from '@uq-uidf/main-navigation/src/js/main-navigation.es6';

// import HTML template strings
import mainNavigationHTML from './main-navigation.html';

import docs from './main-navigation.docs.mdx';

export default {
  title: 'Components/Main navigation',
  parameters: {
    docs: {
      page: docs
    }
  },
  decorators: [expandedStory]
};

export const basicNavigation = () => {
  useEffect(() => {
    var navelement = document.getElementById("primary-nav");
    var nav = new mainNavigationCreate (navelement, "nav");
  });
  return `
  <div class="uq-main-navigation-header">
    <div class="section__content">
      <div class="uq-main-navigation-header__title-container"></div>
      <div class="uq-main-navigation-header__actions">
        <button class="js-nav-toggle uq-main-navigation-header__nav-toggle">Menu</button>
      </div>
    </div>
  </div>

  <div class="uq-main-navigation">
    <div id="block-mainnavigation" class="block block-system block-system-menu-blockmain">
        <div class="section__content">
          <nav class="nav nav--dropdown processed" id="primary-nav">
            <ul class="nav__level-1">
              <li class="active">
                <a
                  href="/"
                  title="Home"
                  aria-expanded="false"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="/study"
                  title="study"
                  aria-expanded="false"
                  >Study</a
                >
              </li>
              <li>
                <a
                  href="/contact-us"
                  title="Contact"
                  aria-expanded="false"
                  >Contact</a
                >
              </li>
            </ul>
          </nav>
        </div>
    </div>
  </div>
`;
};

export const dropdownNavigation = () => {
  useEffect(() => {
    var navelement = document.getElementById("primary-nav");
    var nav = new mainNavigationCreate (navelement, "nav");
  });
  return `
  <div class="uq-main-navigation-header">
    <div class="section__content">
      <div class="uq-main-navigation-header__title-container">
        <a href="/" class="uq-main-navigation-header__title">Site title</a>
      </div>
      <div class="uq-main-navigation-header__actions">
        <button class="js-nav-toggle uq-main-navigation-header__nav-toggle">Menu</button>
      </div>
    </div>
  </div>

  <div class="uq-main-navigation">
    <div id="block-mainnavigation" class="block block-system block-system-menu-blockmain">
        <div class="section__content">
          <nav class="nav nav--dropdown processed" id="primary-nav">
            <ul class="nav__level-1">
              <li class="active">
                <a
                  href="/"
                  title="Home"
                  aria-expanded="false"
                  >Home</a
                >
              </li>
              <li class="nav__has-subnav">
                <a
                  href="/study"
                  aria-expanded="false"
                  >Study</a
                >
                <span class="nav__sub-toggle">Open</span>
                <ul class="nav__level-2">
                  <li>
                    <a
                      href="/study/program"
                      aria-expanded="false"
                      >program</a
                    >
                  </li>
                  <li>
                    <a
                      href="/study/class"
                      aria-expanded="false"
                      >Class</a
                    >
                  </li>
                  <li>
                    <a
                      href="/study/room"
                      aria-expanded="false"
                      >Room</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/contact-us"
                  title="Contact"
                  aria-expanded="false"
                  >Contact</a
                >
              </li>
            </ul>
          </nav>
        </div>
    </div>
  </div>
`;
};

export const mainNavigation = () => {
  useEffect(() => {
      var navelement = document.getElementById("primary-nav");
      var nav = new mainNavigationCreate (navelement, "nav");
    });
  return mainNavigationHTML;
};

mainNavigation.story = {
  name: "Main navigation" 
}