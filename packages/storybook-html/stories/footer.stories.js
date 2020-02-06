// define the uq-header custom component
import {defineCustomElements as defineUQFooter} from '@uq-uidf/footer/component/dist/cjs/loader.cjs';
defineUQFooter();

// import styles
import '../src/components/footer/style.scss';

// import HTML template strings
import footerHTML from '../src/components/footer/footer.html';

export default {
  title: 'Footer'
};

export const standardFooter = () => {
  return document.createElement('div').innerHTML = footerHTML;
};
