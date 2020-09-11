// import styles
import './table.scss';

// import HTML template strings
import tableHTML from './table.html';
import tableMultipleHeadersHTML from './table-multiple-headers.html';
import tableIrregularHeadersHTML from './table-irregular-headers.html';
import tableMultiLevelHeadersHTML from './table-multi-level-headers.html';
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

export const tableMultipleHeaders = () => {
  return tableMultipleHeadersHTML;
};
tableMultipleHeaders.story = {
  name: 'Table Multiple-Headers Scroll'
}

export const tableIrregularHeaders = () => {
  return tableIrregularHeadersHTML;
};
tableIrregularHeaders.story = {
  name: 'Table Irregular-Headers Scroll'
}

export const tableMultiLevelHeaders = () => {
  return tableMultiLevelHeadersHTML;
};
tableMultiLevelHeaders.story = {
  name: 'Table Multi-Level-Headers Scroll'
}

export const tableCard = () => {
  return tableCardHTML;
};
tableCard.story = {
  name: 'Table Card'
}
