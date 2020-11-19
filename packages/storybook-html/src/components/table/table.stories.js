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

table.storyName = 'Table Scroll';

export const tableClasses = () => {
  return tableClassesHTML;
};

tableClasses.storyName = 'Table with Classes Scroll';

export const tableMultipleHeaders = () => {
  return tableMultipleHeadersHTML;
};

tableMultipleHeaders.storyName= 'Table Multiple-Headers Scroll';

export const tableIrregularHeaders = () => {
  return tableIrregularHeadersHTML;
};

tableIrregularHeaders.storyName = 'Table Irregular-Headers Scroll';

export const tableMultiLevelHeaders = () => {
  return tableMultiLevelHeadersHTML;
};

tableMultiLevelHeaders.storyName = 'Table Multi-Level-Headers Scroll';

export const tableCard = () => {
  return tableCardHTML;
};

tableCard.storyName = 'Table Card';
