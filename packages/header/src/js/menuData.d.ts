/**
 * Type definitions for menuData module
 */

export interface MenuLink {
  title: string;
  href: string;
  columns?: MenuColumn[];
  children?: MenuLink[];
}

export interface MenuColumn {
  groups: MenuGroup[];
}

export interface MenuGroup {
  heading: string;
  children: MenuLink[];
}

export const primaryLinks: MenuLink[];
export const secondaryLinks: MenuLink[];
export const localLinksExample: MenuLink[];
