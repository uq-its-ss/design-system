/**
 * Type definitions for Header navigation data structures
 */

export interface MenuLink {
  title: string;
  href: string;
  children?: MenuLink[];
  columns?: MenuColumn[];
}

export interface MenuColumn {
  groups: MenuGroup[];
}

export interface MenuGroup {
  heading: string;
  children: MenuLink[];
}

export interface HeaderProps {
  /** Search scope domain. Defaults to "https://uq.edu.au" */
  siteDomain?: string;

  /** Optional site-specific local navigation links */
  localLinks?: MenuLink[];

  /** Optional callback to determine if a link is active */
  isLinkActive?: (href: string) => boolean;

  /** Optional callback when mobile menu is toggled */
  onMenuToggle?: (isOpen: boolean) => void;

  /** Optional callback when search is toggled */
  onSearchToggle?: (isOpen: boolean) => void;
}
