// import scripts
import { accordion } from "@uqds/accordion/src/js/main";

// import styles
import "./footer.scss";

// import HTML template strings
import footerHTML from "./footer.html?raw";

export default {
  title: "Components/Footer",

  parameters: {
    layout: "fullscreen",

    previewTabs: {
      canvas: { hidden: false },
    }
  },

  globals: {
    backgrounds: {
      value: "uq_neutral_1"
    }
  }
};

export const footer = {
  render: () => {
    return footerHTML;
  },
  play: () => {
    new accordion();
  },

  name: "Footer",
};
