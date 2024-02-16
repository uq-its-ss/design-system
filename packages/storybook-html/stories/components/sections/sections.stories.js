// import styles
import "./sections.scss";

// import HTML template strings
import sectionsDefaultHTML from "./sections-default.html";
import sectionsCenteredHTML from "./sections-centered.html";
import sectionsNarrowHTML from "./sections-narrow.html";
import sectionsShadedHTML from "./sections-shaded.html";
import sectionsNoPaddingHTML from "./sections-no-padding.html";
import sectionsLargePaddingHTML from "./sections-large-padding.html";

export default {
  title: "Layout/Sections",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const sectionsDefault = {
  render: () => {
    return sectionsDefaultHTML;
  },

  name: "Default",
};

export const sectionsCentered = {
  render: () => {
    return sectionsCenteredHTML;
  },

  name: "Centered",
};

export const sectionsNarrow = {
  render: () => {
    return sectionsNarrowHTML;
  },

  name: "Narrow",
};

export const sectionsShaded = {
  render: () => {
    return sectionsShadedHTML;
  },

  name: "Shaded",
};

export const sectionsNoPadding = {
  render: () => {
    return sectionsNoPaddingHTML;
  },

  name: "No padding",
};

export const sectionsLargePadding = {
  render: () => {
    return sectionsLargePaddingHTML;
  },

  name: "Large padding",
};
