// import decorators
import namedSection from '../../../.storybook/decorators/section.js';

// import styles
import './icon.scss';

// import HTML template strings
import iconHTML from './icon.html';

export default {
  title: 'Components/Icon'
};

export const icon = () => {
  return namedSection('Icon', iconHTML);
};