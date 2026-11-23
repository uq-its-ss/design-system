/**
 * @file footerDecorator.js
 * Shared initialization logic for footer JavaScript functionality.
 * This can be used in footer.stories.js and any template stories
 * that embed the footer component.
 */

import { initJs } from "../../../lib/initJs";
import { accordion } from "@uqds/accordion/src/js/main";

/**
 * initializeFooter
 * Initializes the footer component with all interactive features:
 * - Accordion for footer navigation sections
 *
 * @param {HTMLElement} component - The component containing the footer
 */
export const initializeFooter = (component) => {
  if (!component) return;

  // Initialize accordion (used in footer navigation)
  new accordion();
};

/**
 * FooterDecorator
 * A convenience decorator that wraps initializeFooter with initJs.
 * Use this when the footer is the only component needing initialization.
 */
export const FooterDecorator = (storyFn) => initJs(storyFn, initializeFooter);
