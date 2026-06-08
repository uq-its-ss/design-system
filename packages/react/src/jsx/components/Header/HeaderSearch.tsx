import type { FC } from "react";
import styles from "./header.module.scss";

interface HeaderSearchProps {
  isOpen: boolean;
  siteDomain: string;
  onToggle: () => void;
}

/**
 * Search toggle button and form
 */
export const HeaderSearch: FC<HeaderSearchProps> = ({
  isOpen,
  siteDomain,
  onToggle,
}) => {
  return (
    <div
      className={styles["uq-header__toggle-search"]}
      data-gtm-category="Search"
    >
      <button
        className={styles["uq-header__toggle-search-button"]}
        data-gtm-action="Toggle"
        aria-label="Search"
        onClick={onToggle}
      >
        <div className={styles["uq-header__toggle-search-label"]}>Search</div>
      </button>

      {/* Search Form */}
      <div
        className={styles["uq-header__search"]}
        data-gtm-category="Search"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className={styles["uq-header__search-container"]}>
          <form
            className={styles["uq-header__search-form"]}
            action="https://search.uq.edu.au/"
            method="get"
            data-gtm-action="Text search"
            data-gtm-form-action=""
          >
            <fieldset className={styles["uq-header__search-fieldset"]}>
              <label
                className={styles["uq-header__search-label"]}
                htmlFor="edit-q"
              >
                Search term
              </label>
              <input
                className={styles["uq-header__search-input"]}
                type="text"
                id="edit-q"
                name="q"
                defaultValue=""
                maxLength={128}
                placeholder="Search by keyword"
                autoComplete="off"
                data-gtm-form-search=""
              />
              <input
                type="hidden"
                value={siteDomain}
                name="as_sitesearch"
                id="edit-as_sitesearch-on"
              />
              <button
                className={styles["uq-header__search-button"]}
                type="submit"
                name="op"
                value="Search"
                data-gtm-trigger="click"
              >
                <span className={styles["uq-header__search-button-label"]}>
                  Search
                </span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
