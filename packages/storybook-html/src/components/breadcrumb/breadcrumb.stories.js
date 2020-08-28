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
    }
  }
};

export const breadcrumbOneLevel = () => {
  return `
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
      <li class="breadcrumb__item breadcrumb__item--home" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a class="breadcrumb__link breadcrumb__link--home" href="/">Home</a>
        <meta itemprop="position" content="1">
      </li>
    </ol>
  </nav>
  `;
};

breadcrumbOneLevel.story = {
  name: 'Breadcrumb One Level'
}

export const breadcrumbMultiLevel = () => {
  return breadcrumbHTML;
};

breadcrumbMultiLevel.story = {
  name: 'Breadcrumb Multi Level'
}

export const breadcrumbTrucation = () => {
  return `
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
      <li class="breadcrumb__item breadcrumb__item--home" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a class="breadcrumb__link breadcrumb__link--home" href="/">Home</a>
        <meta itemprop="position" content="1">
      </li>
      <li class="breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a class="breadcrumb__link" itemprop="item" href="/information-and-services">Information and services</a>
        <meta itemprop="position" content="2">
      </li>
      <li class="breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a class="breadcrumb__link" itemprop="item" href="/information-and-services/human-resources">Human resources</a>
        <meta itemprop="position" content="3">
      </li>
      <li class="breadcrumb__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" aria-current="page">
        <a class="breadcrumb__link" itemprop="item" href="/information-and-services/human-resources/hr-systems">Personal details and HR systems at University of Queensland</a>
        <meta itemprop="position" content="4">
      </li>
    </ol>
  </nav>
  `;
};

breadcrumbTrucation.story = {
  name: 'Breadcrumb Truncation'
}