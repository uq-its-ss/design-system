/**
 * @file header.stories.js
 * Storybook configuration for the UQ Header component.
 * Purpose: Simulates the Header's HTML generation and JS initialization.
 */

// import styles
import "./header.scss";

// import scripts
import {
  localLinksExample,
  primaryLinks,
  secondaryLinks,
} from "@uqds/header/src/js/menuData"; // Import the menu data
import { HeaderDecorator } from "./headingDecorator";

// Helper to extract all leaf hrefs from localLinks
function extractLeafHrefs(links) {
  let hrefs = [];
  if (!Array.isArray(links)) return hrefs;
  for (const link of links) {
    if (link.columns) {
      for (const column of link.columns) {
        for (const group of column.groups) {
          hrefs = hrefs.concat(extractLeafHrefs(group.children));
        }
      }
    } else if (link.children) {
      hrefs = hrefs.concat(extractLeafHrefs(link.children));
    } else if (link.href) {
      hrefs.push(link.href);
    }
  }
  return hrefs;
}

// Build options for the dropdown (include siteDomain as first option)
const activeHrefOptions = [
  "https://uq.edu.au",
  ...extractLeafHrefs(localLinksExample),
];

/**
 * HELPER: Mega Menu Renderer (Desktop)
 * Renders the multi-column dropdowns seen on large screens.
 * Structure: Column -> Group Heading -> List Items.
 */
const renderMegaMenu = (columns, parentTitle) => {
  return columns
    .map(
      (column) => `
    <div class="uq-header__megamenu-column">
      ${column.groups
        .map(
          (group) => `
        <h3 class="uq-header__megamenu-heading">${group.heading}</h3>
        <div class="uq-header__megamenu-menu">
          <ul class="uq-header__megamenu-list">
            ${group.children
              .map(
                (child) => `
              <li class="uq-header__megamenu-item" data-gtm-category="Main navigation"><a class="uq-header__megamenu-link" href="${child.href}" data-gtm-label="${parentTitle} > ${child.title}">${child.title}</a></li>
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

/**
 * HELPER: Recursive Nested Link Renderer (Mobile)
 * It handles the deep hierarchy of the mobile slide-out menu.
 */
const renderNestedLinks = (children, activeHref, parentPath = "") => {
  if (!children || children.length === 0) {
    return "";
  }

  return children
    .map((child) => {
      const hasGrandchildren = child.children && child.children.length > 0;
      // Only leaf links (no grandchildren) can be active
      const isActive = !hasGrandchildren && child.href === activeHref;
      const currentPath = parentPath
        ? `${parentPath} > ${child.title}`
        : child.title;
      let linkContent = `
        <li class="uq-header__nav-mobile-item" data-gtm-category="Main navigation">
          <a href="${child.href}" class="${hasGrandchildren ? "uq-header__nav-mobile-audience-link slide-menu__control" : `uq-header__nav-mobile-link${isActive ? " is-active" : ""}`}"${hasGrandchildren ? "" : ` data-gtm-label="${currentPath}"`}>${child.title}</a>
          ${
            hasGrandchildren
              ? `
            <ul class="uq-header__nav-mobile-list">
              <li class="uq-header__nav-mobile-item">
                <a class="uq-header__nav-mobile-audience-link" href="${child.href}" data-gtm-label="${currentPath}">${child.title}</a>
              </li>
              ${renderNestedLinks(child.children, activeHref, currentPath)}
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

/**
 * HELPER: Mobile Navigation Root
 * Entry point for building the mobile menu structure.
 */
const renderMobileNav = (links, activeHref) => {
  return links
    .map((link) => {
      const hasColumns = !!link.columns;
      // Only leaf links (no columns) can be active
      const isActive = !hasColumns && link.href === activeHref;
      return `
      <li class="uq-header__nav-mobile-item" data-gtm-category="Main navigation">
        <a href="${link.href}" class="${hasColumns ? "uq-header__nav-mobile-audience-link slide-menu__control" : `uq-header__nav-mobile-link${isActive ? " is-active" : ""}`}"${hasColumns ? "" : ` data-gtm-label="${link.title}"`}>${link.title}</a>
        ${
          hasColumns
            ? `
          <ul class="uq-header__nav-mobile-list">
            <li class="uq-header__nav-mobile-item">
              <a class="uq-header__nav-mobile-link" href="${link.href}" data-gtm-label="${link.title}">${link.title}</a>
            </li>
            ${link.columns // Iterate over columns
              .map((column) =>
                column.groups
                  .map((group) =>
                    renderNestedLinks(group.children, activeHref, link.title),
                  )
                  .join(""),
              )
              .join("")}
          </ul>
          `
            : ""
        }
      </li>
    `;
    })
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
  // Decorators wrap stories with additional JS initialization or context providers
  decorators: [HeaderDecorator],
  // ArgTypes define the controls for your component's properties (args)
  argTypes: {
    siteDomain: {
      name: "Site Domain",
      control: "text",
      description: "Sets the SEARCH input scope (as_sitesearch parameter).",
      table: {
        category: "Demo Controls",
      },
    },
    activeHref: {
      name: "Active Link (mobile)",
      control: { type: "select" },
      options: activeHrefOptions,
      description:
        "The href of the NAVIGATION LOCAL (Mobile) link to highlight as active (leaf links only).",
      table: {
        category: "Demo Controls",
      },
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
        disable: true,
      },
    },
    primaryLinks: {
      name: "Primary Navigation Links",
      control: "object",
      description:
        "JSON object for the main navigation items and their mega menu structure.",
      table: {
        category: "navigation Links",
        disable: true,
      },
    },
    secondaryLinks: {
      name: "Secondary Navigation Links",
      control: "object",
      description: "JSON object for the secondary header links.",
      table: {
        category: "navigation Links",
        disable: true,
      },
    },
  },

  globals: {
    backgrounds: {
      value: "uq_neutral_1",
    },
  },
};

/**
 * RENDERER: Main Header Template
 * This function generates the final HTML string.
 */
const headerRenderer = ({
  siteDomain,
  showGlobalHeader,
  showLocalMobile,
  localLinks,
  primaryLinks,
  secondaryLinks,
  activeHref,
}) => `
<!-- HEADER WRAPPER -->
<header class="uq-header" data-gtm-category="Header">
  <div class="uq-header__container">

    <!-- TOGGLE MENU (Mobile) -->
    <div class="uq-header__toggle-menu" data-target="global-mobile-nav" data-gtm-category="Primary header">
      <button type="button" class="uq-header__toggle-menu-button slide-menu__control" data-target="global-mobile-nav" data-arg=".is-active" data-action="smartToggle" data-gtm-trigger="click" data-gtm-action="Toggle">Menu</button>

        <!-- NAVIGATION (Mobile) (Slide menu) -->
        <!-- "uq-header__nav-mobile-local" class is added if showing local site menu -->
        <nav class="slide-menu uq-header__nav-mobile ${showLocalMobile ? "uq-header__nav-mobile-local" : ""}" id="global-mobile-nav" aria-label="primary navigation mobile">
          <ul class="uq-header__nav-mobile-list">

              <!-- SCENARIO A: NAVIGATION LOCAL (Mobile) --> 
          ${
            showLocalMobile
              ? `
              <li class="uq-header__nav-mobile-item">
                <a class="uq-header__nav-mobile-home" href="https://uq.edu.au">UQ home</a>
              </li>
              <!-- Hook for the recursive menu file above -->
              ${renderMobileNav(localLinks, activeHref)}
              `
              : ""
          }
          
              <!-- SCENARIO B: NAVIGATION PRIMARY (mobile) (e.g., Homepage or Fallback) -->
          ${
            !showLocalMobile
              ? `
              <li class="uq-header__nav-mobile-item" data-gtm-category="Secondary header">
                <a class="uq-header__nav-mobile-primary" href="https://uq.edu.au">UQ home <span class="slide-menu__decorator"> </span></a>
              </li>

                  <!-- NAVIGATION PRIMARY (Mobile) -->
              ${primaryLinks
                .map(
                  (link) => `
                  <li class="uq-header__nav-mobile-item" data-gtm-category="Primary header">
                      <a class="uq-header__nav-mobile-primary" href="${link.href}">${link.title} <span class="slide-menu__decorator"> </span></a>
                  </li>`,
                )
                .join("")}

                  <!-- NAVIGATION SECONDARY (Mobile) -->
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
    </div>

    <!-- LOGO -->
    <div class="uq-header__logo" data-gtm-category="Primary header"><a class="uq-header__logo-link" href="https://uq.edu.au" data-gtm-label="UQ Logo"><img class="uq-header__logo-image" alt="The University of Queensland" src="https://static.uq.net.au/v11/logos/corporate/uq-logo--reversed.svg"></a></div>

   <!-- NAVIGATION PRIMARY (Desktop) -->
    <nav class="uq-header__nav-primary" aria-label="primary navigation" data-gtm-category="Primary header">
      <ul class="uq-header__nav-primary-list">
        ${primaryLinks
          .map(
            (link) => `
          <!-- NAVIGATION PRIMARY ITEM (Desktop) -->
          <li class="uq-header__nav-primary-item">
            <a class="uq-header__nav-primary-link ${showGlobalHeader ? "uq-header__nav-primary--has-dropdown" : ""}" href="${link.href}" data-gtm-label="${link.title}" ${showGlobalHeader ? `id="${link.title.toLowerCase().replace(/\s+/g, "-")}-menu-button" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="${link.title.toLowerCase().replace(/\s+/g, "-")}-megamenu"` : ""}>${link.title}</a>
            ${
              showGlobalHeader
                ? `
              <!-- MEGA MENU (Desktop) -->
              <div id="${link.title.toLowerCase().replace(/\s+/g, "-")}-megamenu" class="uq-header__megamenu">
                <div class="uq-header__megamenu-container">
                  <h2 class="uq-header__megamenu-overview-label"><a href="${link.href}" class="uq-header__megamenu-link" data-gtm-label="${link.title} > ${link.title}">${link.title}</a></h2>
                    ${renderMegaMenu(link.columns, link.title)}
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

    <!-- TOGGLE SEARCH -->
    <div class="uq-header__toggle-search" data-gtm-category="Search">
      <button class="uq-header__toggle-search-button" data-gtm-action="Toggle" aria-label="Search">
        <div class="uq-header__toggle-search-label">Search</div>
      </button>
          <!-- SEARCH FORM -->
          <div class="uq-header__search" data-gtm-category="Search">
            <div class="uq-header__search-container">
              <form class="uq-header__search-form" action="https://search.uq.edu.au/" method="get" data-gtm-action="Text search" data-gtm-form-action="">
                <fieldset class="uq-header__search-fieldset">
                    <label class="uq-header__search-label" for="edit-q">Search term</label>
                    <input class="uq-header__search-input" type="text" id="edit-q" name="q" value="" maxlength="128" placeholder="Search by keyword" autocomplete="off" data-gtm-form-search="">
                    <input type="hidden" value="${siteDomain}" name="as_sitesearch" id="edit-as_sitesearch-on"> 
                    <button class="uq-header__search-button" type="submit" name="op" value="Search" data-gtm-trigger="click"><span class="uq-header__search-button-label">Search</span></button>          
                </fieldset>
              </form>
            </div>
          </div>
    </div>

  </div>

    <!-- NAVIGATION SECONDARY (Desktop) -->
    <div class="uq-header__nav-secondary">
        <nav class="uq-header__nav-secondary-container">
        <ul class="uq-header__nav-secondary-list">
            <li class="uq-header__nav-secondary-item" data-gtm-category="Secondary header">
              <a class="uq-header__nav-secondary-link" href="https://www.uq.edu.au">UQ home</a>
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

// -------------------------------------------------------------
// CSF 3.0 Stories: Exported Objects

export const Default = {
  render: headerRenderer,
  args: {
    showGlobalHeader: true,
    showLocalMobile: true,
    siteDomain: "https://uq.edu.au",
    localLinks: localLinksExample,
    primaryLinks: primaryLinks,
    secondaryLinks: secondaryLinks,
    activeHref: "https://uq.edu.au", // Default active link
  },
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
};

export const basicHeader = {
  render: () => {
    return `
    <header id="uq-header" class="uq-header" data-gtm-category="Header">
      <div class="uq-header__container">
        <div class="uq-header__logo" data-gtm-category="Primary header">
          <a class="uq-header__logo-link" href="https://uq.edu.au" data-gtm-label="UQ Logo">
            <img class="uq-header__logo-image" alt="The University of Queensland" src="https://static.uq.net.au/v15/logos/corporate/uq-logo--reversed.svg">
          </a>
        </div>        
      </div>
    </header>
    `;
  },

  name: "Header simplified",
};
