import { useEffect } from "@storybook/addons";

// import styles
import "./header.scss";

// import scripts
import headerCreate from "@uqds/header-legacy/src/js/header";

// import HTML template strings
import headerHTML from "./header.html";
import headerNoLocalSearchHTML from "./header_no-local-search.html";

export default {
  title: "Legacy/Header",
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

export const header = () => {
  useEffect(() => {
    new headerCreate();
  });
  return headerHTML;
};

export const headerNoLocalSearch = {
  render: () => {
    useEffect(() => {
      new headerCreate();
    });
    return headerNoLocalSearchHTML;
  },

  name: "Header with global search only",
};
