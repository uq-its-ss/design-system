import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import scripts
import header from '@uq-uidf/header/src/js/header.es6';
import mainNavigationCreate from '@uq-uidf/main-navigation/src/js/main-navigation.es6';
import accordion from '@uq-uidf/accordion/src/js/accordion.es6';
import gridMenuEqualiser from '@uq-uidf/grid-menu/src/js/grid-menu';

// import HTML template strings
import kitchenSinkHTML from './kitchen-sink.html';

export default {
  title: 'Introduction/Showcase',
  decorators: [expandedStory]
};

export const kitchenSink = () => {
  useEffect(() => {
    new header();
    var navelement = document.getElementById("primary-nav");
    var nav = new mainNavigationCreate (navelement, "nav");
    new accordion();
    var equaliseGridMenu = new gridMenuEqualiser('.grid-menu--equalised>a');
    equaliseGridMenu.align(); 
  });
  return kitchenSinkHTML;
};
