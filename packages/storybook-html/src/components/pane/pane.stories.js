// import decorators
import namedSection from '../../decorators/section.js';

// import styles
import './pane.scss';

// import HTML template strings
import paneHTML from './pane.html';

export default {
  title: 'Components/Pane'
};

export const pane = () => {
  return namedSection('Pane', paneHTML);
};
