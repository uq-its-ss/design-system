import type { FC } from "react";
import type { MenuLink } from "./types";
import styles from "./header.module.scss";

interface HeaderSecondaryNavProps {
  secondaryLinks: MenuLink[];
}

/**
 * Secondary navigation bar (desktop)
 */
export const HeaderSecondaryNav: FC<HeaderSecondaryNavProps> = ({
  secondaryLinks,
}) => {
  return (
    <div className={styles["uq-header__nav-secondary"]}>
      <nav className={styles["uq-header__nav-secondary-container"]}>
        <ul className={styles["uq-header__nav-secondary-list"]}>
          <li
            className={styles["uq-header__nav-secondary-item"]}
            data-gtm-category="Secondary header"
          >
            <a
              className={styles["uq-header__nav-secondary-link"]}
              href="https://www.uq.edu.au"
            >
              UQ home
            </a>
          </li>
          {secondaryLinks.map((link, index) => (
            <li
              key={index}
              className={styles["uq-header__nav-secondary-item"]}
              data-gtm-category="Secondary header"
            >
              <a
                href={link.href}
                className={styles["uq-header__nav-secondary-link"]}
                data-gtm-label={link.title}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
