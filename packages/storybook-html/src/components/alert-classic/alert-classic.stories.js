// import decorators

import namedSection from '../../decorators/section.js';

// import styles
import './style.scss';

// import HTML template strings
import allHTML from './all.html';

export default {
  title: 'Components/Alert/Classic'
};

export const all = () => {
  return namedSection('Alerts', allHTML);
};
