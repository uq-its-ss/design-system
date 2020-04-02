//import { useEffect } from '@storybook/client-api';

// import styles
import '../src/components/tabs/tabs.scss';

// import scripts
//import tabsUqCreate from '@uq-uidf/tabs/src/js/tabsuq.js';
//import tabsQuickCreate from '@uq-uidf/tabs/src/js/tabsquick.js';

// import HTML template strings
import tabsHTML from '../src/components/tabs/tabs.html';
//import tabsQuickHTML from '../src/components/tabs/tabsquick.html';

export default {
  title: 'Tabs'
};

export const tabs = () => {
  return document.createElement('div').innerHTML = tabsHTML;
};
/*
export const tabsQuick = () => {
  return document.createElement('div').innerHTML = tabsQuickHTML;
};
*/