import { useEffect } from "@storybook/addons";

// import styles
import "./header.scss";

// import js
import "./slide-menu.js";

// import scripts
import headerCreate from "@uqds/header/src/js/header";

// import HTML template strings
import HeaderInterimHTML from "./header-interim.html";
import HeaderHTML from "./header.html";

export default {
  title: "Components/Header",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "UQ Neutral 1",
    },
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const HeaderInterim = {
  render: () => {
    useEffect(() => {
      const headerElem = document.querySelector(".uq-header");
      new headerCreate(headerElem);

      document.addEventListener("DOMContentLoaded", function () {
        const menuLeftElem = document.getElementById("global-mobile-nav");

        const menuLeft = new SlideMenu(menuLeftElem, {
          position: "left",
          submenuLinkAfter: " ",
          backLinkBefore: " ",
        });

        this.searchToggle = document.querySelector(
          ".nav-primary__search-toggle"
        );

        this.searchToggle.addEventListener("click", () => {
          menuLeft.close();
        });

        var slideMenuBackButtons = document.querySelectorAll(
          ".slide-menu__backlink, .global-mobile-nav__audience-link"
        );

        Array.prototype.forEach.call(slideMenuBackButtons, function (el, i) {
          el.addEventListener("click", () => {
            document.querySelector(".global-mobile-nav").scrollTop = 0;
          });
        });

        // Responsive Resize Close menu and update toggles
        window.addEventListener("resize", (event) => {
          // Target Resize of LG ($screen-lg, 64rem, 1024px).
          if (window.innerWidth > 1024) {
            menuLeft.close(true);
            //reset the menu toggle after closing.
            this.mainNavToggle = document.querySelector(".nav-primary__toggle");
            this.mainNavToggle.classList.remove(
              "nav-primary__menu-toggle--is-open"
            );
            this.body = document.querySelector("body");
            this.body.classList.remove("no-scroll");
          }
        });
      });
    });
    return HeaderInterimHTML;
  },

  name: "Header interim",
};

export const Header = {
  render: () => {
    useEffect(() => {
      const headerElem = document.querySelector(".uq-header");
      new headerCreate(headerElem);

      document.addEventListener("DOMContentLoaded", function () {
        const menuLeftElem = document.getElementById("global-mobile-nav");

        const menuLeft = new SlideMenu(menuLeftElem, {
          position: "left",
          submenuLinkAfter: " ",
          backLinkBefore: " ",
        });

        this.searchToggle = document.querySelector(
          ".nav-primary__search-toggle"
        );

        this.searchToggle.addEventListener("click", () => {
          menuLeft.close();
        });

        var slideMenuBackButtons = document.querySelectorAll(
          ".slide-menu__backlink, .global-mobile-nav__audience-link"
        );

        Array.prototype.forEach.call(slideMenuBackButtons, function (el, i) {
          el.addEventListener("click", () => {
            document.querySelector(".global-mobile-nav").scrollTop = 0;
          });
        });

        // Responsive Resize Close menu and update toggles
        window.addEventListener("resize", (event) => {
          // Target Resize of LG ($screen-lg, 64rem, 1024px).
          if (window.innerWidth > 1024) {
            menuLeft.close(true);
            //reset the menu toggle after closing.
            this.mainNavToggle = document.querySelector(".nav-primary__toggle");
            this.mainNavToggle.classList.remove(
              "nav-primary__menu-toggle--is-open"
            );
            this.body = document.querySelector("body");
            this.body.classList.remove("no-scroll");
          }
        });
      });
    });
    return HeaderHTML;
  },

  name: "Header with mega menu",
};

export const basicHeader = {
  render: () => {
    return `
    <header class="uq-header" data-gtm-category="Header">
      <div class="uq-header__container">
        <div class="uq-header__logo" data-gtm-category="Primary header">
          <a class="logo--large" href="https://www.uq.edu.au" data-gtm-label="UQ Logo">
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
        <form action="https://www.uq.edu.au/search" method="get" data-gtm-action="Text search" data-gtm-form-action="">
          <fieldset>
            <div class="uq-header__search-query">
              <label for="edit-q" class="visually-hidden uq-header__search-query-label">Search term</label>
              <input type="text" id="edit-q" name="q" value="" maxlength="128" placeholder="Search by keyword" class="uq-header__search-query-input" data-gtm-trigger="change" data-gtm-form-search="">
              <span class="uq-header__search-query-button">
                <input type="submit" name="op" value="Search" class="uq-header__search-query-submit" data-gtm-trigger="click">
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    `;
  },

  name: "Default search",

  parameters: {
    backgrounds: {
      default: "UQ purple",
    },
  },
};

export const searchLocal = {
  render: () => {
    return `
    <div class="uq-header__search-container">
    <form action="https://www.uq.edu.au/search" method="get" data-gtm-action="Text search" data-gtm-form-action="">
      <fieldset>
        <div class="uq-header__search-query">
          <label for="edit-q" class="visually-hidden uq-header__search-query-label">Search term</label>
          <input type="text" id="edit-q" name="q" value="" maxlength="128" placeholder="Search by keyword" class="uq-header__search-query-input" data-gtm-trigger="change" data-gtm-form-search="">
          <span class="uq-header__search-query-button">
            <input type="submit" name="op" value="Search" class="uq-header__search-query-submit" data-gtm-trigger="click">
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
    backgrounds: {
      default: "UQ purple",
    },
  },
};
