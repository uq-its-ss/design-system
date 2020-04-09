// import decorators
import namedSection from '../../decorators/section.js';

// import styles
import './breadcrumb.scss';

// import HTML template strings
import breadcrumbHTML from './breadcrumb.html';

export default {
  title: 'Components/Breadcrumb'
};

export const breadcrumb = () => {
  return namedSection('Breadcrumb', breadcrumbHTML);
};
