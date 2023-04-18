"use strict";

/**
 * Breadcrumb module
 * @file Handles interaction behaviour for the breadcrumb.
 */

class Breadcrumb {
  constructor(el) {
    this.init(el);
  }

  init(el) {
    const breadcrumbs = el.querySelectorAll(".uq-breadcrumb__item");

    // truncate if more than 4 options
    if (breadcrumbs.length > 4) {
      var crumbs = Array.from(breadcrumbs);

      // create the expand crumb link
      var expandCrumb = document.createElement("li");
      expandCrumb.classList.add("uq-breadcrumb__item", "uq-breadcrumb__expand");
      expandCrumb.innerHTML = '<a class="uq-breadcrumb__link">...</a>';

      // add expand crumb after the home crumb
      var firstCrumb = el.querySelector(".uq-breadcrumb__item:first-of-type");
      firstCrumb.parentNode.insertBefore(expandCrumb, firstCrumb.nextSibling);

      // hide the crumbs in between
      var hiddenCrumbs = crumbs.slice(1, crumbs.length - 3);
      hiddenCrumbs.forEach((crumb) => {
        crumb.classList.add("uq-breadcrumb__item--hidden");
      });

      // add event listener to expand crumb to toggle show/hide
      expandCrumb.firstChild.addEventListener("click", toggleExpand);

      function toggleExpand() {
        hiddenCrumbs.forEach((crumb) => {
          crumb.classList.toggle("uq-breadcrumb__item--hidden");
        });
        expandCrumb.classList.toggle("uq-breadcrumb__item--hidden");
      }
    }
  }
}

export default Breadcrumb;
