import { useEffect } from '@storybook/client-api';

// import styles
import './header.scss';

// import scripts
import headerCreate from '@uqds/header/src/js/header.es6';

// import HTML template strings
import headerHTML from './header.html';
import headerNoLocalSearchHTML from './header_no-local-search.html';

import docs from './header.docs.mdx';

export default {
  title: 'Components/Header',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "fullscreen",
    backgrounds: {
      default: 'UQ Neutral 1',
      values: [
        { name: 'UQ Neutral 1', value: '#D7D1CC' }
      ]
    }
  }
};

export const header = () => {
  useEffect(() => {
    new headerCreate();
  });
  return headerHTML;
};

export const headerNoLocalSearch = () => {
  useEffect(() => {
    new headerCreate();
  });
  return headerNoLocalSearchHTML;
};

headerNoLocalSearch.storyName = "Header with global search only";
