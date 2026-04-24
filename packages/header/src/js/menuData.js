/**
 * @file menuData.js
 * Navigation menu data API for the UQ Header component.
 *
 * This module provides UQ organizational navigation defaults that are consumed by:
 * - **Drupal**: Twig templates import and render navigation structure
 * - **React**: Components import for JSX rendering (future implementation)
 * - **Storybook**: Stories import to generate example HTML
 * - **Integration tests**: Test suites use for realistic navigation data
 *
 * Data Sources:
 * - `primary-links.json`: UQ primary navigation (Study, Research, Partners, About)
 * - `secondary-links.json`: UQ secondary navigation (News, Events, Give, Contact)
 * - `local-links.example.json`: Example structure for site-specific local navigation
 *
 * @example
 * // Import in React component
 * import { primaryLinks, secondaryLinks } from '@uqds/header/src/js/menuData';
 *
 * function HeaderNav() {
 *   return <nav>{primaryLinks.map(link => <MegaMenu key={link.title} data={link} />)}</nav>;
 * }
 *
 * @example
 * // Import in Drupal Twig preprocessor
 * const { primaryLinks, secondaryLinks } = require('@uqds/header/src/js/menuData');
 * // Sites provide their own localLinks data
 *
 * @example
 * // Import in Storybook story
 * import { primaryLinks, secondaryLinks, localLinksExample } from '@uqds/header/src/js/menuData';
 */

import primaryLinksData from "./data/primary-links.json";
import secondaryLinksData from "./data/secondary-links.json";
import localLinksExampleData from "./data/local-links.example.json";

/**
 * UQ organizational primary navigation defaults.
 * Contains mega menu structure for Study, Research, Partners, and About.
 * @type {Array<Object>}
 */
export const primaryLinks = primaryLinksData;

/**
 * UQ organizational secondary navigation defaults.
 * Contains simple links for News, Events, Give, and Contact.
 * @type {Array<Object>}
 */
export const secondaryLinks = secondaryLinksData;

/**
 * Example structure for site-specific local navigation.
 * This is a template/reference - sites should provide their own local navigation data.
 * @type {Array<Object>}
 */
export const localLinksExample = localLinksExampleData;
