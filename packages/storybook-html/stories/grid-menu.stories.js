// import decorators
import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/grid-menu/grid-menu.scss';

// import HTML template strings
import allHTML from '../src/components/grid-menu/grid-menu.html';

export default {
  title: 'Grid menu'
};

export const all = () => {
  return namedSection('Grid menu', allHTML);
};
