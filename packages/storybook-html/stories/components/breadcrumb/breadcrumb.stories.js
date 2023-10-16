// documentation
import docs from "./breadcrumb.docs.mdx";
import breadcrumbTwig from "./breadcrumb.html.twig";
import { useEffect } from "@storybook/addons";

// import styles
import "@uqds/breadcrumb/src/scss/_component.scss";
// import scripts
import breadcrumbCreate from "@uqds/breadcrumb/src/js/breadcrumb.js";

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
    const breadcrumbElem = document.querySelector(".uq-breadcrumb");
    new breadcrumbCreate(breadcrumbElem);
  });
  return breadcrumbTwig({
    breadcrumbs: [
      {
        text: "Home",
        url: "https://www.uq.edu.au/",
      },
      {
        text: "Study",
        url: "/",
      },
      {
        text: "Study options",
        url: "/study-options",
      },
      {
        text: "Find a program",
        url: "/study-options/programs",
      },
      {
        text: "Bachelors of Computer Science / Business Management",
        url: "/study-options/programs/bachelors-computer-science-business-management-2463",
      },
      {
        text: "Entry requirements",
      },
    ],
  });
};
