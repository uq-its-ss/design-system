/**
 * @file headingDecorator.js
 * Simplified header initialization for Storybook stories.
 * All interactive logic now lives in the @uqds/header package modules.
 */

import { initJs } from "../../../lib/initJs";
import { header } from "@uqds/header/src/js/main";

/**
 * initializeHeader
 * Initializes the header component with all interactive features.
 * The Header class now manages all behavior through internal modules:
 * - MobileMenuModule: SlideMenu integration and mobile navigation
 * - SearchModule: Search toggle functionality
 * - MegaMenuModule: Desktop mega menus and accessibility
 * - ResponsiveModule: Responsive breakpoint behavior
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

  // Initialize the Header class - it handles everything else
  new header(headerElem);
};

/**
 * HeaderDecorator
 * A convenience decorator that wraps initializeHeader with initJs.
 * Use this when the header is the only component needing initialization.
 */
export const HeaderDecorator = (storyFn) => initJs(storyFn, initializeHeader);
