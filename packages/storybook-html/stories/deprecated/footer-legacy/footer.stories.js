// import styles
import "./footer.scss";

// import HTML template strings
import footerHTML from "./footer.html?raw";

export default {
  title: "Deprecated/Footer",

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

export const footer = () => {
  return footerHTML;
};
