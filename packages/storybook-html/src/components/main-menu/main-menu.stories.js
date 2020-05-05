import { useEffect } from '@storybook/client-api';

// import styles
import './main-menu.scss';

// import scripts
import mainMenuCreate from '@uq-uidf/main-menu/src/js/main-menu.es6';

// import HTML template strings
import mainMenuHTML from './main-menu.html';

export default {
  title: 'Components/Main menu'
};

export const mainMenu = () => {
  useEffect(() => {
    new mainMenuCreate();  
  });
  return mainMenuHTML;
};

mainMenu.story = {
  name: "Default (JS)"
}
