import { useEffect } from "@storybook/addons";

// import styles
import "./footer.scss";

// import scripts
import accordionCreate from "@uqds/accordion/src/js/accordion";

// import HTML template strings
import footerHTML from "./footer.html";

import docs from "./footer.docs.mdx";

export default {
  title: "Components/Footer",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "UQ Neutral 1",
    },
    docs: {
      page: docs,
      inlineStories: false,
    },
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const footer = () => {
  useEffect(() => {
    new accordionCreate();
  });
  return footerHTML;
};

footer.storyName = "Footer";
