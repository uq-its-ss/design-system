// import decorators

import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/alert-classic/style.scss';

// import HTML template strings
import allHTML from '../src/components/alert-classic/all.html';

export default {
  title: 'Alert (deprecated)'
};

export const all = () => {
  return namedSection('Alerts', allHTML);
};
