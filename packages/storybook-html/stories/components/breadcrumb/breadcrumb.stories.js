import { useEffect } from "@storybook/addons";

// import styles
import "./breadcrumb.scss";

// import HTML template strings
import breadcrumbHTML from "./breadcrumb.html";

// import scripts
import breadcrumbCreate from "@uqds/breadcrumb/src/js/breadcrumb";

// documentation
import docs from "./breadcrumb.docs.mdx";

export default {
  title: "Components/Breadcrumb",
  parameters: {
    docs: {
      page: docs,
    },
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const breadcrumb = () => {
  useEffect(() => {
    const breadcrumbDefault = document.querySelector(".uq-breadcrumb");
    new breadcrumbCreate(breadcrumbDefault);
  });
  return breadcrumbHTML;
};

breadcrumb.storyName = "Default";