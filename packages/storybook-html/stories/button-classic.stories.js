// import decorators
import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/button-classic/button-classic.scss';

// import HTML template strings
import buttonHTML from '../src/components/button-classic/button-classic.html';

export default {
  title: 'Button (deprecated)'
};

export const button = () => {
  return namedSection('Buttons (deprecated)', buttonHTML);
};
