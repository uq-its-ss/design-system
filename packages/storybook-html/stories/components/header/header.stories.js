// import styles
import "./header.scss";

// import scripts
import "./slide-menu.js";
import { primaryLinks, secondaryLinks } from "./menuData.js"; // Import the menu data
import { header } from "@uqds/header/src/js/main"; // Import 'header' for UQ header JS functionality
import { initJs } from "../../../lib/initJs";

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

// Helper function to render the mobile navigation structure
const renderMobileNav = (columns, parentTitle) => {
  return columns
    .map((column) =>
      column.groups
        .map(
          (group) => `
      <li>
        <a href="#" class="global-mobile-nav__audience-link slide-menu__control">${group.heading}</a>
        <ul>
          ${group.children
            .map(
              (child) => `
            <li><a href="${child.href}" data-gtm-label="${parentTitle} > ${child.title}">${child.title}</a></li>
          `,
            )
            .join("")}
        </ul>
      </li>
    `,
        )
        .join(""),
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
  primaryLinks,
  secondaryLinks,
}) => `
<header class="uq-header" data-gtm-category="Header">
  <div class="uq-header__container">
    <div class="uq-header__menu-toggle" data-target="global-mobile-nav" data-gtm-category="Primary header">
      <button type="button" class="nav-primary__toggle nav-primary__menu-toggle slide-menu__control" data-target="global-mobile-nav" data-action="toggle" data-gtm-action="Toggle">Menu</button>
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

  <nav class="slide-menu global-mobile-nav" id="global-mobile-nav" aria-label="primary navigation mobile">
    ${
      !showGlobalHeader
        ? `
      <div class="uq-site-header__title-container">
        <div class="uq-site-header__title-container__left">
            <a href="/" class="uq-site-header__title">${siteName}</a>
        </div>
      </div>`
        : ""
    }
    <ul>
    ${
      !showGlobalHeader
        ? `
              <li data-gtm-category="Main navigation">
        <a class="global-mobile-nav__audience-link slide-menu__control" href="#">Study</a>
        <ul>
          <li>
            <a href="/study/programs">Find a program</a>
          </li>
          <li>
            <a href="/study/agriculture-environment">Agriculture and Environment</a>
          </li>
          <li>
            <a href="/study/architecture-planning">Architecture and Planning</a>
          </li>
          <li>
            <a href="/study/arts-humanities-social-sciences">Arts, Humanities and Social Sciences</a>
          </li>
          <li>
            <a href="/study/business-economics">Business and Economics</a>
          </li>
          <li>
            <a href="/study/education">Education</a>
          </li>
          <li>
            <a href="/study/engineering-computing">Engineering and Computing</a>
          </li>
          <li>
            <a href="/study/health-behavioural-sciences">Health and Behavioural Sciences</a>
          </li>
          <li>
            <a href="/study/law">Law</a>
          </li>
          <li>
            <a href="/study/medicine">Medicine</a>
          </li>
          <li>
            <a href="/study/science-mathematics">Science and Mathematics</a>
          </li>
          <li>
            <a href="/study/micromasters-uqx">MicroMasters and UQx</a>
          </li>
        </ul>
      </li>
      <li data-gtm-category="Main navigation">
        <a class="global-mobile-nav__audience-link slide-menu__control" href="/admissions" aria-haspopup="true" aria-expanded="false">Admissions</a>
        <ul>
          <li>
            <a href="/admissions/undergraduate">Undergraduate</a>
          </li>
          <li>
            <a href="/admissions/honours">Honours</a>
          </li>
          <li>
            <a href="/admissions/postgraduate-coursework">Postgraduate coursework</a>
          </li>
          <li>
            <a href="/admissions/higher-degree-research">Higher degree by research</a>
          </li>
          <li>
            <a href="/admissions/cross-institutional-study">Cross-institutional study</a>
          </li>
          <li>
            <a href="/admissions/non-award-study">Non-award study</a>
          </li>
          <li>
            <a href="/admissions/doctor-medicine">Doctor of Medicine</a>
          </li>
          <li>
            <a href="https://uq.edu.au/studyabroad/how-to-apply">Study abroad and incoming exchange</a>
          </li>
        </ul>
      </li>
      <li data-gtm-category="Main navigation">
        <a class="global-mobile-nav__audience-link slide-menu__control" href="/university-life" aria-haspopup="true" aria-expanded="false">University life</a>
        <ul>
          <li>
            <a href="/university-life/living-in-brisbane">Living in Brisbane</a>
          </li>
          <li>
            <a href="/university-life/getting-prepared-to-come-to-australia">Getting prepared to come to Australia</a>
          </li>
          <li>
            <a href="/university-life/campuses-research-sites">Campuses and research sites</a>
          </li>
          <li>
            <a href="/university-life/campus-tours">Campus tours</a>
          </li>
        </ul>
      </li>
      <li data-gtm-category="Main navigation">
        <a href="/events">Events</a>
      </li>
      <li data-gtm-category="Main navigation">
        <a href="/stories">Stories</a>
      </li>
      <li data-gtm-category="Main navigation">
        <a href="/contact-us">Contact</a>
      </li>
        `
        : ""
    }
    ${primaryLinks
      .map(
        (link) => `
        <li class="uq-header__newglobal-nav-item" data-gtm-category="Primary header">
            <a class="uq-header__newglobal-nav-link ${showGlobalHeader ? `slide-menu__control` : ""}" href="${link.href}">${link.title}</a>
            ${
              showGlobalHeader
                ? `    
            <ul>
                <li>
                <a href="${link.href}" data-gtm-label="${link.title} > ${link.title} overview">${link.title} overview</a>
                </li>
                ${renderMobileNav(link.columns, link.title)}
            </ul>
            `
                : ""
            }
        </li>`,
      )
      .join("")}

    ${secondaryLinks
      .map(
        (link) => `
        <li class="uq-header__nav-secondary-item" data-gtm-category="Secondary header">
            <a class="uq-header__nav-secondary-link" href="${link.href}">${link.title}</a>
        </li>
    `,
      )
      .join("")}
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
  // The 'render' property replaces the Template.bind({}); pattern
  render: headerRenderer,

  // The 'args' property replaces Default.args = { ... }
  args: {
    showGlobalHeader: true,
    siteDomain: "https://uq.edu.au",
    siteName: "Your Site Name",
    primaryLinks: primaryLinks, // Use imported data
    secondaryLinks: secondaryLinks, // Use imported data
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
