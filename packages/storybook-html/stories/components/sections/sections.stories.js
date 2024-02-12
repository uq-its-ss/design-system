// import styles
import "./sections.scss";

// import HTML template strings
import sectionsDefaultHTML from "./sections-default.html";
import sectionsCenteredHTML from "./sections-centered.html";
import sectionsNarrowHTML from "./sections-narrow.html";
import sectionsShadedHTML from "./sections-shaded.html";
import sectionsNoPaddingHTML from "./sections-no-padding.html";
import sectionsLargePaddingHTML from "./sections-large-padding.html";

import docs from "./sections.mdx";

export default {
  title: "Layout/Sections",
  parameters: {
    docs: {
      page: docs,
    },
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const sectionsDefault = () => {
  return sectionsDefaultHTML;
};

sectionsDefault.storyName = "Default";

export const sectionsCentered = () => {
  return sectionsCenteredHTML;
};

sectionsCentered.storyName = "Centered";

export const sectionsNarrow = () => {
  return sectionsNarrowHTML;
};

sectionsNarrow.storyName = "Narrow";

export const sectionsShaded = () => {
  return sectionsShadedHTML;
};

sectionsShaded.storyName = "Shaded";

export const sectionsNoPadding = () => {
  return sectionsNoPaddingHTML;
};

sectionsNoPadding.storyName = "No padding";

export const sectionsLargePadding = () => {
  return sectionsLargePaddingHTML;
};

sectionsLargePadding.storyName = "Large padding";
