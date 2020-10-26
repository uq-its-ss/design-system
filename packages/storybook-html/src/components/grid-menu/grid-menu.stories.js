import { useEffect } from '@storybook/client-api';

// import styles
import './grid-menu.scss';

// import scripts
import gridMenuEqualiser from '@uqds/grid-menu/src/js/grid-menu';

// import docs
import docs from './grid-menu.docs.mdx';

// import HTML template strings
import gridMenuHTML from './grid-menu.html';
import gridMenuEqualisedHTML from './grid-menu-equalised.html';

export default {
  title: 'Components/Grid menu',
  parameters: {
    docs: {
      page: docs
    },
    layout: "padded"
  }
};

export const gridMenuAll = () => {
  return gridMenuHTML;
};

// add more keywords
gridMenuAll.parameters = { notes: 'links'};


export const equalised = () => {
  useEffect(() => {
    var equaliseGridMenu = new gridMenuEqualiser('.uq-grid-menu--equalised>a');
    equaliseGridMenu.align();
  });
  return gridMenuEqualisedHTML;
};

equalised.storyName = "Grid Menu Equalised (JS)";
