import { useEffect } from '@storybook/client-api';

// import styles
import './side-nav.scss';

// import HTML template strings
import sideNavHTML from './side-nav.html';

import docs from './side-nav.docs.mdx';

export default {
  title: 'Components/Side nav',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "padded",
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

export const sideNav = () => {
  return sideNavHTML;
};

sideNav.storyName = 'Side nav';
