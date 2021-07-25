// import styles
import './loading-spinner.scss';

// import HTML template strings
import loadingSpinnerHTML from './loading-spinner.html';

// documentation
import docs from './loading-spinner.docs.mdx';

export default {
  title: 'Components/Loading spinner',
  parameters: {
    docs: {
      page: docs
    },
    layout: "padded",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const loadingSpinner = () => {
  return loadingSpinnerHTML;
};

loadingSpinner.storyName = 'Loading spinner';
