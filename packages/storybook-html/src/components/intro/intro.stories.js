import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import scripts
import header from '@uq-uidf/header/src/js/header.es6';
import siteHeaderNav from '@uq-uidf/site-header/src/js/site-header-navigation.es6';
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
    var nav = new siteHeaderNav(navelement, "nav");
    new accordion();
    var equaliseGridMenu = new gridMenuEqualiser('.grid-menu--equalised>a');
    equaliseGridMenu.align(); 
  });
  return kitchenSinkHTML;
};
