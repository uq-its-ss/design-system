// import decorators
import namedSection from '../src/decorators/section.js';

// define the uq-header custom component
import {defineCustomElements as defineUQFooter} from '@uq-uidf/footer-classic/component/dist/cjs/loader.cjs';
defineUQFooter();

// import styles
import '../src/components/footer-classic/style.scss';

// import HTML template strings
import footerHTML from '../src/components/footer-classic/footer.html';

export default {
  title: 'Components|Footer/Classic'
};

export const footer = () => {
  return namedSection('Footer (classic)', footerHTML);
};
