// import styles
import './loading-spinner.scss';

// import HTML template strings
import loadingSpinnerHTML from './loading-spinner.html';
import loadingSpinnerLightHTML from './loading-spinner-light.html';
import loadingSpinnerSmallHTML from './loading-spinner-small.html';

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

loadingSpinner.storyName = 'Default';

export const loadingSpinnerLight = () => {
  return loadingSpinnerLightHTML;
}

loadingSpinnerLight.storyName = 'Light';
loadingSpinnerLight.parameters = {
  docs: {
    inlineStories: false
  },
  backgrounds: {
    default: 'Purple',
    values: [
      {
        name: 'Purple',
        value: '#51247A',
      }
    ]
  }
};

export const loadingSpinnerSmall = () => {
  return loadingSpinnerSmallHTML;
}

loadingSpinnerSmall.storyName = 'Small';
