import { useEffect } from "@storybook/addons";

// import styles
import "./footer.scss";

// import scripts
import accordionCreate from "@uqds/accordion/src/js/accordion";

// import HTML template strings
import footerHTML from "./footer.html";

export default {
  title: "Components/Footer",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "UQ Neutral 1",
    },
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const footer = {
  parameters: {
    design: {
      allowFullscreen: true,
      name: "Figma",
      type: "figma",
      url: "https://www.figma.com/file/Li7SZkmaLgw8ZdiHje2q7x/One-UQ-component-library?type=design&node-id=6599-5138&mode=design&t=1ihpAR7SlIXznVw1-4",
    },
  },
  render: () => {
    useEffect(() => {
      new accordionCreate();
    });
    return footerHTML;
  },

  name: "Footer",
};
