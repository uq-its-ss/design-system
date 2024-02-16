// import styles
import "./footer.scss";

// import HTML template strings
import footerHTML from "./footer.html";

export default {
  title: "Legacy/Footer",
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

export const footer = () => {
  return footerHTML;
};
