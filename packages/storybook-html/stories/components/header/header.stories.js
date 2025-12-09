// import styles
import "./header.scss";

// import scripts
import "./slide-menu.js";
import { localLinks, primaryLinks, secondaryLinks } from "./menuData.js"; // Import the menu data
import { header } from "@uqds/header/src/js/main"; // Import 'header' for UQ header JS functionality

// Helper function to render the mega menu columns, groups, and children
const renderMegaMenu = (columns, parentTitle) => {
  return columns
    .map(
      (column) => `
    <div class="megamenu__column">
      ${column.groups
        .map(
          (group) => `
        <div class="megamenu__heading">${group.heading}</div>
        <div class="megamenu__menu">
          <ul>
            ${group.children
              .map(
                (child) => `
              <li data-gtm-category="Main navigation"><a href="${child.href}" data-gtm-label="${parentTitle} > ${child.title}">${child.title}</a></li>
            `,
              )
              .join("")}
          </ul>
        </div>
      `,
        )
        .join("")}
    </div>
  `,
    )
    .join("");
};

// helper function for recursive rendering of nested links
const renderNestedLinks = (children, isRoot = false) => {
  if (!children || children.length === 0) {
    return "";
  }

  return children
    .map((child) => {
      // Check if the current child itself has nested children (e.g., third level)
      const hasGrandchildren = child.children && child.children.length > 0;

      let linkContent = `
        <li class="uq-header__nav-mobile-item" data-gtm-category="Main navigation">
          <a href="${child.href}" class="${hasGrandchildren ? "uq-header__nav-mobile-audience-link slide-menu__control" : "uq-header__nav-mobile-link"}">${child.title}</a>
          ${
            hasGrandchildren
              ? `
            <ul>
              <li class="uq-header__nav-mobile-item">
                <a class="uq-header__nav-mobile-audience-link" href="${child.href}">${child.title}</a>
              </li>
              ${renderNestedLinks(child.children)}
            </ul>
            `
              : ""
          }
        </li>
      `;

      return linkContent;
    })
    .join("");
};

// Helper function to render the mobile navigation structure
const renderMobileNav = (links) => {
  return links
    .map(
      (link) => `
      <li class="uq-header__nav-mobile-item" data-gtm-category="Main navigation">
        <a href="${link.href}" class="${link.columns ? "uq-header__nav-mobile-audience-link slide-menu__control" : "uq-header__nav-mobile-link"}">${link.title}</a>
        ${
          link.columns
            ? `
          <ul class="uq-header__nav-mobile-list">
            <li class="uq-header__nav-mobile-item">
              <a class="uq-header__nav-mobile-link" href="${link.href}">${link.title}</a>
            </li>
            ${link.columns // Iterate over columns
              .map((column) =>
                column.groups
                  .map(
                    (
                      group, // Iterate over groups in the column
                    ) =>
                      // Use the recursive helper to render all nested children
                      renderNestedLinks(group.children),
                  )
                  .join(""),
              )
              .join("")}
          </ul>
          `
            : ""
        }
      </li>
    `,
    )
    .join("");
};

/**
 * The SiteHeader component displays the primary and secondary navigation, logo, and search functionality.
 */
export default {
  title: "Components/Header",
  // Parameters provide story-level metadata
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "UQ Neutral 1",
    },
  },
  // ArgTypes define the controls for your component's properties (args)
  argTypes: {
    siteName: {
      name: "Site Name (for mobile)",
      control: "text",
      description:
        "The title displayed in the mobile menu when not on the global homepage.",
    },
    siteDomain: {
      name: "Site Domain (for search)",
      control: "text",
      description:
        "The domain used for site search when not on the global homepage.",
    },
    showGlobalHeader: {
      name: "Show Global Header (Mega Menu)",
      control: "boolean",
      description:
        "Controls the visibility of the mega menu dropdowns for primary navigation items.",
    },
    showLocalMobile: {
      name: "Show Local Mobile Nav (overrides Primary)",
      control: "boolean",
      description:
        "Controls the visibility of the local mobile nav menu, replacing the global primary nav on mobile.",
    },
    localLinks: {
      name: "Local Navigation Links",
      control: "object",
      description:
        "JSON object for the main navigation items and their mega menu structure.",
      table: {
        category: "navigation Links",
      },
    },
    primaryLinks: {
      name: "Primary Navigation Links",
      control: "object",
      description:
        "JSON object for the main navigation items and their mega menu structure.",
      table: {
        category: "navigation Links",
      },
    },
    secondaryLinks: {
      name: "Secondary Navigation Links",
      control: "object",
      description: "JSON object for the secondary header links.",
      table: {
        category: "navigation Links",
      },
    },
  },

  globals: {
    backgrounds: {
      value: "uq_neutral_1",
    },
  },
};

// --- Story Rendering Logic (The previous Template function, now the 'render' method) ---

const headerRenderer = ({
  siteName,
  siteDomain,
  showGlobalHeader,
  showLocalMobile,
  localLinks,
  primaryLinks,
  secondaryLinks,
}) => `
<header class="uq-header" data-gtm-category="Header">
  <div class="uq-header__container">
    <div class="uq-header__menu-toggle" data-target="global-mobile-nav" data-gtm-category="Primary header">
      <button type="button" class="nav-primary__toggle nav-primary__menu-toggle slide-menu__control" data-target="global-mobile-nav" data-arg=".is-active" data-action="smartToggle" data-gtm-action="Toggle">Menu</button>
      </div>
    <div class="uq-header__logo" data-gtm-category="Primary header">
      <a class="logo--large" href="https://uq.edu.au" data-gtm-label="UQ Logo">
        <img alt="The University of Queensland" src="https://static.uq.net.au/v11/logos/corporate/uq-logo--reversed.svg">
      </a>
    </div>
    <div class="uq-header__nav-primary" data-gtm-category="Primary header">
      <nav class="uq-header__nav-primary-container" aria-label="primary navigation">
        <ul class="uq-header__nav-primary-list">
          ${primaryLinks
            .map(
              (link) => `
            <li class="uq-header__nav-primary-item">
              <a class="uq-header__nav-primary-link ${showGlobalHeader ? "nav-primary-link--has-dropdown" : ""}" href="${link.href}" data-gtm-label="${link.title}">${link.title}</a>
              ${
                showGlobalHeader
                  ? `
                <div class="uq-header__megamenu">
                  <div class="uq-header__megamenu-container">
                    <a href="${link.href}" class="megamenu__overview-link" data-gtm-label="${link.title} > ${link.title} overview"><span class="megamenu__overview-label">${link.title} overview</span></a>
                    <div class="megamenu__row">
                      ${renderMegaMenu(link.columns, link.title)}
                    </div>
                  </div>
                </div>
              `
                  : ""
              }
            </li>
          `,
            )
            .join("")}
        </ul>
      </nav>
    </div>

    <div class="uq-header__search-toggle" data-gtm-category="Search">
      <button class="nav-primary__toggle nav-primary__search-toggle" data-gtm-action="Toggle">
        <div class="search-toggle__label">Search</div>
      </button>
    </div>
  </div>

  <nav class="slide-menu uq-header__nav-mobile ${showLocalMobile ? "uq-header__nav-mobile-local" : ""}" id="global-mobile-nav" aria-label="primary navigation mobile">
    <ul class="uq-header__nav-mobile-list">
    ${
      showLocalMobile
        ? `
        <li class="uq-header__nav-mobile-item">
          <a class="uq-header__nav-mobile-home" href="https://uq.edu.au">UQ home</a>
        </li>
        <li class="uq-header__nav-mobile-item">
            <a class="uq-header__nav-mobile-link is-active" href="/study">Study</a>
        </li>
        ${renderMobileNav(localLinks)}
        `
        : ""
    }
    

    ${
      !showLocalMobile
        ? `
          <li class="uq-header__nav-mobile-item" data-gtm-category="Secondary header">
            <a class="uq-header__nav-mobile-primary" href="https://uq.edu.au">UQ home <span class="slide-menu__decorator"> </span></a>
          </li>
          ${primaryLinks
            .map(
              (link) => `
              <li class="uq-header__nav-mobile-item" data-gtm-category="Primary header">
                  <a class="uq-header__nav-mobile-primary" href="${link.href}">${link.title} <span class="slide-menu__decorator"> </span></a>
              </li>`,
            )
            .join("")}

          ${secondaryLinks
            .map(
              (link) => `
              <li class="uq-header__nav-mobile-secondary-item" data-gtm-category="Secondary header">
                  <a class="uq-header__nav-mobile-secondary" href="${link.href}">${link.title}</a>
              </li>
          `,
            )
            .join("")}
        `
        : ""
    }
    </ul>
  </nav>


    <div class="uq-header__search" data-gtm-category="Search">
    <div class="uq-header__search-container">
        <form action="https://search.uq.edu.au/" method="get" data-gtm-action="Text search" data-gtm-form-action="">
        <fieldset>
            <div class="uq-header__search-query">
            <label for="edit-q" class="visually-hidden uq-header__search-query-label">Search term</label>
            <input type="text" id="edit-q" name="q" value="" maxlength="128" placeholder="Search by keyword" autocomplete="off" class="uq-header__search-query-input" data-gtm-form-search="">
            <span class="uq-header__search-query-button">
                <input type="submit" name="op" value="Search" class="uq-header__search-query-submit" data-gtm-trigger="click">
            </span>
            <input type="hidden" value="${siteDomain}" name="as_sitesearch" id="edit-as_sitesearch-on">           
            </div>
        </fieldset>
        </form>
    </div>
    </div>

    <div class="uq-header__nav-secondary">
        <nav class="uq-header__nav-secondary-container">
        <ul class="uq-header__nav-secondary-list">
            <li class="uq-header__nav-secondary-item" data-gtm-category="Secondary header">
              <a class="uq-header__nav-secondary-link gtm-processed" href="https://www.uq.edu.au/">UQ home</a>
            </li>
            ${secondaryLinks
              .map(
                (link) => `
            <li class="uq-header__nav-secondary-item" data-gtm-category="Secondary header">
                <a href="${link.href}" class="uq-header__nav-secondary-link" data-gtm-label="${link.title}">${link.title}</a>
            </li>
            `,
              )
              .join("")}
        </ul>
        </nav>
    </div>
</header>
`;

// --- Play Function Logic (Kept separate for re-use) ---

const headerPlayFunction = ({ canvasElement }) => {
  const headerElem = canvasElement.querySelector(".uq-header");
  if (headerElem) new header(headerElem);

  const menuLeftElem = headerElem.querySelector("#global-mobile-nav");
  // Assuming SlideMenu is imported or available globally from "./slide-menu.js"
  const menuLeft = new SlideMenu(menuLeftElem, {
    position: "left",
    submenuLinkAfter: " ",
    backLinkBefore: " ",
  });

  const searchToggle = headerElem.querySelector(".nav-primary__search-toggle");
  searchToggle.addEventListener("click", () => {
    menuLeft.close();
  });

  var slideMenuBackButtons = headerElem.querySelectorAll(
    ".slide-menu__backlink, .global-mobile-nav__audience-link",
  );
  //this resets the scroll position of the menu when navigating back or to audience links.
  // Is it replaced by new code in slide-menu.js `this.menuElem.scrollTop = 0;`
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
      const mainNavToggle = headerElem.querySelector(".nav-primary__toggle");
      mainNavToggle.classList.remove("nav-primary__menu-toggle--is-open");
      const body = document.querySelector("body");
      body.classList.remove("no-scroll");
    }
  });
};

// -------------------------------------------------------------
// CSF 3.0 Stories: Exported Objects

export const Default = {
  // The 'render' property replaces the Template.bind({}); pattern
  render: headerRenderer,

  // The 'args' property replaces Default.args = { ... }
  args: {
    showGlobalHeader: true,
    showLocalMobile: true,
    siteDomain: "https://uq.edu.au",
    siteName: "Your Site Name",
    localLinks: localLinks, // Use imported data
    primaryLinks: primaryLinks, // Use imported data
    secondaryLinks: secondaryLinks, // Use imported data
  },

  // The 'play' property replaces Default.play = ...
  play: headerPlayFunction,
};

// Create a variation of the story without the mega menu
export const WithoutMegaMenu = {
  // Re-use the same renderer function
  render: headerRenderer,

  // Inherit args from the default story and override the necessary one
  args: {
    ...Default.args,
    showGlobalHeader: false,
  },

  // Re-use the same play function
  play: headerPlayFunction,
};

export const basicHeader = {
  render: () => {
    return `
    <header class="uq-header" data-gtm-category="Header">
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
