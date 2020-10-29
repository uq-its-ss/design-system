// import styles
import './icon.scss';

// import HTML template strings
import iconHTML from './icon.html';

export default {
  title: 'Components/Icon',
  parameters: {
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const icon = () => {
  return iconHTML;
};
