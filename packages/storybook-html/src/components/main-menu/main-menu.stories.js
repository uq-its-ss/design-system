import { useEffect } from '@storybook/client-api';

// import decorators
import namedSection from '../../decorators/section.js';

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
    var menu = new mainMenuCreate();  
  });
  const content = namedSection('Main menu', mainMenuHTML);
  content.classList.add('story-section--main-menu');
  return content;
};
