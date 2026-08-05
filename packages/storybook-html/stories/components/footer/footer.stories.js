// import scripts
import { FooterDecorator } from "./footerDecorator";

// import styles
import "./footer.scss";

// import HTML template strings
import footerHTML from "./footer.html?raw";

export default {
  title: "Components/Footer",
  decorators: [FooterDecorator],
  parameters: {
    layout: "fullscreen",

    previewTabs: {
      canvas: { hidden: false },
    },
  },

  globals: {
    backgrounds: {
      value: "uq_neutral_1",
    },
  },
};

export const footer = {
  render: () => {
    return footerHTML;
  },

  name: "Footer",
};
