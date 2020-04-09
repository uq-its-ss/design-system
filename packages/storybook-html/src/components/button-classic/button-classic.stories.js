// import decorators
import namedSection from '../../decorators/section.js';

// import styles
import './button-classic.scss';

// import HTML template strings
import buttonHTML from './button-classic.html';

export default {
  title: 'Components/Button/Classic'
};

export const button = () => {
  return namedSection('Buttons (deprecated)', buttonHTML);
};
