import { useEffect } from "@storybook/addons";

// import styles
import "./breadcrumb.scss";

// import HTML template strings
import breadcrumbHTML from "./breadcrumb.html";

// import scripts
import breadcrumbCreate from "@uqds/breadcrumb/src/js/breadcrumb";

export default {
  title: "Components/Breadcrumb",
  parameters: {
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const breadcrumb = {
  render: () => {
    useEffect(() => {
      const breadcrumbDefault = document.querySelector(".uq-breadcrumb");
      new breadcrumbCreate(breadcrumbDefault);
    });
    return breadcrumbHTML;
  },

  name: "Default",
};
