// import styles
import './breadcrumb.scss';

// import HTML template strings
import breadcrumbHTML from './breadcrumb.html';

// documentation
import docs from './breadcrumb.docs.mdx';

export default {
  title: 'Components/Breadcrumb',
  parameters: {
    docs: {
      page: docs
    },
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const breadcrumbOneLevel = () => {
  return `
  <nav aria-label="breadcrumb">
    <ol class="uq-breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
      <li class="uq-breadcrumb__item uq-breadcrumb__item--home" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a class="uq-breadcrumb__link uq-breadcrumb__link--home" href="/">Home</a>
        <meta itemprop="position" content="1">
      </li>
    </ol>
  </nav>
  `;
};

breadcrumbOneLevel.storyName = 'Breadcrumb One Level';

export const breadcrumbMultiLevel = () => {
  return breadcrumbHTML;
};

breadcrumbMultiLevel.storyName = 'Breadcrumb Multi Level';

export const breadcrumbTrucation = () => {
  return `
  <nav aria-label="breadcrumb">
    <ol class="uq-breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
      <li class="uq-breadcrumb__item uq-breadcrumb__item--home" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a class="uq-breadcrumb__link uq-breadcrumb__link--home" href="/">Home</a>
        <meta itemprop="position" content="1">
      </li>
      <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a class="uq-breadcrumb__link" itemprop="item" href="/information-and-services">Information and services</a>
        <meta itemprop="position" content="2">
      </li>
      <li class="uq-breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a class="uq-breadcrumb__link" itemprop="item" href="/information-and-services/human-resources">Human resources for University of Queensland</a>
        <meta itemprop="position" content="3">
      </li>
    </ol>
  </nav>
  `;
};

breadcrumbTrucation.storyName = 'Breadcrumb Truncation';
