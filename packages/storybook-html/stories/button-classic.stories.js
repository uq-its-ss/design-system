// import decorators
import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/button-classic/button-classic.scss';

// import HTML template strings
import buttonHTML from '../src/components/button-classic/button-classic.html';

export default {
  title: 'Components|Button/Classic'
};

export const button = () => {
  return namedSection('Buttons (deprecated)', buttonHTML);
};
