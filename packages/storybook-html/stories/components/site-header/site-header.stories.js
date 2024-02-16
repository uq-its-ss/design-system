import { useEffect } from "@storybook/addons";

// import styles
import "./site-header.scss";

// import scripts
import siteHeaderNav from "@uqds/site-header/src/js/site-header-navigation";

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
    useEffect(() => {
      var navElem = document.getElementById("jsNav");
      new siteHeaderNav(navElem, "uq-site-header__navigation");
    });
    return siteHeaderWithSubnavHTML;
  },

  name: "With sub-navigation",
};

export const siteHeaderWithoutSubnav = {
  render: () => {
    useEffect(() => {
      var navElem = document.getElementById("jsNav");
      new siteHeaderNav(navElem, "uq-site-header__navigation");
    });
    return siteHeaderWithoutSubnavHTML;
  },

  name: "Without sub-navigation",
};
