// import styles
import './table.scss';

// import HTML template strings
import tableHTML from './table.html';
import tableCardHTML from './table-card.html';

// documentation
import docs from './table.docs.mdx';

export default {
  title: 'Components/Table',
  parameters: {
    docs: {
      page: docs
    },
    layout: 'padded'
  },
  //decorators: [expandedStory]
};

export const table = () => {
  return tableHTML;
};
table.story = {
  name: 'Table Scroll'
}

export const tablecard = () => {
  return tableCardHTML;
};
tablecard.story = {
  name: 'Table Card'
}
