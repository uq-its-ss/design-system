// import styles
import "./page-header.scss";

// import HTML template strings
import pageHeaderHTML from "./page-header.html";

// import Docs
import docs from "./page-header.mdx";

export default {
  title: "Components/Page header",
  parameters: {
    docs: {
      page: docs,
    },
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
