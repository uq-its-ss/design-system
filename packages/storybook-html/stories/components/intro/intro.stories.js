// import scripts
import { header } from "@uqds/header/src/js/main";
import { accordion } from "@uqds/accordion/src/js/main";
import siteHeaderNavigation from "@uqds/site-header/src/js/site-header-navigation";
import { breadcrumb } from "@uqds/breadcrumb/src/js/main";

// import HTML template strings
import kitchenSinkHTML from "./kitchen-sink.html";

export default {
  title: "Patterns/Kitchen sink",
  parameters: {
    layout: "fullscreen",
    viewMode: "story",
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
      canvas: { hidden: false },
    },
  },
};

export const kitchenSink = {
  render: () => {
    return kitchenSinkHTML;
  },
  play: ({ canvasElement }) => {
    // Initialise Header
    const headerElem = canvasElement.querySelector(".uq-header");
    if (headerElem) new header(headerElem);

    // Initialise Main Navigation
    const navElem = canvasElement.querySelector("#jsNav");
    if (navElem)
      new siteHeaderNavigation(navElem, "uq-site-header__navigation");

    // Initialise Breadcrumb
    const breadcrumbs = canvasElement.querySelector(".uq-breadcrumb");
    if (breadcrumbs) new breadcrumb(breadcrumbs);

    // Initialise accordion
    new accordion();

    document.addEventListener("DOMContentLoaded", function () {
      const menuLeftElem = document.getElementById("global-mobile-nav");

      const menuLeft = new SlideMenu(menuLeftElem, {
        position: "left",
        submenuLinkAfter: " ",
        backLinkBefore: " ",
      });

      this.searchToggle = document.querySelector(".nav-primary__search-toggle");

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
  },

  name: "Kitchen sink",
};
