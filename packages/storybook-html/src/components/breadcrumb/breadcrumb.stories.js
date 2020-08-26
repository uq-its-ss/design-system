// import styles
import './breadcrumb.scss';

// import HTML template strings
import breadcrumbHTML from './breadcrumb.html';

// documentation
import docs from './breadcrumb.docs.mdx';

export default {
  title: 'Components/Breadcrumb',
  parameters: {
    docs: {
      page: docs
    }
  },
  //decorators: [expandedStory]
};

export const breadcrumb = () => {
  return breadcrumbHTML;
};
