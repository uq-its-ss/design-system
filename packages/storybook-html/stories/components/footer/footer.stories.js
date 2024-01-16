import { useEffect } from "@storybook/addons";
import { withDesign } from "storybook-addon-designs";

// import styles
import "./footer.scss";

// import scripts
import accordionCreate from "@uqds/accordion/src/js/accordion";

// import HTML template strings
import footerHTML from "./footer.html";

import docs from "./footer.docs.mdx";

export default {
  title: "Components/Footer",
  decorators: [withDesign],
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
footer.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Li7SZkmaLgw8ZdiHje2q7x/One-uq-component-library?node-id=3853%3A2028",
  },
};

footer.storyName = "Footer";
