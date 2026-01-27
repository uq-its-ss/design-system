// import styles
import "./header.scss";

// import js
import "./slide-menu.js";

// import scripts
import { header } from "@uqds/header/src/js/main";

// import HTML template strings
import HeaderInterimHTML from "./header-interim.html?raw";
import HeaderHTML from "./header.html?raw";
import { initJs } from "../../../lib/initJs";

export default {
  title: "Components/Header",

  parameters: {
    layout: "fullscreen",

    previewTabs: {
      canvas: { hidden: false },
    },
  },

  globals: {
    backgrounds: {
      value: "uq_neutral_1",
    },
  },
};

export const HeaderInterim = {
  render: () => {
    return HeaderInterimHTML;
  },
  decorators: [
    (storyFn) =>
      initJs(storyFn, (component) => {
        if (component) new header(component);

        const menuLeftElem = component.querySelector("#global-mobile-nav");
        const menuLeft = new SlideMenu(menuLeftElem, {
          position: "left",
          submenuLinkAfter: " ",
          backLinkBefore: " ",
        });

        const searchToggle = component.querySelector(
          ".nav-primary__search-toggle",
        );
        searchToggle.addEventListener("click", () => {
          menuLeft.close();
        });

        var slideMenuBackButtons = component.querySelectorAll(
          ".slide-menu__backlink, .global-mobile-nav__audience-link",
        );

        Array.prototype.forEach.call(slideMenuBackButtons, function (el, i) {
          el.addEventListener("click", () => {
            menuLeftElem.scrollTop = 0;
          });
        });

        // Responsive Resize Close menu and update toggles
        window.addEventListener("resize", (event) => {
          // Target Resize of LG ($screen-lg, 64rem, 1024px).
          if (window.innerWidth > 1024) {
            menuLeft.close(true);
            //reset the menu toggle after closing.
            const mainNavToggle = component.querySelector(
              ".nav-primary__toggle",
            );
            mainNavToggle.classList.remove("nav-primary__menu-toggle--is-open");
            const body = document.querySelector("body");
            body.classList.remove("no-scroll");
          }
        });
      }),
  ],
  name: "Header interim",
};

export const Header = {
  render: () => {
    return HeaderHTML;
  },
  decorators: [
    (storyFn) =>
      initJs(storyFn, (component) => {
        if (component) new header(component);

        const menuLeftElem = component.querySelector("#global-mobile-nav");
        const menuLeft = new SlideMenu(menuLeftElem, {
          position: "left",
          submenuLinkAfter: " ",
          backLinkBefore: " ",
        });

        const searchToggle = component.querySelector(
          ".nav-primary__search-toggle",
        );
        searchToggle.addEventListener("click", () => {
          menuLeft.close();
        });

        var slideMenuBackButtons = component.querySelectorAll(
          ".slide-menu__backlink, .global-mobile-nav__audience-link",
        );

        Array.prototype.forEach.call(slideMenuBackButtons, function (el, i) {
          el.addEventListener("click", () => {
            menuLeftElem.scrollTop = 0;
          });
        });

        // Responsive Resize Close menu and update toggles
        window.addEventListener("resize", (event) => {
          // Target Resize of LG ($screen-lg, 64rem, 1024px).
          if (window.innerWidth > 1024) {
            menuLeft.close(true);
            //reset the menu toggle after closing.
            const mainNavToggle = component.querySelector(
              ".nav-primary__toggle",
            );
            mainNavToggle.classList.remove("nav-primary__menu-toggle--is-open");
            const body = document.querySelector("body");
            body.classList.remove("no-scroll");
          }
        });
      }),
  ],

  name: "Header with mega menu",
};

export const basicHeader = {
  render: () => {
    return `
    <header id="uq-header" class="uq-header" data-gtm-category="Header">
      <div class="uq-header__container">
        <div class="uq-header__logo" data-gtm-category="Primary header">
          <a class="logo--large" href="https://uq.edu.au" data-gtm-label="UQ Logo">
            <img alt="The University of Queensland" src="https://static.uq.net.au/v15/logos/corporate/uq-logo--reversed.svg">
          </a>
        </div>        
      </div>
    </header>
    `;
  },

  name: "Header simplified",
};

export const searchGlobal = {
  render: () => {
    return `
      <div class="uq-header__search-container">
        <form action="https://search.uq.edu.au/" method="get" data-gtm-action="Text search" data-gtm-form-action="">
          <fieldset>
            <div class="uq-header__search-query">
              <label for="edit-q" class="visually-hidden uq-header__search-query-label">Search term</label>
              <input type="text" id="edit-q" name="q" value="" maxlength="128" placeholder="Search by keyword" class="uq-header__search-query-input" data-gtm-trigger="change" data-gtm-form-search="">
              <span class="uq-header__search-query-button">
                <input type="submit" value="Search" class="uq-header__search-query-submit" data-gtm-trigger="click">
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    `;
  },

  name: "Default search",

  globals: {
    backgrounds: {
      value: "uq_purple",
    },
  },
};

export const searchLocal = {
  render: () => {
    return `
    <div class="uq-header__search-container">
    <form action="https://search.uq.edu.au/" method="get" data-gtm-action="Text search" data-gtm-form-action="">
      <fieldset>
        <div class="uq-header__search-query">
          <label for="edit-q" class="visually-hidden uq-header__search-query-label">Search term</label>
          <input type="text" id="edit-q" name="q" value="" maxlength="128" placeholder="Search by keyword" class="uq-header__search-query-input" data-gtm-trigger="change" data-gtm-form-search="">
          <span class="uq-header__search-query-button">
            <input type="submit" value="Search" class="uq-header__search-query-submit" data-gtm-trigger="click">
          </span>
        </div>
        <div class="uq-header__search-range">
          <input type="radio" id="edit-as_sitesearch-off" name="as_sitesearch" value="" class="form-radio uq-header__search-radio">
          <label for="edit-as_sitesearch-off" class="option uq-header__search-label">Search all UQ websites</label>
        </div>
        <div class="uq-header__search-range">
          <input type="radio" id="edit-as_sitesearch-on" name="as_sitesearch" value="https://future-students.uq.edu.au" checked="checked" class="form-radio uq-header__search-radio">
          <label for="edit-as_sitesearch-on" class="option uq-header__search-label">Search this website (future-students.uq.edu.au)</label>
        </div>
      </fieldset>
    </form>
  </div>
    `;
  },

  name: "Global and local search",

  parameters: {
    docs: {
      inlineStories: false,
    },
  },

  globals: {
    backgrounds: {
      value: "uq_purple",
    },
  },
};
