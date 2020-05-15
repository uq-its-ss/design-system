import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './style.scss';

// import HTML template strings
import defaultHTML from './default.html';

export default {
  title: 'Components/Alert',
  decorators: [expandedStory]
};

export const all = () => {
  return defaultHTML;
};
