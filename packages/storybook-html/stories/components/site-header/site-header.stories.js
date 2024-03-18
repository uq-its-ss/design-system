// import styles
import "./site-header.scss";

// import scripts
import siteHeaderNavigation from "@uqds/site-header/src/js/site-header-navigation";

// import HTML template strings
import siteHeaderWithSubnavHTML from "./site-header-with-subnav.html";
import siteHeaderWithoutSubnavHTML from "./site-header-without-subnav.html";

export default {
  title: "Components/Site header",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const siteHeaderWithSubnav = {
  render: () => {
    return siteHeaderWithSubnavHTML;
  },
  play: ({ canvasElement }) => {
    const navElem  = canvasElement.querySelector("#jsNav");
    if (navElem) new siteHeaderNavigation(navElem, "uq-site-header__navigation");
  },

  name: "With sub-navigation",
};

export const siteHeaderWithoutSubnav = {
  render: () => {
    return siteHeaderWithoutSubnavHTML;
  },
  play: ({ canvasElement }) => {
    const navElem  = canvasElement.querySelector("#jsNav");
    if (navElem) new siteHeaderNavigation(navElem, "uq-site-header__navigation");
  },

  name: "Without sub-navigation",
};
