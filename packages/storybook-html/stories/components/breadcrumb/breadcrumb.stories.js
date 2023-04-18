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
      <ol class="uq-breadcrumb__list" itemscope="" itemtype="https://schema.org/BreadcrumbList">
        <li class="uq-breadcrumb__item uq-breadcrumb__item--home" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a class="uq-breadcrumb__link uq-breadcrumb__link--home" title="Home" href="/">Home</a>
          <meta itemprop="position" content="1">
        </li>
        <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a class="uq-breadcrumb__link" itemprop="item" title="Level one" href="/information-and-services">Level one</a>
          <meta itemprop="position" content="2">
        </li>
        <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a class="uq-breadcrumb__link" itemprop="item" title="Level two" href="/information-and-services/internet-and-wifi">Level two</a>
          <meta itemprop="position" content="3">
        </li>
        <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a class="uq-breadcrumb__link" itemprop="item" title="A really long page title" href="#">A really long page title</a>
          <meta itemprop="position" content="5">
        </li>
        <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a class="uq-breadcrumb__link" itemprop="item" title="Another really long title" href="#">Another really long title</a>
          <meta itemprop="position" content="6">
        </li>
        <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a class="uq-breadcrumb__link" itemprop="item" title="Bachelor of Business with a Major in Management or Finance" href="#">Bachelor of Business with a Major in Management or Finance</a>
          <meta itemprop="position" content="7">
        </li>
        <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a class="uq-breadcrumb__link" itemprop="item" title="Major Leadership and Management Science" href="#">Major Leadership and Management Science</a>
          <meta itemprop="position" content="8">
        </li>
        <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          Welcome to the Kitchen Sink page
          <meta itemprop="position" content="9">
        </li>
      </ol>
    </nav>
  `;
};

breadcrumbTruncation.storyName = "Truncation";
