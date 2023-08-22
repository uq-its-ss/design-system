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
    //console.log('JS importing');
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

// breadcrumb.storyName  = "Deafult";

// breadcrumb.args = {
//   breadcrumbs: [
//     {
//       "text": "Home",
//       "url": "https://www.uq.edu.au/"
//     },
//     {
//       "text": "Study",
//       "url": "/study"
//     },
//     {
//       "text": "Level two",
//       "url": "/study/level-two"
//     },
//     {
//       "text": "A really long title for an example of it running over two lines",
//       "url": "/study/lorem-ipsum/long"
//     },
//     {
//       "text": "Super-duper extra long page title as an example",
//       "url": "/study/lorem-ipsum/long"
//     },
//     {
//       "text": "How many words do to make this run over two lines",
//       "url": "/study/lorem-ipsum/long/how"
//     },
//     {
//       "text": "Another long page title that is long for no reason with words and things",
//       "url": "/study/lorem-ipsum/long/how/another-long"
//     },
//     {
//       "text": "Current page"
//     }
//   ]
// };

/* 
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
        <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a class="uq-breadcrumb__link" title="Home" href="/">Home</a>
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
*/
