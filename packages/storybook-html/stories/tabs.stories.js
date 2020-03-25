// import styles
import '../src/components/tabs/tabs.scss';

// import HTML template strings
import tabsHTML from '../src/components/tabs/tabs.html';

export default {
  title: 'Tabs'
};

export const tabs = () => {
  return document.createElement('div').innerHTML = tabsHTML;
};


