// import styles
import './table.scss';

// import HTML template strings
import tableHTML from './table.html';
import tableClassesHTML from './table-with-classes.html';
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
  previewTabs: {
    canvas: {hidden: false}
  }
};

export const table = () => {
  return tableHTML;
};
table.storyName = 'Table scroll with minimal classes';

export const tableClasses = () => {
  return tableClassesHTML;
};
tableClasses.storyName = 'Table scroll with classes';

export const tableMultipleHeaders = () => {
  return tableMultipleHeadersHTML;
};
tableMultipleHeaders.storyName= 'Table scroll with multiple headers';

export const tableIrregularHeaders = () => {
  return tableIrregularHeadersHTML;
};
tableIrregularHeaders.storyName = 'Table scroll with irregular headers';

export const tableMultiLevelHeaders = () => {
  return tableMultiLevelHeadersHTML;
};
tableMultiLevelHeaders.storyName = 'Table scroll with multi-level headers';

export const tableCard = () => {
  return tableCardHTML;
};
tableCard.storyName = 'Table card';
