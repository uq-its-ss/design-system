import type { FC } from "react";
import type { MenuLink, MenuColumn } from "./types";
import styles from "./header.module.scss";

interface HeaderMegaMenuProps {
  primaryLinks: MenuLink[];
  showMegaMenu: boolean;
  openMegaMenuId: string | null;
  onMegaMenuToggle: (linkTitle: string) => void;
}

/**
 * Renders the mega menu multi-column dropdown structure
 */
const renderMegaMenu = (
  columns: MenuColumn[],
  parentTitle: string,
): JSX.Element => {
  return (
    <>
      {columns.map((column, colIndex) => (
        <div key={colIndex} className={styles["uq-header__megamenu-column"]}>
          {column.groups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className={styles["uq-header__megamenu-heading"]}>
                {group.heading}
              </h3>
              <div className={styles["uq-header__megamenu-menu"]}>
                <ul className={styles["uq-header__megamenu-list"]}>
                  {group.children.map((child, childIndex) => (
                    <li
                      key={childIndex}
                      className={styles["uq-header__megamenu-item"]}
                      data-gtm-category="Main navigation"
                    >
                      <a
                        className={styles["uq-header__megamenu-link"]}
                        href={child.href}
                        data-gtm-label={`${parentTitle} > ${child.title}`}
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

/**
 * Desktop mega menu navigation with multi-column dropdowns
 */
export const HeaderMegaMenu: FC<HeaderMegaMenuProps> = ({
  primaryLinks,
  showMegaMenu,
  openMegaMenuId,
  onMegaMenuToggle,
}) => {
  return (
    <nav
      className={styles["uq-header__nav-primary"]}
      aria-label="primary navigation"
      data-gtm-category="Primary header"
    >
      <ul className={styles["uq-header__nav-primary-list"]}>
        {primaryLinks.map((link, index) => {
          const linkId = link.title.toLowerCase().replace(/\s+/g, "-");
          const isExpanded = openMegaMenuId === linkId;

          return (
            <li key={index} className={styles["uq-header__nav-primary-item"]}>
              <a
                className={
                  showMegaMenu
                    ? styles["uq-header__nav-primary--has-dropdown"]
                    : styles["uq-header__nav-primary-link"]
                }
                href={link.href}
                data-gtm-label={link.title}
                {...(showMegaMenu && {
                  id: `${linkId}-menu-button`,
                  role: "button",
                  "aria-haspopup": "true",
                  "aria-expanded": isExpanded,
                  "aria-controls": `${linkId}-megamenu`,
                  onClick: (e) => {
                    e.preventDefault();
                    onMegaMenuToggle(linkId);
                  },
                })}
              >
                {link.title}
              </a>

              {showMegaMenu && link.columns && (
                <div
                  id={`${linkId}-megamenu`}
                  className={styles["uq-header__megamenu"]}
                  style={{ display: isExpanded ? "block" : "none" }}
                >
                  <div className={styles["uq-header__megamenu-container"]}>
                    <h2
                      className={styles["uq-header__megamenu-overview-label"]}
                    >
                      <a
                        href={link.href}
                        className={styles["uq-header__megamenu-link"]}
                        data-gtm-label={`${link.title} > ${link.title}`}
                      >
                        {link.title}
                      </a>
                    </h2>
                    {renderMegaMenu(link.columns, link.title)}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
