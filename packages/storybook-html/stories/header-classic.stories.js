// import decorators
import namedSection from '../src/decorators/section.js';

// define the uq-header custom component
import {defineCustomElements as defineUQHeader} from '@uq-uidf/header-classic/component/dist/cjs/loader.cjs';
defineUQHeader();

// import styles
import '../src/components/header-classic/style.scss';

// import HTML template strings
import headerHTML from '../src/components/header-classic/header.html';

export default {
  title: 'Components|Header/Classic'
};

export const header = () => {
  return namedSection('Header (classic)', headerHTML);
};
