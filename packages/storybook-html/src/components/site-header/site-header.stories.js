import { useEffect } from '@storybook/client-api';

// import styles
import './site-header.scss';

// import scripts
import siteHeaderNav from '@uqds/site-header/src/js/site-header-navigation';

// import HTML template strings
import siteHeaderHTML from './site-header.html';
import siteHeaderWithoutSubnavHTML from './site-header-without-subnav.html';

import docs from './site-header.docs.mdx';

export default {
  title: 'Components/Site header',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "fullscreen",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const siteHeader = () => {
  useEffect(() => {
      var navelement = document.getElementById("jsNav");
      new siteHeaderNav(navelement, "uq-site-header__navigation");
    });
  return siteHeaderHTML;
};

siteHeader.storyName = 'Site header with sub-navigation';

export const siteHeaderWithoutSubnav = () => {
  useEffect(() => {
      var navelement = document.getElementById("jsNav");
      new siteHeaderNav(navelement, "uq-site-header__navigation");
    });
  return siteHeaderWithoutSubnavHTML;
};

siteHeaderWithoutSubnav.storyName = 'Site header without sub-navigation';