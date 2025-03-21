// import scripts
import { header } from "@uqds/header/src/js/main";
import { accordion } from "@uqds/accordion/src/js/main";
import siteHeaderNavigation from "@uqds/site-header/src/js/site-header-navigation";
import { breadcrumb } from "@uqds/breadcrumb/src/js/main";

// import HTML template strings
import { HeaderInterim } from "../../components/header/header.stories";
import { siteHeaderWithSubnav } from "../../components/site-header/site-header.stories";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import { footer } from "../../components/footer/footer.stories";

export default {
  title: "Patterns/Basic page",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const basicPage = {
  render: () => {
    return `
    ${HeaderInterim.render()}
      ${siteHeaderWithSubnav.render()}
      ${Breadcrumb.render()}
      <div class="uq-grid">
        <div class="uq-grid__col uq-grid__col--6">
          <h1>Heading level 1 (h1)</h1>
          <div class="uq-grid uq-grid--golden">
            <div class="uq-grid__col">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Ut tellus elementum sagittis vitae et leo. Eu sem integer vitae justo. Massa vitae tortor condimentum lacinia quis. Vel fringilla est ullamcorper eget nulla facilisi. Quis imperdiet massa tincidunt nunc. Convallis tellus id interdum velit laoreet id. Eu mi bibendum neque egestas congue quisque egestas diam in.</p>
            </div>
            <div class="uq-grid__col">
              <p><small>Id diam vel quam elementum pulvinar. Vestibulum sed arcu non odio euismod lacinia. Facilisis sed odio morbi quis. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.</small></p>
            </div>
          </div>
        </div>
      </div>
      ${footer.render()}
    `;
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
        ".slide-menu__backlink, .global-mobile-nav__audience-link",
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
            "nav-primary__menu-toggle--is-open",
          );
          this.body = document.querySelector("body");
          this.body.classList.remove("no-scroll");
        }
      });
    });
  },
};
