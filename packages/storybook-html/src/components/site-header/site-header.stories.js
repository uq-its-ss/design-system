import { useEffect } from '@storybook/client-api';

// import styles
import './site-header.scss';

// import scripts
import siteHeaderNav from '@uqds/site-header/src/js/site-header-navigation';

// import HTML template strings
import siteHeaderWithSubnavHTML from './site-header-with-subnav.html';
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

export const siteHeaderWithSubnav = () => {
  useEffect(() => {
      var navElem = document.getElementById("jsNav");
      new siteHeaderNav(navElem, "uq-site-header__navigation");
    });
  return siteHeaderWithSubnavHTML;
};

siteHeaderWithSubnav.storyName = 'With sub-navigation';

export const siteHeaderWithoutSubnav = () => {
  useEffect(() => {
      var navElem = document.getElementById("jsNav");
      new siteHeaderNav(navElem, "uq-site-header__navigation");
    });
  return siteHeaderWithoutSubnavHTML;
};

siteHeaderWithoutSubnav.storyName = 'Without sub-navigation';