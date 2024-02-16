// import styles
import "./side-nav.scss";

// import HTML template strings
import sideNavSingleLevelHTML from "./side-nav.html";
import sideNavMultiLevelHTML from "./side-nav-multi-level.html";

import docs from "./side-nav.mdx";

export default {
  title: "Components/Side nav",
  parameters: {
    docs: {
      page: docs,
    },
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const sideNavSingleLevel = {
  render: () => {
    return sideNavSingleLevelHTML;
  },

  name: "Side nav single-level",
};

export const sideNavMultiLevel = {
  render: () => {
    return sideNavMultiLevelHTML;
  },

  name: "Side nav multi-level",
};
