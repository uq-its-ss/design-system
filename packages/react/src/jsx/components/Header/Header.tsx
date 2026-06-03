import { type FC, useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { primaryLinks, secondaryLinks } from "@uqds/header/src/js/menuData";
import type { HeaderProps } from "./types";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { HeaderMegaMenu } from "./HeaderMegaMenu";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderSecondaryNav } from "./HeaderSecondaryNav";
import styles from "./header.module.scss";

/**
 * UQ Header component with mobile menu, mega menu, search, and secondary navigation
 */
export const Header: FC<HeaderProps> = ({
  siteDomain = "https://uq.edu.au",
  localLinks,
  isLinkActive,
  onMenuToggle,
  onSearchToggle,
}) => {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMegaMenuId, setOpenMegaMenuId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Determine if we should show local navigation (Scenario A) or global (Scenario B)
  const showLocalNav = !!localLinks && localLinks.length > 0;
  const showMegaMenu = true; // Always show mega menu structure on desktop

  // Debounce helper
  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    wait: number,
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = useCallback(() => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    // Toggle scroll lock
    if (newState) {
      document.body.classList.add("no-scroll");
      // Close search when opening menu
      setIsSearchOpen(false);
      onSearchToggle?.(false);
    } else {
      document.body.classList.remove("no-scroll");
    }

    onMenuToggle?.(newState);
  }, [isMobileMenuOpen, onMenuToggle, onSearchToggle]);

  // Handle search toggle
  const handleSearchToggle = useCallback(() => {
    const newState = !isSearchOpen;
    setIsSearchOpen(newState);

    // Close mobile menu when opening search
    if (newState && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.classList.remove("no-scroll");
      onMenuToggle?.(false);
    }

    onSearchToggle?.(newState);
  }, [isSearchOpen, isMobileMenuOpen, onMenuToggle, onSearchToggle]);

  // Handle mega menu toggle
  const handleMegaMenuToggle = useCallback((linkId: string) => {
    setOpenMegaMenuId((prev) => (prev === linkId ? null : linkId));
  }, []);

  // Handle responsive behavior
  useEffect(() => {
    const MOBILE_BREAKPOINT = 1024;

    const handleResize = () => {
      const wasMobile = isMobile;
      const isNowMobile = window.innerWidth < MOBILE_BREAKPOINT;

      setIsMobile(isNowMobile);

      // Close mobile menu when resizing to desktop
      if (wasMobile && !isNowMobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.classList.remove("no-scroll");
        onMenuToggle?.(false);
      }

      // Close mega menus when resizing to mobile
      if (!wasMobile && isNowMobile && openMegaMenuId) {
        setOpenMegaMenuId(null);
      }
    };

    // Debounced resize handler
    const debouncedResize = debounce(handleResize, 150);

    // Initial check
    handleResize();

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [isMobile, isMobileMenuOpen, openMegaMenuId, onMenuToggle]);

  // Initialize SlideMenu for mobile navigation
  useEffect(() => {
    const menuElement = document.getElementById("global-mobile-nav");

    // Initialize SlideMenu if available
    if (menuElement && typeof (window as any).SlideMenu !== "undefined") {
      const slideMenu = new (window as any).SlideMenu(menuElement, {
        position: "left",
        submenuLinkAfter: " ",
        backLinkBefore: " ",
      });

      return () => {
        // Cleanup SlideMenu instance if it has a destroy method
        if (slideMenu && typeof slideMenu.destroy === "function") {
          slideMenu.destroy();
        }
      };
    }
  }, []);

  // Cleanup scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <header className={styles["uq-header"]} data-gtm-category="Header">
      <div className={styles["uq-header__container"]}>
        {/* Mobile Menu Toggle */}
        <div
          className={styles["uq-header__toggle-menu"]}
          data-target="global-mobile-nav"
          data-gtm-category="Primary header"
        >
          <button
            type="button"
            className={classNames(
              styles["uq-header__toggle-menu-button"],
              "slide-menu__control",
              {
                [styles["uq-header__toggle-menu-button--is-open"]]:
                  isMobileMenuOpen,
              },
            )}
            data-target="global-mobile-nav"
            data-arg=".is-active"
            data-action="smartToggle"
            data-gtm-trigger="click"
            data-gtm-action="Toggle"
            onClick={handleMobileMenuToggle}
          >
            Menu
          </button>

          {/* Mobile Navigation */}
          <HeaderMobileMenu
            showLocalNav={showLocalNav}
            localLinks={localLinks}
            primaryLinks={primaryLinks}
            secondaryLinks={secondaryLinks}
            isLinkActive={isLinkActive}
          />
        </div>

        {/* Logo */}
        <div
          className={styles["uq-header__logo"]}
          data-gtm-category="Primary header"
        >
          <a
            className={styles["uq-header__logo-link"]}
            href="https://uq.edu.au"
            data-gtm-label="UQ Logo"
          >
            <img
              className={styles["uq-header__logo-image"]}
              alt="The University of Queensland"
              src="https://static.uq.net.au/v15/logos/corporate/uq-logo--reversed.svg"
            />
          </a>
        </div>

        {/* Desktop Primary Navigation with Mega Menu */}
        <HeaderMegaMenu
          primaryLinks={primaryLinks}
          showMegaMenu={showMegaMenu}
          openMegaMenuId={openMegaMenuId}
          onMegaMenuToggle={handleMegaMenuToggle}
        />

        {/* Search */}
        <HeaderSearch
          isOpen={isSearchOpen}
          siteDomain={siteDomain}
          onToggle={handleSearchToggle}
        />
      </div>

      {/* Desktop Secondary Navigation */}
      <HeaderSecondaryNav secondaryLinks={secondaryLinks} />
    </header>
  );
};
