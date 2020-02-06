// define the uq-header custom component
import {defineCustomElements as defineUQHeader} from '@uq-uidf/header/component/dist/cjs/loader.cjs';
defineUQHeader();

// import styles
import '../src/components/header/style.scss';

// import HTML template strings
import headerHTML from '../src/components/header/header.html';

export default {
  title: 'Header'
};

export const standardHeader = () => {
  return document.createElement('div').innerHTML = headerHTML;
};
