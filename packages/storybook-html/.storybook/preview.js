import { configure, addParameters } from '@storybook/html';
import { themes } from '@storybook/theming';

// Load core & body styles
import './preview.scss';

addParameters({
  options: {
    theme: themes.normal,
    showRoots: true
  }
});
