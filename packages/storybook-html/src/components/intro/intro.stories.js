import { useEffect } from '@storybook/client-api';

// define the uq-header and uq-footer custom web component
import {defineCustomElements as defineUQHeader} from '@uq-uidf/header-classic/component/dist/cjs/loader.cjs';
import {defineCustomElements as defineUQFooter} from '@uq-uidf/footer-classic/component/dist/cjs/loader.cjs';
defineUQHeader();
defineUQFooter();

// import scripts
import mainMenu from '@uq-uidf/main-menu/src/js/main-menu.es6';
import accordion from '@uq-uidf/accordion/src/js/accordion.es6';
import gridMenuEqualiser from '@uq-uidf/grid-menu/src/js/grid-menu';

// import HTML template strings
import kitchenSinkHTML from './kitchen-sink.html';

export default {
  title: 'Introduction/Showcase'
};

export const kitchenSink = () => {
  useEffect(() => {
    var workingMainMenu = new mainMenu();
    var workingAccordions = new accordion();
    var equaliseGridMenu = new gridMenuEqualiser('.grid-menu--equalised>a');
    equaliseGridMenu.align(); 
  });
  return kitchenSinkHTML;
};
