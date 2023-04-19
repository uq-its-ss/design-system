"use strict";

/**
 * Breadcrumb module
 * @file Handles interaction behaviour for the breadcrumb.
 */

class Breadcrumb {
  constructor(el) {
    
    // The breadcrumb trail.
    this.breadcrumbs = el.querySelectorAll('.uq-breadcrumb__item');
    this.crumbs = Array.from(this.breadcrumbs);
    this.hiddenCrumbs = this.crumbs.slice(1, this.crumbs.length - 3);
    this.expandCrumb = {};
    this.firstCrumb = this.crumbs[0];

    this.init();

  }

  init() {

    // truncate if more than 4 options
    if (this.crumbs.length <= 4) {
      return;
    }
   
    this.createBreadcrumbLink();

    // add expand crumb after the home crumb
    this.firstCrumb.parentNode.insertBefore(this.expandCrumb, this.firstCrumb.nextSibling);

    // hide the crumbs in between
    this.toggleExpand(this.hiddenCrumbs);

    // add event listener to expand crumb to toggle show/hide
    this.expandCrumb.firstChild.addEventListener('click', () => this.toggleExpand(this.hiddenCrumbs));
    
  }
  
    /**
   * Create the expanded breadcrumb link.
   */
    createBreadcrumbLink() {
      this.expandCrumb = document.createElement("li");
      this.expandCrumb.classList.add("uq-breadcrumb__item", "uq-breadcrumb__expand", "uq-breadcrumb__item--hidden");
      this.expandCrumb.innerHTML = '<a class="uq-breadcrumb__link">...</a>';
      
    }

    toggleExpand(hiddenCrumbs) {
      hiddenCrumbs.forEach((crumb) => {
        crumb.classList.toggle("uq-breadcrumb__item--hidden");
      });
      this.expandCrumb.classList.toggle("uq-breadcrumb__item--hidden");
    }
}

export default Breadcrumb;
