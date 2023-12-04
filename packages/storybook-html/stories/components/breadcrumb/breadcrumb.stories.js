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

export const breadcrumbTruncation = () => {
  useEffect(() => {
    const breadcrumbTrunc = document.querySelector(".uq-breadcrumb--truncated");
    new breadcrumbCreate(breadcrumbTrunc);
  });
  return `
<nav class="uq-breadcrumb" aria-label="breadcrumb">
      <ol class="uq-breadcrumb__list">
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Home" href="/">Home</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Level one" href="/information-and-services">Level one</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Level two" href="/information-and-services/internet-and-wifi">Level two</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Bachelor of Business with a Major in Management or Finance" href="#">Bachelor of Business with a Major in Management or Finance</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Major Leadership and Management Science" href="#">Major Leadership and Management Science</a>
        </li>
        <li class="uq-breadcrumb__item">
          Current page
        </li>
      </ol>
    </nav>
  `;
};

breadcrumbTruncation.storyName = "Truncation";
