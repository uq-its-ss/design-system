import { useEffect } from '@storybook/client-api';

// import styles
import './new-header.scss';

// import scripts
import headerCreate from '@uqds/header/src/js/header';

// import HTML template strings
import newHeaderHTML from './new-header.html';

import docs from './new-header.docs.mdx';

export default {
  title: 'Components/New Header',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "fullscreen",
    backgrounds: {
      default: 'UQ Neutral 1'
    },
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const newHeader = () => {
  useEffect(() => {
    new headerCreate();
  });
  return newHeaderHTML;
};

newHeader.storyName = 'New Header';