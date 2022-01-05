// import styles
import './new-footer.scss';

// import HTML template strings
import footerHTML from './new-footer.html';

import docs from './new-footer.docs.mdx';

export default {
  title: 'Components/New Footer',
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

export const newFooter = () => {
  return footerHTML;
};
