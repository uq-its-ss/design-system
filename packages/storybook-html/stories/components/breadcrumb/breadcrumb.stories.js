// documentation
import docs from "./breadcrumb.docs.mdx";
import breadcrumbTwig from "./breadcrumb.twig";
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
        url: "/study",
      },
      {
        text: "Level two",
        url: "/study/level-two",
      },
      {
        text: "A really long title for an example of it running over two lines",
        url: "/study/lorem-ipsum/long",
      },
      {
        text: "Super-duper extra long page title as an example",
        url: "/study/lorem-ipsum/long",
      },
      {
        text: "How many words do to make this run over two lines",
        url: "/study/lorem-ipsum/long/how",
      },
      {
        text: "Another long page title that is long for no reason with words and things",
        url: "/study/lorem-ipsum/long/how/another-long",
      },
      {
        text: "Current page",
      },
    ],
  });
};
