import type { FC } from "react";
import classNames from "classnames";
import type { MenuLink } from "./types";
import styles from "./header.module.scss";

interface HeaderMobileMenuProps {
  showLocalNav: boolean;
  localLinks?: MenuLink[];
  primaryLinks: MenuLink[];
  secondaryLinks: MenuLink[];
  isLinkActive?: (href: string) => boolean;
}

/**
 * Recursively renders nested mobile navigation links
 */
const renderNestedLinks = (
  children: MenuLink[],
  isLinkActive?: (href: string) => boolean,
  parentPath = "",
): JSX.Element[] => {
  return children.map((child, index) => {
    const hasGrandchildren = child.children && child.children.length > 0;
    const isActive = !hasGrandchildren && isLinkActive?.(child.href);
    const currentPath = parentPath
      ? `${parentPath} > ${child.title}`
      : child.title;

    return (
      <li
        key={index}
        className={styles["uq-header__nav-mobile-item"]}
        data-gtm-category="Main navigation"
      >
        <a
          href={child.href}
          className={
            hasGrandchildren
              ? classNames(
                  styles["uq-header__nav-mobile-audience-link"],
                  "slide-menu__control",
                )
              : classNames(styles["uq-header__nav-mobile-link"], {
                  "is-active": isActive,
                })
          }
          {...(!hasGrandchildren && { "data-gtm-label": currentPath })}
        >
          {child.title}
        </a>
        {hasGrandchildren && (
          <ul className={styles["uq-header__nav-mobile-list"]}>
            <li className={styles["uq-header__nav-mobile-item"]}>
              <a
                className={styles["uq-header__nav-mobile-audience-link"]}
                href={child.href}
                data-gtm-label={currentPath}
              >
                {child.title}
              </a>
            </li>
            {renderNestedLinks(child.children!, isLinkActive, currentPath)}
          </ul>
        )}
      </li>
    );
  });
};

/**
 * Renders the mobile navigation root level
 */
const renderMobileNav = (
  links: MenuLink[],
  isLinkActive?: (href: string) => boolean,
): JSX.Element[] => {
  return links.map((link, index) => {
    const hasColumns = !!link.columns;
    const isActive = !hasColumns && isLinkActive?.(link.href);

    return (
      <li
        key={index}
        className={styles["uq-header__nav-mobile-item"]}
        data-gtm-category="Main navigation"
      >
        <a
          href={link.href}
          className={
            hasColumns
              ? classNames(
                  styles["uq-header__nav-mobile-audience-link"],
                  "slide-menu__control",
                )
              : classNames(styles["uq-header__nav-mobile-link"], {
                  "is-active": isActive,
                })
          }
          {...(!hasColumns && { "data-gtm-label": link.title })}
        >
          {link.title}
        </a>
        {hasColumns && (
          <ul className={styles["uq-header__nav-mobile-list"]}>
            <li className={styles["uq-header__nav-mobile-item"]}>
              <a
                className={styles["uq-header__nav-mobile-link"]}
                href={link.href}
                data-gtm-label={link.title}
              >
                {link.title}
              </a>
            </li>
            {link.columns!.map((column) =>
              column.groups.map((group) =>
                renderNestedLinks(group.children, isLinkActive, link.title).map(
                  (child) => <>{child}</>,
                ),
              ),
            )}
          </ul>
        )}
      </li>
    );
  });
};

/**
 * Mobile slide-out navigation menu
 */
export const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({
  showLocalNav,
  localLinks,
  primaryLinks,
  secondaryLinks,
  isLinkActive,
}) => {
  return (
    <nav
      className={classNames("slide-menu", styles["uq-header__nav-mobile"], {
        [styles["uq-header__nav-mobile-local"]]: showLocalNav,
      })}
      id="global-mobile-nav"
      aria-label="primary navigation mobile"
    >
      <ul className={styles["uq-header__nav-mobile-list"]}>
        {/* Scenario A: Local Navigation */}
        {showLocalNav && localLinks && (
          <>
            <li className={styles["uq-header__nav-mobile-item"]}>
              <a
                className={styles["uq-header__nav-mobile-home"]}
                href="https://uq.edu.au"
              >
                UQ home
              </a>
            </li>
            {renderMobileNav(localLinks, isLinkActive)}
          </>
        )}

        {/* Scenario B: Global Navigation */}
        {!showLocalNav && (
          <>
            <li
              className={styles["uq-header__nav-mobile-item"]}
              data-gtm-category="Secondary header"
            >
              <a
                className={styles["uq-header__nav-mobile-primary"]}
                href="https://uq.edu.au"
              >
                UQ home <span className="slide-menu__decorator"> </span>
              </a>
            </li>

            {/* Primary Links */}
            {primaryLinks.map((link, index) => (
              <li
                key={index}
                className={styles["uq-header__nav-mobile-item"]}
                data-gtm-category="Primary header"
              >
                <a
                  className={styles["uq-header__nav-mobile-primary"]}
                  href={link.href}
                >
                  {link.title} <span className="slide-menu__decorator"> </span>
                </a>
              </li>
            ))}

            {/* Secondary Links */}
            {secondaryLinks.map((link, index) => (
              <li
                key={index}
                className={styles["uq-header__nav-mobile-secondary-item"]}
                data-gtm-category="Secondary header"
              >
                <a
                  className={styles["uq-header__nav-mobile-secondary"]}
                  href={link.href}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
};
