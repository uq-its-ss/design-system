import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './main-menu.scss';

// import scripts
import mainMenuCreate from '@uqmchu/main-menu/src/js/main-menu.es6';

// import HTML template strings
import mainMenuHTML1 from './main-menu1.html';
import mainMenuHTML2 from './main-menu2.html';

export default {
  title: 'Components/Main menu',
  decorators: [expandedStory]
};

export const mainMenu = () => {
  useEffect(() => {
    new mainMenuCreate();
  });
  return `${mainMenuHTML1}<br/>${mainMenuHTML2}`;
};

mainMenu.story = {
  name: "Default (JS)"
}
