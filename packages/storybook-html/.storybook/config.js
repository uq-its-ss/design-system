import { configure, addParameters } from '@storybook/html';
import { themes } from '@storybook/theming';
import "../src/scss/main.scss";

addParameters({
  options: {
    theme: themes.normal
  }
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
