// import decorators
import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/breadcrumb/breadcrumb.scss';

// import HTML template strings
import breadcrumbHTML from '../src/components/breadcrumb/breadcrumb.html';

export default {
  title: 'Breadcrumb'
};

export const breadcrumb = () => {
  return namedSection('Breadcrumb', breadcrumbHTML);
};
