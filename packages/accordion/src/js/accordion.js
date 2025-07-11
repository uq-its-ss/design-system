"use strict";

/**
 * @file
 * UQ Accordion JS (instantiates an object that controls "accordion" nodes for
 * the entire document). You need to make sure your accordion HTML is correctly
 * formatted and the accompanying SCSS/CSS is loaded as well.
 */
class accordion {
  /**
   * @constructor
   * @param {String} [className] - Class name of accordion wrappers (optional;
   * default: "accordion").
   */
  constructor(className) {
    this.className = className || "uq-accordion";
    this.init();
  }

  /**
   * Method to replace jQuery's .next() method.
   * See:
   * https://gomakethings.com/finding-the-next-and-previous-sibling-elements-that-match-a-selector-with-vanilla-js/
   * @static
   * @param {HTMLElement} el - HTML element.
   * @param {String} selector - CSS selector string.
   */
  static getNextSibling(el, selector) {
    // Get the next sibling element
    let sibling = el.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) {
      return sibling;
    }

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) {
        return sibling;
      }
      sibling = sibling.nextElementSibling;
    }
  }

  /**
   * Method to get previous sibling element.
   * @static
   * @param {HTMLElement} el - HTML element.
   * @param {String} selector - CSS selector string.
   */
  static getPrevSibling(el, selector) {
    // Get the next sibling element
    let sibling = el.previousElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) {
      return sibling;
    }

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) {
        return sibling;
      }
      sibling = sibling.previousElementSibling;
    }
  }

  /**
   * Method to hide accordion content
   * @method
   * @param {HTMLElement} el - 'Toggler' HTML element.
   */
  slideContentUp(el) {
    const content = accordion.getNextSibling(el, `.${this.className}__content`);
    el.classList.remove(`${this.className}__toggle--active`);
    el.parentNode.classList.remove(`${this.className}__item--is-open`);
    el.setAttribute("aria-expanded", "false");
    content.style.height = "0px";
    content.addEventListener(
      "transitionend",
      () => {
        content.classList.remove(`${this.className}__content--active`);
      },
      { once: true },
    );
    content.setAttribute("aria-hidden", "true");
  }

  /**
   * Method to show accordion content
   * @method
   * @param {HTMLElement} el - 'Toggler' HTML element.
   */
  slideContentDown(el) {
    const content = accordion.getNextSibling(el, `.${this.className}__content`);
    el.classList.add(`${this.className}__toggle--active`);
    el.parentNode.classList.add(`${this.className}__item--is-open`);
    el.setAttribute("aria-expanded", "true");
    content.classList.add(`${this.className}__content--active`);
    content.style.height = "auto";
    const height = content.clientHeight + "px";
    content.style.height = "0px";
    setTimeout(() => {
      content.style.height = height;
    }, 0);
    content.setAttribute("aria-hidden", "false");
  }

  /**
   * Method to hide all other accordion content except for passed element.
   * @method
   * @param {HTMLElement} el - Excluded 'Toggler' HTML element.
   * @param {HTMLElement[]} togglers - List of 'toggler' elements.
   */
  slideUpOthers(el, togglers) {
    Array.from(togglers)
      .filter(
        (toggler) =>
          toggler !== el &&
          toggler.classList.contains(`${this.className}__toggle--active`),
      )
      .forEach((toggler) => {
        this.slideContentUp(toggler);
      });
  }

  /**
   * Click handler for 'togglers'
   * @method
   * @param {HTMLElement[]} togglers - List of 'toggler' elements.
   */
  handleToggle(togglers) {
    return (e) => {
      e.preventDefault();
      const toggle = e.target.closest(`.${this.className}__toggle`);
      if (toggle.classList.contains(`${this.className}__toggle--active`)) {
        this.slideContentUp(toggle);
        return;
      }
      if (
        toggle
          .closest(`.${this.className}`)
          .classList.contains(`${this.className}--is-manual`)
      ) {
        this.slideContentDown(toggle);
        return;
      }
      this.slideContentDown(toggle);
      this.slideUpOthers(toggle, togglers);
    };
  }

  /**
   * Initialise accordion behavior
   * @method
   */
  init() {
    if (window.location.hash) {
      this.hash = window.location.hash;
    }

    // Scroll to hash (param string) selected accordion
    if (this.hash && this.hash !== "") {
      const hashSelectedContent = document.querySelector(
        `${this.hash}.${this.className}__content`,
      );

      if (hashSelectedContent) {
        // Only apply classes on load when linking directly to an accordion item.

        const hashSelected = accordion.getPrevSibling(
          hashSelectedContent,
          `.${this.className}__toggle`,
        );
        this.slideContentDown(hashSelected);

        // Scroll to top of selected item.
        window.scrollTo(0, hashSelected.getBoundingClientRect().top);
      }
    }

    const accordions = document.querySelectorAll(
      `.${this.className}:not([data-accordion-init])`,
    );

    // wrap contents of uq-accordion__content in a wrapper to apply padding and prevent animation jump
    const accordionContents = document.querySelectorAll(
      `.${this.className}:not([data-accordion-init]) .${this.className}__content`,
    );

    accordions.forEach((el) => {
      el.dataset.accordionInit = "";
      const togglers = el.querySelectorAll(`.${this.className}__toggle`);

      togglers.forEach((el) => {
        el.addEventListener("click", this.handleToggle(togglers));
      });
    });

    // Wrap accordion content in a div tag that's used for layout without breaking the animation
    accordionContents.forEach((accordionContent) => {
      if (
        !accordionContent.querySelector(`.${this.className}__content-wrapper`)
      ) {
        const wrapper = document.createElement("div");
        wrapper.classList.add(`${this.className}__content-wrapper`);
        wrapper.replaceChildren(...accordionContent.childNodes);
        accordionContent.appendChild(wrapper);
      }
    });
  }
}

export { accordion as default };
