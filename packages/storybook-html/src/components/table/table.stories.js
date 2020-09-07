import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './table.scss';

// import HTML template strings
import tableHTML from './table.html';
import tableFlexHTML from './table-flex.html';
import tableGridHTML from './table-grid.html';

// documentation
import docs from './table.docs.mdx';

export default {
  title: 'Components/Table',
  parameters: {
    docs: {
      page: docs
    }
  },
  //decorators: [expandedStory]
};

export const table = () => {
  return tableHTML;
};
table.story = {
  name: 'Table Scroll'
}

export const tableflex = () => {
  return tableFlexHTML;
};
tableflex.story = {
  name: 'Table Flex'
}

export const tablegrid = () => {
  return tableGridHTML;
};
tablegrid.story = {
  name: 'Table Grid'
}
