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
<nav class="uq-breadcrumb uq-breadcrumb--truncated" aria-label="breadcrumb">
      <ol class="uq-breadcrumb__list">
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Home" href="https://www.uq.edu.au/">Home</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Study" href="/">Study</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Study options" href="/study-options">Study options</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Find a program" href="/study-options/programs">Find a program</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Bachelors of Computer Science / Business Management" href="/study-options/programs/bachelors-computer-science-business-management-2463">Bachelors of Computer Science / Business Management</a>
        </li>
        <li class="uq-breadcrumb__item">
        <span aria-current="page">Entry requirements</span>
        </li>
      </ol>
    </nav>
  `;
};

breadcrumbTruncation.storyName = "Truncation";
