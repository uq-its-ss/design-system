// import scripts
import { accordion } from "@uqds/accordion/src/js/main";

// import styles
import "./footer.scss";

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
  render: () => {
    return footerHTML;
  },
  play: () => {
    new accordion();
  },

  name: "Footer",
};
