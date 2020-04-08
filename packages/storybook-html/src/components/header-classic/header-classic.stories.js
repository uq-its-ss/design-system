// import decorators
import namedSection from '../../decorators/section.js';

// define the uq-header custom component
import {defineCustomElements as defineUQHeader} from '@uq-uidf/header-classic/component/dist/cjs/loader.cjs';
defineUQHeader();

// import styles
import './style.scss';

// import HTML template strings
import headerHTML from './header.html';

export default {
  title: 'Components/Header/Classic'
};

export const header = () => {
  return namedSection('Header (classic)', headerHTML);
};
