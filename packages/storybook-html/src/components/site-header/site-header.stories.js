import { useEffect } from '@storybook/client-api';

// import styles
import './site-header.scss';

// import scripts
import siteHeaderNav from '@uqds/site-header/src/js/site-header-navigation.es6';

// import HTML template strings
import siteHeaderHTML from './site-header.html';

import docs from './site-header.docs.mdx';

export default {
  title: 'Components/Site header',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "fullscreen",
    backgrounds: {
      values: [
        { name: 'UQ Neutral 1', value: '#D7D1CC' }
      ]
    },
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const siteHeader = () => {
  useEffect(() => {
      var navelement = document.getElementById("jsNav");
      var nav = new siteHeaderNav(navelement, "uq-site-header__navigation");
    });
  return siteHeaderHTML;
};

siteHeader.storyName = 'Site header';