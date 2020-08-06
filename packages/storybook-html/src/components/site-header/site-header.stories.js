import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './site-header.scss';

// import scripts
import siteHeaderNav from '@uq-uidf/site-header/src/js/site-header-navigation.es6';

// import HTML template strings
import siteHeaderHTML from './site-header.html';

import docs from './site-header.docs.mdx';

export default {
  title: 'Components/Site header',
  parameters: {
    docs: {
      page: docs
    }
  },
  decorators: [expandedStory]
};

export const siteHeader = () => {
  useEffect(() => {
      var navelement = document.getElementById("primary-nav");
      var nav = new siteHeaderNav(navelement, "nav");
    });
  return siteHeaderHTML;
};
