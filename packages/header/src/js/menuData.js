/**
 * @file menuData.js
 * Navigation menu data for the UQ Header component.
 * This module imports navigation data from JSON files and re-exports them.
 *
 * Data Sources:
 * - local-links.json: Local site navigation structure
 * - primary-links.json: Primary navigation links (Study, Research, etc.)
 * - secondary-links.json: Secondary header links (News, Events, etc.)
 */

import localLinksData from "./local-links.json";
import primaryLinksData from "./primary-links.json";
import secondaryLinksData from "./secondary-links.json";

// Re-export as named exports for backward compatibility
export const localLinks = localLinksData;
export const primaryLinks = primaryLinksData;
export const secondaryLinks = secondaryLinksData;
