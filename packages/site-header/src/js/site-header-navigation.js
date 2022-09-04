/**
 * Main Navigation
 * @file Drop down navigation handler.
 */

class MainNavigation {
  constructor(nav, navClass) {
    this.nav = nav;
    this.navClass = navClass;
    this.toggleClass = `jsNavToggle`;
    this.openModifier = `${this.navClass}__list--open`;
    this.levelOpenModifier = `${this.navClass}__list-item--open`;
    this.level1Class = `${this.navClass}__list--level-1`;
    this.level2Class = `${this.navClass}__list--level-2`;
    this.reverseClass = `${this.navClass}__list--reverse`;
    this.subNavClass = `${this.navClass}__list-item--has-subnav`;
    this.subToggleClass = `${this.navClass}__sub-toggle`;

    this.init = this.init.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleMobileToggle = this.handleMobileToggle.bind(this);
    this.setOrientation = this.setOrientation.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.init();
  }

  init() {
    const mobileToggle = document.querySelector(`.${this.toggleClass}`);
    const subNavItems = this.nav.querySelectorAll(`.${this.subNavClass}`);
    const subNavLinks = this.nav.querySelectorAll(`.${this.subNavClass} > a`);
    const subNavL2Items = this.nav.querySelectorAll(
      `.${this.level2Class} .${this.subNavClass}`
    );
    const subNavL2Links = this.nav.querySelectorAll(
      `.${this.level2Class} .${this.subNavClass} > a`
    );
    const navLinks = this.nav.querySelectorAll("li > a");
    const subNavToggles = this.nav.querySelectorAll(`.${this.subToggleClass}`);

    mobileToggle.addEventListener("click", this.handleMobileToggle);

    subNavItems.forEach((item) => {
      this.setOrientation(item);
      item.addEventListener("mouseenter", this.handleToggle);
      item.addEventListener("mouseleave", this.handleToggle);
    });

    subNavLinks.forEach((item) => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        item.addEventListener("touchend", this.handleToggle);
      }
    });

    subNavL2Items.forEach((item) => {
      this.setOrientation(item);
      item.addEventListener("mouseenter", this.handleToggle);
      item.addEventListener("mouseleave", this.handleToggle);
    });

    subNavL2Links.forEach((item) => {
      item.addEventListener("touchend", this.handleToggle);
    });

    navLinks.forEach((item) => {
      item.addEventListener("keydown", this.handleKeyPress);
    });

    subNavToggles.forEach((item) => {
      item.addEventListener("click", this.handleToggle);
    });
  }

  handleMobileToggle(event) {
    const toggle = event.target;
    const target = this.nav.querySelectorAll(`.${this.level1Class}`);
    const ariaExpanded = toggle.getAttribute("aria-expanded") === "true";
    const ariaPressed = toggle.getAttribute("aria-pressed") === "true";

    toggle.classList.toggle(`${this.navClass}-toggle--close`);
    toggle.setAttribute("aria-expanded", !ariaExpanded);
    toggle.setAttribute("aria-pressed", !ariaPressed);

    target.forEach((el) => {
      el.classList.toggle(this.openModifier);
      el.setAttribute("aria-expanded", !ariaExpanded);
      el.setAttribute("aria-pressed", !ariaPressed);
    });
  }

  handleToggle(event) {
    if (
      (event.type === "mouseenter" || event.type === "mouseleave") &&
      window.matchMedia("(max-width: 1024px)").matches
    ) {
      return;
    }
    let menuItem = event.target;
    if (menuItem.tagName !== "LI") {
      menuItem = menuItem.parentElement;
    }
    const subNav = menuItem.querySelector("ul");

    if (subNav.classList.contains(this.openModifier)) {
      this.closeLevel(subNav, menuItem);
    } else {
      if (event.type === "touchend") {
        event.preventDefault();
      }
      this.closeAllLevels();
      this.openLevel(subNav, menuItem);
    }
  }

  openLevel(subNav, menuItem) {
    subNav.classList.add(this.openModifier);
    menuItem.classList.add(this.levelOpenModifier);
    menuItem.querySelector("a").setAttribute("aria-expanded", "true");
    menuItem.querySelector("button").setAttribute("aria-expanded", "true");
    menuItem.querySelector("button").setAttribute("aria-pressed", "true");
  }

  closeLevel(subNav, menuItem) {
    subNav.classList.remove(this.openModifier);
    this.setOrientation(menuItem);
    menuItem.classList.remove(this.levelOpenModifier);
    menuItem.querySelector("a").setAttribute("aria-expanded", "false");
    menuItem.querySelector("button").setAttribute("aria-expanded", "false");
    menuItem.querySelector("button").setAttribute("aria-pressed", "false");
    menuItem.parentNode
      .querySelector("ul")
      .setAttribute("aria-expanded", "false");
    menuItem.parentNode
      .querySelector("ul")
      .setAttribute("aria-pressed", "false");
  }

  closeNav(menuItem) {
    menuItem.classList.remove(this.openModifier);
    menuItem.parentNode
      .querySelector("ul")
      .setAttribute("aria-expanded", "false");
    menuItem.parentNode
      .querySelector("ul")
      .setAttribute("aria-pressed", "false");
  }

  closeAllLevels() {
    const levels = this.nav.querySelectorAll(`.${this.subNavClass}`);
    levels.forEach((level) => {
      const item = level.querySelector(`.${this.level2Class}`);
      this.closeLevel(item, level);
    });
  }

  setOrientation(item) {
    const subNav = item.querySelector(`.${this.level2Class}`);
    const { reverseClass } = this;
    let subNavRight = 0;
    if (subNav && subNav.getBoundingClientRect()) {
      subNavRight = subNav.getBoundingClientRect().right;
    }

    if (window.innerWidth < subNavRight) {
      subNav.classList.add(reverseClass);
    }
  }

  handleKeyPress(event) {
    const parent = event.currentTarget.parentNode;
    const nav = parent.parentNode;
    const mobileToggle = document.querySelector(`.${this.toggleClass}`);

    if (parent === nav.firstElementChild) {
      // If we shift tab past the first child, toggle this level.
      if (event.key === "Tab" && event.shiftKey === true) {
        if (nav.classList.contains(this.level2Class)) {
          this.closeLevel(nav, nav.parentNode, subNav);
          nav.parentNode.classList.remove(this.levelOpenModifier);
        } else {
          this.closeNav(nav);
          mobileToggle.classList.toggle(`${this.navClass}-toggle--close`);
          mobileToggle.setAttribute("aria-expanded", "false");
          mobileToggle.setAttribute("aria-pressed", "false");
        }
      }
    } else if (parent === nav.lastElementChild) {
      // If we tab past the last child, toggle this level.
      if (event.key === "Tab" && event.shiftKey === false) {
        if (nav.classList.contains(this.level2Class)) {
          this.closeLevel(nav, nav.parentNode);
          nav.parentNode.classList.remove(this.levelOpenModifier);
        } else {
          this.closeNav(nav);
          mobileToggle.classList.toggle(`${this.navClass}-toggle--close`);
          mobileToggle.setAttribute("aria-expanded", "false");
          mobileToggle.setAttribute("aria-pressed", "false");
        }
      }
    }

    // Toggle nav on Space (32) or any Arrow key (37-40).
    switch (event.keyCode) {
      case 32:
      case 37:
      case 38:
      case 39:
      case 40:
        event.preventDefault();
        this.handleToggle(event);
        break;
      default:
        break;
    }
  }
}

export { MainNavigation as default };
