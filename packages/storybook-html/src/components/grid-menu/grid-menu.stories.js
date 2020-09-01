import { useEffect } from '@storybook/client-api';

// import styles
import './grid-menu.scss';

// import scripts
import gridMenuEqualiser from '@uq-uidf/grid-menu/src/js/grid-menu';

// import HTML template strings
import allHTML from './grid-menu.html';
import equalisedHTML from './grid-menu-equalised.html';

export default {
  title: 'Components/Grid menu'
};

export const all = () => {
  return allHTML;
};

// add more keywords
all.parameters = { notes: 'links'};


export const equalised = () => {
  useEffect(() => {
    var equaliseGridMenu = new gridMenuEqualiser('.grid-menu--equalised>a');
    equaliseGridMenu.align();
  });
  return equalisedHTML;
};

equalised.storyName = "Equalised (JS)";
