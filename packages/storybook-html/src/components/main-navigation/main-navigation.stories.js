import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './main-navigation.scss';

// import scripts
import mainNavigationCreate from '@uq-uidf/main-navigation/src/js/main-navigation.es6';

// import HTML template strings
import mainNavigationHTML from './main-navigation.html';

export default {
  title: 'Components/Main navigation',
  decorators: [expandedStory]
};

export const mainNavigation = () => {
    useEffect(() => {
        var navelement = document.getElementById("primary-nav");
        var nav = new mainNavigationCreate (navelement, "nav");
      });
    return mainNavigationHTML;
};

mainNavigation.story = {
  name: "Main navigation" 
}