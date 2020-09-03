import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './table.scss';

// import HTML template strings
import tableHTML from './table.html';

// documentation
//import docs from './table.docs.mdx';

export default {
  title: 'Components/Table',
  parameters: {
    /*docs: {
      page: docs
    }*/
  },
  //decorators: [expandedStory]
};

export const table = () => {
  return tableHTML;
};

table.story = {
  name: 'Table Simple'
}
