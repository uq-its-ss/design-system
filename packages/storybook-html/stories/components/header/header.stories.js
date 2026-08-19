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

// Helper to extract all hrefs from localLinks (both leaf and parent links)
function extractLeafHrefs(links) {
  let hrefs = [];
  if (!Array.isArray(links)) return hrefs;
  
  for (const link of links) {
    // Always add the link's href if it exists (both parent and leaf links)
    if (link.href) {
      hrefs.push(link.href);
    }
    
    // Handle mega menu structure (columns -> groups -> children)
    if (link.columns && Array.isArray(link.columns)) {
      for (const column of link.columns) {
        if (column.groups && Array.isArray(column.groups)) {
          for (const group of column.groups) {
            if (group.children && Array.isArray(group.children)) {
              hrefs = hrefs.concat(extractLeafHrefs(group.children));
            }
          }
        }
      }
    }
    
    // Handle direct children (nested navigation)
    if (link.children && Array.isArray(link.children)) {
      hrefs = hrefs.concat(extractLeafHrefs(link.children));
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
              <li class="uq-header__megamenu-item"><a class="uq-header__megamenu-link" href="${child.href}" data-gtm-path="${parentTitle} > ${group.heading}">${child.title}</a></li>
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
const renderNestedLinks = (
  children,
  activeHref,
  orphanParentHref = null,
  parentPath = "",
) => {
  if (!children || children.length === 0) {
    return "";
  }

  // Check if we're in orphan mode
  const isOrphanMode = activeHref && activeHref.includes("(Orphan Example)");

  return children
    .map((child) => {
      const hasGrandchildren = child.children && child.children.length > 0;
      // Only leaf links (no grandchildren) can be active
      const isActive =
        !isOrphanMode && !hasGrandchildren && child.href === activeHref;
      // In orphan mode, check if this is the designated parent
      const isOrphanParent =
        isOrphanMode && orphanParentHref && child.href === orphanParentHref;
      const currentPath = parentPath
        ? `${parentPath} > ${child.title}`
        : child.title;

      // Build class list
      let classes = hasGrandchildren
        ? "uq-header__nav-mobile-audience-link slide-menu__control"
        : "uq-header__nav-mobile-link";

      // Add both classes to active items (CMS pattern)
      if (isActive) {
        classes += " in-active-trail is-active";
      }
      // In orphan mode, parent gets only .in-active-trail (no visual styling)
      if (isOrphanParent) {
        classes += " in-active-trail";
      }

      let linkContent = `
        <li class="uq-header__nav-mobile-item">
          <a href="${child.href}" class="${classes}"${hasGrandchildren ? "" : ` data-gtm-path="${parentPath}"`}>${child.title}</a>
          ${
            hasGrandchildren
              ? `
            <ul class="uq-header__nav-mobile-list">
              <li class="uq-header__nav-mobile-item">
                <a class="uq-header__nav-mobile-audience-link${isOrphanParent ? " in-active-trail" : ""}" href="${child.href}" data-gtm-path="${parentPath}">${child.title}</a>
              </li>
              ${renderNestedLinks(child.children, activeHref, orphanParentHref, currentPath)}
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
const renderMobileNav = (links, activeHref, orphanParentHref = null) => {
  // Check if we're in orphan mode
  const isOrphanMode = activeHref && activeHref.includes("(Orphan Example)");

  return links
    .map((link) => {
      const hasColumns = !!link.columns;
      // Only leaf links (no columns) can be active
      const isActive = !isOrphanMode && !hasColumns && link.href === activeHref;
      // In orphan mode, check if this is the designated parent
      const isOrphanParent =
        isOrphanMode && orphanParentHref && link.href === orphanParentHref;

      // Build class list
      let classes = hasColumns
        ? "uq-header__nav-mobile-audience-link slide-menu__control"
        : "uq-header__nav-mobile-link";

      // Add both classes to active items (CMS pattern)
      if (isActive) {
        classes += " in-active-trail is-active";
      }
      // In orphan mode, parent gets only .in-active-trail (no visual styling)
      if (isOrphanParent) {
        classes += " in-active-trail";
      }

      return `
      <li class="uq-header__nav-mobile-item">
        <a href="${link.href}" class="${classes}"${hasColumns ? "" : ` data-gtm-path=""`}>${link.title}</a>
        ${
          hasColumns
            ? `
          <ul class="uq-header__nav-mobile-list">
            <li class="uq-header__nav-mobile-item">
              <a class="uq-header__nav-mobile-link${isOrphanParent ? " in-active-trail" : ""}" href="${link.href}" data-gtm-path="${link.title}">${link.title}</a>
            </li>
            ${link.columns // Iterate over columns
              .map((column) =>
                column.groups
                  .map((group) =>
                    renderNestedLinks(
                      group.children,
                      activeHref,
                      orphanParentHref,
                      link.title,
                    ),
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
    siteName: {
      name: "Site Name",
      control: "text",
      description:
        "The title displayed for the current site link in NAVIGATION LOCAL (Mobile).",
      table: {
        category: "Demo Controls",
      },
    },
    siteDomain: {
      name: "Site Domain",
      control: "text",
      description:
        "The href for current site link in NAVIGATION LOCAL (Mobile) and sets the SEARCH input scope.",
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
    showOrphanExample: {
      name: "Show Orphan Link Pattern",
      control: "boolean",
      description:
        "Demonstrates orphan page behavior where current page is not in menu. Parent gets .in-active-trail (no styling), no link gets .is-active.",
      table: {
        category: "Demo Controls",
      },
    },
    orphanParentHref: {
      name: "Orphan Parent Link",
      control: { type: "select" },
      options: extractLeafHrefs(localLinksExample),
      description:
        "When orphan example is enabled, this link receives .in-active-trail class (menu auto-opens here).",
      table: {
        category: "Demo Controls",
      },
      if: { arg: "showOrphanExample", eq: true },
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
  siteName,
  siteDomain,
  showGlobalHeader,
  showLocalMobile,
  localLinks,
  primaryLinks,
  secondaryLinks,
  activeHref,
  showOrphanExample,
  orphanParentHref,
}) => {
  // Determine active href - use orphan example text if enabled
  const displayActiveHref = showOrphanExample
    ? `${orphanParentHref} (Orphan Example)`
    : activeHref;

  return `
<!-- HEADER WRAPPER -->
<header class="uq-header">
  <div class="uq-header__container">

    <!-- TOGGLE MENU (Mobile) -->
    <div class="uq-header__toggle-menu" data-target="global-mobile-nav">
      <button type="button" class="uq-header__toggle-menu-button slide-menu__control" data-target="global-mobile-nav" data-arg=".in-active-trail" data-action="smartToggle">Menu</button>

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
              <li class="uq-header__nav-mobile-item">
                  <a class="uq-header__nav-mobile-link${siteDomain === displayActiveHref && !showOrphanExample ? " in-active-trail is-active" : ""}" href="${siteDomain}">${siteName}</a>
              </li>
              <!-- Hook for the recursive menu file above -->
              ${renderMobileNav(localLinks, displayActiveHref, showOrphanExample ? orphanParentHref : null)}
              `
              : ""
          }
          
              <!-- SCENARIO B: NAVIGATION PRIMARY (mobile) (e.g., Homepage or Fallback) -->
          ${
            !showLocalMobile
              ? `
              <li class="uq-header__nav-mobile-item">
                <a class="uq-header__nav-mobile-primary" href="https://uq.edu.au">UQ home <span class="slide-menu__decorator"> </span></a>
              </li>

                  <!-- NAVIGATION PRIMARY (Mobile) -->
              ${primaryLinks
                .map(
                  (link) => `
                  <li class="uq-header__nav-mobile-item">
                      <a class="uq-header__nav-mobile-primary" href="${link.href}">${link.title} <span class="slide-menu__decorator"> </span></a>
                  </li>`,
                )
                .join("")}

                  <!-- NAVIGATION SECONDARY (Mobile) -->
              ${secondaryLinks
                .map(
                  (link) => `
                  <li class="uq-header__nav-mobile-secondary-item">
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
    <div class="uq-header__logo"><a class="uq-header__logo-link" href="https://uq.edu.au"><img class="uq-header__logo-image" alt="The University of Queensland" src="https://static.uq.net.au/v11/logos/corporate/uq-logo--reversed.svg"></a></div>

   <!-- NAVIGATION PRIMARY (Desktop) -->
    <nav class="uq-header__nav-primary" aria-label="primary navigation">
      <ul class="uq-header__nav-primary-list">
        ${primaryLinks
          .map(
            (link) => `
          <!-- NAVIGATION PRIMARY ITEM (Desktop) -->
          <li class="uq-header__nav-primary-item">
            ${showGlobalHeader ? `<button class="uq-header__nav-primary-link uq-header__nav-primary--has-dropdown" id="${link.title.toLowerCase().replace(/\s+/g, "-")}-menu-button" aria-haspopup="true" aria-expanded="false" aria-controls="${link.title.toLowerCase().replace(/\s+/g, "-")}-megamenu">${link.title}</button>` : `<a class="uq-header__nav-primary-link" href="${link.href}">${link.title}</a>`}
            ${
              showGlobalHeader
                ? `
              <!-- MEGA MENU (Desktop) -->
              <div id="${link.title.toLowerCase().replace(/\s+/g, "-")}-megamenu" class="uq-header__megamenu">
                <div class="uq-header__megamenu-container">
                  <h2 class="uq-header__megamenu-overview-label"><a href="${link.href}" class="uq-header__megamenu-link" data-gtm-path="${link.title}">${link.title}</a></h2>
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
    <div class="uq-header__toggle-search">
      <button class="uq-header__toggle-search-button" aria-label="Search">
        <div class="uq-header__toggle-search-label">Search</div>
      </button>
          <!-- SEARCH FORM -->
          <div class="uq-header__search">
            <div class="uq-header__search-container">
              <form class="uq-header__search-form" action="https://search.uq.edu.au/" method="get">
                <fieldset class="uq-header__search-fieldset">
                    <label class="uq-header__search-label" for="edit-q">Search term</label>
                    <input class="uq-header__search-input" type="text" id="edit-q" name="q" value="" maxlength="128" placeholder="Search by keyword" autocomplete="off">
                    <input type="hidden" value="${siteDomain}" name="as_sitesearch" id="edit-as_sitesearch-on"> 
                    <button class="uq-header__search-button" type="submit" name="op" value="Search"><span class="uq-header__search-button-label">Search</span></button>          
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
            <li class="uq-header__nav-secondary-item">
              <a class="uq-header__nav-secondary-link" href="https://www.uq.edu.au">UQ home</a>
            </li>
            ${secondaryLinks
              .map(
                (link) => `
            <li class="uq-header__nav-secondary-item">
                <a href="${link.href}" class="uq-header__nav-secondary-link">${link.title}</a>
            </li>
            `,
              )
              .join("")}
        </ul>
        </nav>
    </div>
</header>
`;
};

// -------------------------------------------------------------
// CSF 3.0 Stories: Exported Objects

export const Default = {
  render: headerRenderer,
  args: {
    showGlobalHeader: true,
    showLocalMobile: true,
    siteDomain: "https://uq.edu.au",
    siteName: "Your Site Name",
    localLinks: localLinksExample,
    primaryLinks: primaryLinks,
    secondaryLinks: secondaryLinks,
    activeHref: "https://uq.edu.au", // Default active link
    showOrphanExample: false,
    orphanParentHref: extractLeafHrefs(localLinksExample)[0],
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
    <header id="uq-header" class="uq-header">
      <div class="uq-header__container">
        <div class="uq-header__logo">
          <a class="uq-header__logo-link" href="https://uq.edu.au">
            <img class="uq-header__logo-image" alt="The University of Queensland" src="https://static.uq.net.au/v15/logos/corporate/uq-logo--reversed.svg">
          </a>
        </div>        
      </div>
    </header>
    `;
  },

  name: "Header simplified",
};
