// import styles
import './footer.scss';

// import HTML template strings
import footerHTML from './footer.html';

import docs from './footer.docs.mdx';

export default {
  title: 'Components/Footer',
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: 'UQ Neutral 1'
    },
    docs: {
      page: docs,
      inlineStories: false
    },
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const footer = () => {
  return footerHTML;
};
