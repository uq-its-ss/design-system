// import styles
import "./page-header.scss";

// import HTML template strings
import pageHeaderHTML from "./page-header.html?raw";

export default {
  title: "Components/Page header",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const pageHeader = {
  render: () => {
    return pageHeaderHTML;
  },

  name: "All",
};
