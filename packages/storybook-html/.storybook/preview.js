import { configure, addParameters } from '@storybook/html';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.normal,
    showRoots: true
  }
});
