// import styles
import './tabs.scss';

// import HTML template strings
import tabsHTML from './tabs.html';

export default {
  title: 'Components/Tabs',
  parameters: {
    layout: "padded"
  }
};

export const all = () => {
  return tabsHTML;
};