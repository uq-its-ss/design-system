// import styles
import "./side-nav.scss";

// import HTML template strings
import sideNavSingleLevelHTML from "./side-nav.html";
import sideNavMultiLevelHTML from "./side-nav-multi-level.html";

import docs from "./side-nav.docs.mdx";

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

export const sideNavSingleLevel = () => {
  return sideNavSingleLevelHTML;
};

sideNavSingleLevel.storyName = "Side nav single-level";

export const sideNavMultiLevel = () => {
  return sideNavMultiLevelHTML;
};

sideNavMultiLevel.storyName = "Side nav multi-level";
