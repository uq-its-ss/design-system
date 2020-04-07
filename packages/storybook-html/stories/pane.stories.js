// import decorators
import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/pane/pane.scss';

// import HTML template strings
import paneHTML from '../src/components/pane/pane.html';

export default {
  title: 'Components|Pane'
};

export const pane = () => {
  return namedSection('Pane', paneHTML);
};
