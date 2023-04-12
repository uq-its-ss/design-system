import { useEffect } from "@storybook/addons";

// import scripts
import header from "@uqds/header/src/js/header";
import accordion from "@uqds/accordion/src/js/accordion";
import siteHeaderNavigation from "@uqds/site-header/src/js/site-header-navigation";
import breadcrumbCreate from "@uqds/breadcrumb/src/js/breadcrumb";

// import HTML template strings
import kitchenSinkHTML from "./kitchen-sink.html";

export default {
  title: "Gallery & Examples/Kitchen sink",
  parameters: {
    layout: "fullscreen",
    viewMode: "story",
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
      canvas: { hidden: false },
    },
  },
};

export const kitchenSink = () => {
  useEffect(() => {
    new accordion();

    // Initialise Main Navigation
    const navElem = document.getElementById("jsNav");
    new siteHeaderNavigation(navElem, "uq-site-header__navigation");

    const headerkitch = document.querySelector(".uq-header");
    new header(headerkitch);

    const breadcrumb = document.querySelector(".uq-breadcrumb");
    new breadcrumbCreate(breadcrumb);

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
  });
  return kitchenSinkHTML;
};

kitchenSink.storyName = "Kitchen sink";

kitchenSink.parameters = {
  docs: {
    page: null,
  },
};
