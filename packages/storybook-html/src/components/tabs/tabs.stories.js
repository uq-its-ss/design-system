// import decorators
import namedSection from '../../decorators/section.js';

// import styles
import './tabs.scss';

// import HTML template strings
import tabsHTML from './tabs.html';

export default {
  title: 'Components/Tabs'
};

export const all = () => {
  return namedSection("tabs", tabsHTML);
};