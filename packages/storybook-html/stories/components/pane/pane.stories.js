// import styles
import "./pane.scss";

// import HTML template strings
import paneHTML from "./pane.html";

export default {
  title: "Components/Pane",
  parameters: {
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const all = () => {
  return paneHTML;
};
