
/**
 * @file UQ (Automatic Activation) Tabs JS module.
 * 
 * You need to make sure your HTML is correctly formatted as per the design
 * system docs and that the accompanying SCSS/CSS is loaded as well.
 * 
 * This software includes material copied from or derived from "Example of Tabs
 * with Automatic Activation," (https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/js/tabs.js).
 * Copyright © 2021 W3C® (MIT, ERCIM, Keio, Beihang). Licensed according to the
 * W3C Software License at https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document.
 * 
 * @author University of Queensland
 */

/** 
 * Tabs module
 * @module @uqds/tabs
 */

export class Tabs {
  /**
   * @constructor
   * @param {Object} [options] - Configuration object for the tabs
   * @param {HTMLElement} [options.container] - Optional container for tabs and panels
   * @param {String} [options.tabListSelector=.tabs__tab-list] - Selector string of the tab lists
   * @param {String} [options.tabSelector=.tabs__tab] - Selector string of the tabs
   * @param {String} [options.tabPanelSelector=.tabs__tab-panel] - Selector string of the tab panels
   */
  constructor(options) {
    // Check for valid DOM element as container
    if (options?.container && Tabs.isHTMLElement(options?.container)) {
      this.container = options.container;
    }

    // Define selectors for working elements
    this.tabListSelector = options?.tabListSelector ?
      options.tabListSelector : '.uq-tabs__tab-list';
    this.tabSelector = options?.tabSelector ?
      options.tabSelector : '.uq-tabs__tab';
    this.tabPanelSelector = options?.tabPanelSelector ?
      options.tabPanelSelector : '.uq-tabs__tab-panel';

    // Bind handler method context
    this.clickEventHandler = this.clickEventHandler.bind(this);
    this.keydownEventHandler = this.keydownEventHandler.bind(this);
    this.keyupEventHandler = this.keyupEventHandler.bind(this);
    this.focusEventHandler = this.focusEventHandler.bind(this);

    this.init();
  }

  // For reference
  static keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40
  }

  // Add or substract depending on key pressed
  static direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1
  };

  /**
   * Method to check if an arg is an DOM element.
   * @static
   * @param {HTMLElement} obj - DOM element (hopefully) to confirm
   */
  static isHTMLElement(obj) {
    // Returns true if DOM element
    return (
      typeof HTMLElement === "object" ? obj instanceof HTMLElement : //DOM2
      obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName==="string"
    );
  }

  /**
   * Determine whether there should be a delay when user navigates with the
   * arrow keys
   * @method
   */ 
  determineDelay() {
    var hasDelay = this.tablist.hasAttribute('data-delay');
    var delay = 0;

    if (hasDelay) {
      var delayValue = tablist.getAttribute('data-delay');
      if (delayValue) {
        delay = delayValue;
      }
      else {
        // If no value is specified, default to 300ms
        delay = 300;
      };
    };

    return delay;
  };

  /**
   * Bind listeners to tab
   * @method
   * @param {Number} index 
   */
  addListeners(index) {
    this.tabs[index].addEventListener('click', this.clickEventHandler);
    this.tabs[index].addEventListener('keydown', this.keydownEventHandler);
    this.tabs[index].addEventListener('keyup', this.keyupEventHandler);

    // Build an array with all tabs (<button>s) in it
    this.tabs[index].index = index;
  }

  /**
   * When a tab is clicked, activateTab is fired to activate it
   * @method
   * @param {Event}
   */
  clickEventHandler(event) {
    const tab = event.target;
    this.activateTab(tab, false);
  }

  /**
   * Handle keydown on tabs
   * @method
   * @param {Event} event 
   */
  keydownEventHandler(event) {
    const key = event.keyCode;

    switch (key) {
      case Tabs.keys.end:
        event.preventDefault();
        // Activate last tab
        this.activateTab(this.tabs[this.tabs.length - 1]);
        break;
      case Tabs.keys.home:
        event.preventDefault();
        // Activate first tab
        this.activateTab(this.tabs[0]);
        break;

      // Up and down are in keydown
      // because we need to prevent page scroll >:)
      case Tabs.keys.up:
      case Tabs.keys.down:
        this.determineOrientation(event);
        break;
    };
  };

  /**
   * Handle keyup on tabs
   * @method
   * @param {Event} event 
   */
  keyupEventHandler(event) {
    const key = event.keyCode;

    switch (key) {
      case Tabs.keys.left:
      case Tabs.keys.right:
        this.determineOrientation(event);
        break;
    };
  };

  /**
   * When a tablist's aria-orientation is set to vertical, only up and down
   * arrow should function. In all other cases only left and right arrow
   * function.
   * @method
   * @param {Event} event 
   */
  determineOrientation(event) {
    const key = event.keyCode;
    const vertical = this.tablist.getAttribute('aria-orientation') == 'vertical';
    let proceed = false;

    if (vertical) {
      if (key === Tabs.keys.up || key === Tabs.keys.down) {
        event.preventDefault();
        proceed = true;
      };
    }
    else {
      if (key === Tabs.keys.left || key === Tabs.keys.right) {
        proceed = true;
      };
    };

    if (proceed) {
      this.switchTabOnArrowPress(event);
    };
  };

  /**
   * Either focus the next, previous, first, or last tab depending on the key
   * pressed.
   * @method
   * @param {Event} event 
   */
  switchTabOnArrowPress(event) {
    const pressed = event.keyCode;

    for (let x = 0; x < this.tabs.length; x++) {
      this.tabs[x].addEventListener('focus', this.focusEventHandler);
    };

    if (Tabs.direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (this.tabs[target.index + Tabs.direction[pressed]]) {
          this.tabs[target.index + Tabs.direction[pressed]].focus();
        }
        else if (pressed === Tabs.keys.left || pressed === Tabs.keys.up) {
          this.focusLastTab();
        }
        else if (pressed === Tabs.keys.right || pressed == Tabs.keys.down) {
          this.focusFirstTab();
        };
      };
    };
  };

  /**
   * Activates any given tab panel
   * @method
   * @param {HTMLElement} tab 
   * @param {Boolean} setFocus 
   */
  activateTab(tab, setFocus) {
    setFocus = setFocus || true;
    // Deactivate all other tabs
    this.deactivateTabs();

    // Remove tabindex attribute
    tab.removeAttribute('tabindex');

    // Add class active
    tab.classList.add('uq-tabs__tab--active');

    // Set the tab as selected
    tab.setAttribute('aria-selected', 'true');

    // Get the value of aria-controls (which is an ID)
    const controls = tab.getAttribute('aria-controls');

    // Remove hidden attribute from tab panel to make it visible
    document.getElementById(controls).removeAttribute('hidden');

    // Set focus when required
    if (setFocus) {
      tab.focus();
    };
  };

  /**
   * Deactivate all tabs and tab panels
   * @method
   */
  deactivateTabs() {
    for (let t = 0; t < this.tabs.length; t++) {
      this.tabs[t].setAttribute('tabindex', '-1');
      this.tabs[t].setAttribute('aria-selected', 'false');
      this.tabs[t].classList.remove('uq-tabs__tab--active');
      this.tabs[t].removeEventListener('focus', this.focusEventHandler);
    };

    for (let p = 0; p < this.panels.length; p++) {
      this.panels[p].setAttribute('hidden', 'hidden');
    };
  };

  /**
   * Make a guess
   * @method
   */
  focusFirstTab () {
    this.tabs[0].focus();
  };

  /**
   * Make a guess
   * @method
   */
  focusLastTab () {
    this.tabs[this.tabs.length - 1].focus();
  };

  /**
   * Handle focus on tabs
   * @method
   * @param {Event} event 
   */
  focusEventHandler(event) {
    const target = event.target;

    setTimeout(() => {this.checkTabFocus(target)}, this.delay, target);
  };

  // Only activate tab on focus if it still has focus after the delay
  checkTabFocus(target) {
    const focused = document.activeElement;

    if (target === focused) {
      this.activateTab(target, false);
    };
  };

  /**
   * Initialise tabs arrays and such
   * @method
   */
  init() {
    const scope = this.container ? this.container : document;
    
    this.tablist = scope.querySelector(this.tabListSelector);
    this.panels = scope.querySelectorAll(this.tabPanelSelector);
    this.tabs = this.tablist.querySelectorAll(this.tabSelector);
    this.delay = this.determineDelay();

    // Bind listeners
    for (let i = 0; i < this.tabs.length; ++i) {
      this.addListeners(i);
    };
  }
}
