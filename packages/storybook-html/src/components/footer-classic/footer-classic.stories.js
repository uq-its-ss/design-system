// define the uq-header custom component
import {defineCustomElements as defineUQFooter} from '@uq-uidf/footer-classic/component/dist/cjs/loader.cjs';
defineUQFooter();

// import styles
import './style.scss';

// import HTML template strings
import footerHTML from './footer.html';

export default {
  title: 'Components/Footer/Classic'
};

export const footer = () => {
  return footerHTML;
};
