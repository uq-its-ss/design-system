import { useEffect } from '@storybook/client-api';

// import styles
import '../src/components/tabs/tabs.scss';

// import scripts
//import tabsUqCreate from '@uq-uidf/tabs/src/js/tabs.js';

// import HTML template strings
import tabsHTML from '../src/components/tabs/tabs.html';

export default {
  title: 'Tabs'
};

export const tabs = () => {
  return document.createElement('div').innerHTML = tabsHTML;
};