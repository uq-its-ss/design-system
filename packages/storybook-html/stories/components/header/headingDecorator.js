/**
 * @file headingDecorator.js
 * Shared initialization logic for header JavaScript functionality.
 * This can be used in header.stories.js and any template stories
 * that embed the header component.
 */

import { initJs } from "../../../lib/initJs";
import { header } from "@uqds/header/src/js/main";

/**
 * initializeHeader
 * Initializes the header component with all interactive features:
 * - Header class initialization
 * - SlideMenu for mobile navigation
 * - Search toggle functionality
 * - Responsive behavior
 *
 * @param {HTMLElement} component - The component containing the header
 */
export const initializeHeader = (component) => {
  if (!component) return;

  // Find the header element (may be the component itself or a child)
  const headerElem = component.classList.contains("uq-header")
    ? component
    : component.querySelector(".uq-header");

  if (!headerElem) return;

  // Check if this is a full header with interactive elements
  const hasInteractiveElements = headerElem.querySelector(
    ".nav-primary__menu-toggle",
  );

  // Only initialize interactive features if the elements exist
  if (hasInteractiveElements) {
    new header(headerElem);

    const menuLeftElem = headerElem.querySelector("#global-mobile-nav");
    if (menuLeftElem) {
      const menuLeft = new SlideMenu(menuLeftElem, {
        position: "left",
        submenuLinkAfter: " ",
        backLinkBefore: " ",
      });

      const searchToggle = headerElem.querySelector(
        ".nav-primary__search-toggle",
      );
      if (searchToggle) {
        searchToggle.addEventListener("click", () => {
          menuLeft.close();
        });
      }

      var slideMenuBackButtons = headerElem.querySelectorAll(
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
          const mainNavToggle = headerElem.querySelector(
            ".nav-primary__toggle",
          );
          if (mainNavToggle) {
            mainNavToggle.classList.remove("nav-primary__menu-toggle--is-open");
          }
          const body = document.querySelector("body");
          body.classList.remove("no-scroll");
        }
      });
    }
  }
};

/**
 * HeaderDecorator
 * A convenience decorator that wraps initializeHeader with initJs.
 * Use this when the header is the only component needing initialization.
 */
export const HeaderDecorator = (storyFn) => initJs(storyFn, initializeHeader);
