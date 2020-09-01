// import styles
import './page-header.scss';

// import HTML template strings
import pageHeaderHTML from './page-header.html';

// import Docs
import docs from './page-header.docs.mdx';

export default {
  title: 'Components/Page header',
  parameters: {
    docs: {
      page: docs
    },
    layout: "fullscreen"
  }
};

export const pageHeader = () => {
  return pageHeaderHTML;
};

pageHeader.storyName = 'All';
