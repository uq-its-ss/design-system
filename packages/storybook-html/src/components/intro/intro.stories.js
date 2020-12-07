import { useEffect } from '@storybook/client-api';

// import scripts
import header from '@uqds/header/src/js/header.es6';
import siteHeaderNav from '@uqds/site-header/src/js/site-header-navigation.es6';
import accordion from '@uqds/accordion/src/js/accordion.es6';
import gridMenuEqualiser from '@uqds/grid-menu/src/js/grid-menu';

// import HTML template strings
import kitchenSinkHTML from './kitchen-sink.html';

export default {
  title: 'Gallery & Examples/Kitchen sink',
  parameters: {
    layout: "fullscreen",
    viewMode: 'story',
    previewTabs: {
      'storybook/docs/panel': {hidden: true},
      canvas: {hidden: false}
    }
  }
};

export const kitchenSink = () => {
  useEffect(() => {
    new header();
    var navelement = document.getElementById("jsNav");
    var nav = new siteHeaderNav(navelement, "uq-site-header__navigation");
    new accordion();
    var equaliseGridMenu = new gridMenuEqualiser('.uq-grid-menu--equalised>a');
    equaliseGridMenu.align(); 
  });
  return kitchenSinkHTML;
};

kitchenSink.storyName = 'Kitchen sink';

kitchenSink.parameters = {
  docs: {
    page: null
  }
};
