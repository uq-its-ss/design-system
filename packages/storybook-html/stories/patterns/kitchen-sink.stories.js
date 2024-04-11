
// import scripts
import { header } from "@uqds/header/src/js/main";
import { accordion } from "@uqds/accordion/src/js/main";
import siteHeaderNavigation from "@uqds/site-header/src/js/site-header-navigation";
import { breadcrumb } from "@uqds/breadcrumb/src/js/main";

// import HTML template strings
import { Header } from "../components/header/header.stories";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb.stories";
import { Hero } from "../components/hero/hero.stories";
import { infoGlobal } from "../components/alert/alert.stories";
import { alertInfo } from "../components/alert/alert.stories";
import { usingDivs } from "../components/accordion/accordion.stories";
import { primary } from "../components/button/button.stories";
import { Card } from "../components/card/card.stories";
import { footer } from "../components/footer/footer.stories";
import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Patterns/Kitchen Sink",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const kitchen = {
  render: () => {
    return `
    ${Header.render()}
    ${Breadcrumb.render()}
    ${infoGlobal.render()}
    <div class="uq-sections">
      ${Hero.render(Hero.args)}
      <div class="uq-container">
        ${alertInfo.render()}
        <!-- Typography -->
        <h2>Typography</h2>
        <h1>Heading level 1 (h1)</h1>
        <h2>Heading level 2 (h2)</h2>
        <h3>Heading level 3 (h3)</h3>
        <h4>Heading level 4 (h4)</h4>
        <h5>Heading level 5 (h5)</h5>
        <h6>Heading level 6 (h6)</h6>
        <p class="uqds-font--lead">Lead paragraph text, lorem ipsum dolor sit amet.</p>
        <p>Paragraph text, lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla vitae consectetur interdum. Quisque sed nibh in lorem malesuada egestas. Integer varius orci in ligula mollis sodales. Sed dapibus rutrum finibus. Vestibulum tellus velit, dictum eu cursus at, luctus condimentum leo.</p>
        <p class="uqds-font--small">Small paragraph text, lorem ipsum dolor sit amet.</p>
        <p class="uqds-font--xsmall">Extra small paragraph text, lorem ipsum dolor sit amet.</p>
        <p><strong>Strong text</strong></p> 
        <p><em>Emphasis text</em></p>
        <p><label for="">Label text</label></p>
        <p><a href="">Link</a></p>
        <ol>
          <li>Ordered list item</li>
          <li>Ordered list item</li>
          <li>Ordered list item</li>
        </ol>
        <ul>
          <li>Unordered list item</li>
          <li>Unordered list item</li>
          <li>Unordered list item</li>
        </ul>
        <hr>

        ${primary.render()}

        <h2>Accordion</h2>
        ${usingDivs.render()}

        <h2>Card grid</h2>
        <div class="uq-card-grid uq-card-grid--target-3x">
        ${Card.render(Card.args)}
        ${Card.render(Card.args)}
        ${Card.render(Card.args)}
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
};
