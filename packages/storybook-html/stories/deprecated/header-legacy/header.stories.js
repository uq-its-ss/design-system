// import styles
import "./header.scss";

// import scripts
import headerCreate from "@uqds/header-legacy/src/js/header";

// import HTML template strings
import headerHTML from "./header.html";
import headerNoLocalSearchHTML from "./header_no-local-search.html";

export default {
  title: "Deprecated/Header",
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

export const header = {
  render: () => {
    return headerHTML;
  },
  play: () => {
    new headerCreate();
  },
};

export const headerNoLocalSearch = {
  render: () => {
    return headerNoLocalSearchHTML;
  },
  play: () => {
    new headerCreate();
  },

  name: "Header with global search only",
};
