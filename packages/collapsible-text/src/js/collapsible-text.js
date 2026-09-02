/**
 * Collapsible text component with JavaScript enhancement
 * Measures actual content height for smooth, consistent transitions
 */

class collapsibleText {
  /**
   * @constructor
   * @param {String} [selector] - Data attribute selector for collapsible text wrappers (optional;
   * default: "[data-component='collapsible-text']").
   */
  constructor(selector) {
    this.selector = selector || "[data-component='collapsible-text']";
    this.components = [];
    this.init();
  }

  /**
   * Initialize all collapsible text components
   */
  init() {
    const elements = document.querySelectorAll(this.selector);

    elements.forEach((element) => {
      this.setupComponent(element);
    });

    console.log(
      `collapsible-text: ${elements.length} component(s) initialized`,
    );
  }

  /**
   * Setup individual collapsible component
   * @param {HTMLElement} element - The collapsible text container
   */
  setupComponent(element) {
    const content = element.querySelector("[data-collapsible-content]");
    const button = element.querySelector("[data-collapsible-button]");

    if (!content || !button) {
      console.warn("Collapsible text component missing required elements");
      return;
    }

    // Get collapsed height from data attribute or use default
    const collapsedHeightRem = this.getCollapsedHeight(element);
    const collapsedHeight = this.remToPixels(collapsedHeightRem);

    // Get threshold from data attribute or use default
    const thresholdRem = this.getThreshold(element);
    const threshold = this.remToPixels(thresholdRem);

    // Store component data
    const componentData = {
      element,
      content,
      button,
      fullHeight: "0px",
      collapsedHeight,
      threshold,
      isExpanded: false,
    };

    // Apply the correct initial state based on measured content height
    this.applyThresholdState(
      componentData,
      this.measureContentHeightInPixels(content),
    );

    this.components.push(componentData);

    // Listen for button clicks
    button.addEventListener("click", () => {
      this.handleToggle(componentData);
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize(componentData);
      }, 150);
    });
  }

  /**
   * Measure the full height of the content in pixels
   * @param {HTMLElement} content - The content element
   * @returns {number} The full height in pixels
   */
  measureContentHeightInPixels(content) {
    // Temporarily remove max-height constraint
    const originalMaxHeight = content.style.maxHeight;
    content.style.maxHeight = "none";

    // Measure the full height
    const height = content.scrollHeight;

    // Restore original max-height
    content.style.maxHeight = originalMaxHeight;

    return height;
  }

  /**
   * Convert rem to pixels
   * @param {number} rem - The rem value to convert
   * @returns {number} The pixel value
   */
  remToPixels(rem) {
    const fontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    return rem * fontSize;
  }

  /**   * Get the threshold from data attribute or CSS variable
   * @param {HTMLElement} element - The component container
   * @returns {number} The threshold in rem (default: 9.5)
   */
  getThreshold(element) {
    // Check for data attribute first
    const dataThreshold = element.getAttribute("data-collapse-threshold");
    if (dataThreshold) {
      return parseFloat(dataThreshold);
    }

    // Fall back to CSS variable
    const computedStyle = getComputedStyle(element);
    const cssThreshold = computedStyle
      .getPropertyValue("--collapsible-threshold")
      .trim();

    return cssThreshold ? parseFloat(cssThreshold) : 9.5;
  }

  /**
   * Get the collapsed height from data attribute or CSS variable
   * @param {HTMLElement} element - The component container
   * @returns {string} The collapsed height
   */
  getCollapsedHeight(element) {
    // Check for data attribute first
    const dataHeight = element.getAttribute("data-collapsed-height");
    if (dataHeight) {
      return parseFloat(dataHeight);
    }

    // Fall back to CSS variable
    const computedStyle = getComputedStyle(element);
    const collapsedHeight = computedStyle
      .getPropertyValue("--collapsible-collapsed-height")
      .trim();
    return collapsedHeight ? parseFloat(collapsedHeight) : 7;
  }

  /**
   * Handle toggle state change
   * @param {Object} componentData - The component data object
   */
  handleToggle(componentData) {
    const { element, content, button, fullHeight, collapsedHeight } =
      componentData;

    // Toggle expanded state
    componentData.isExpanded = !componentData.isExpanded;

    if (componentData.isExpanded) {
      // Expanding
      content.style.maxHeight = fullHeight;
      element.setAttribute("data-state", "expanded");
      button.setAttribute("aria-expanded", "true");
      button.textContent = "Read less";

      // Toggle icon classes
      button.classList.remove("uq-icon--standard--chevron-down-sml");
      button.classList.add("uq-icon--standard--chevron-up-sml");
    } else {
      // Collapsing
      content.style.maxHeight = `${collapsedHeight}px`;
      element.setAttribute("data-state", "collapsed");
      button.setAttribute("aria-expanded", "false");
      button.textContent = "Read more";

      // Toggle icon classes
      button.classList.remove("uq-icon--standard--chevron-up-sml");
      button.classList.add("uq-icon--standard--chevron-down-sml");
    }
  }

  /**
   * Handle window resize - recalculate content height and re-evaluate collapse behaviour
   * @param {Object} componentData - The component data object
   */
  handleResize(componentData) {
    const fullHeightPx = this.measureContentHeightInPixels(
      componentData.content,
    );

    this.applyThresholdState(componentData, fullHeightPx);
  }

  /**
   * Enable, disable or update the collapsed/expanded state based on measured content height.
   * Used on initial setup and again on resize, so content that grows or shrinks past the
   * threshold gets the collapsible behaviour added or removed accordingly.
   * @param {Object} componentData - The component data object
   * @param {number} fullHeightPx - The measured full content height in pixels
   */
  applyThresholdState(componentData, fullHeightPx) {
    const { element, content, button, collapsedHeight, threshold } =
      componentData;

    componentData.fullHeight = `${fullHeightPx}px`;

    if (fullHeightPx <= threshold) {
      // Content is short enough - no collapsing needed
      content.style.maxHeight = "none";
      button.style.display = "none";
      element.setAttribute("data-collapsed", "false");
      element.removeAttribute("data-state");
      componentData.isExpanded = false;
      return;
    }

    // Content exceeds threshold - collapsible behaviour is required
    button.style.display = "";
    element.setAttribute("data-collapsed", "true");

    if (componentData.isExpanded) {
      content.style.maxHeight = componentData.fullHeight;
      element.setAttribute("data-state", "expanded");
      button.setAttribute("aria-expanded", "true");
      button.textContent = "Read less";
      button.classList.remove("uq-icon--standard--chevron-down-sml");
      button.classList.add("uq-icon--standard--chevron-up-sml");
    } else {
      content.style.maxHeight = `${collapsedHeight}px`;
      element.setAttribute("data-state", "collapsed");
      button.setAttribute("aria-expanded", "false");
      button.textContent = "Read more";
      button.classList.remove("uq-icon--standard--chevron-up-sml");
      button.classList.add("uq-icon--standard--chevron-down-sml");
    }
  }
}

export { collapsibleText as default };
