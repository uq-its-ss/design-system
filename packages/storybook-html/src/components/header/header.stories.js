import { useEffect } from "@storybook/client-api";

// import styles
import "./header.scss";

// import scripts
import headerCreate from "@uqds/header/src/js/header";

// import HTML template strings
import HeaderHTML from "./header.html";

import docs from "./header.docs.mdx";

export default {
  title: "Components/Header",
  parameters: {
    docs: {
      page: docs,
      inlineStories: false,
    },
    layout: "fullscreen",
    backgrounds: {
      default: "UQ Neutral 1",
    },
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const Header = () => {
  useEffect(() => {
    new headerCreate();
  });
  return HeaderHTML;
};

Header.storyName = "Header";
