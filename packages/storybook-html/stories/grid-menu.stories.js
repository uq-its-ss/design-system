import { useEffect } from '@storybook/client-api';

// import decorators
import namedSection from '../src/decorators/section';

// import styles
import '../src/components/grid-menu/grid-menu.scss';

// import scripts
import gridMenuEqualiser from '@uq-uidf/grid-menu/src/js/grid-menu';

// import HTML template strings
import allHTML from '../src/components/grid-menu/grid-menu.html';
import equalisedHTML from '../src/components/grid-menu/grid-menu-equalised.html';

export default {
  title: 'Grid menu'
};

export const all = () => {
  return namedSection('Grid menu', allHTML);
};

all.story = {
  parameters: { notes: 'links'}
};

export const equalised = () => {
  useEffect(() => {
    var equaliseGridMenu = new gridMenuEqualiser('.grid-menu--equalised>a');
    equaliseGridMenu.align();
  });
  return namedSection('Using the equaliser script', equalisedHTML);
};
