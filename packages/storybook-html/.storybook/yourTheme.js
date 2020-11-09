// YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2b2b2b',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'grey',
  barSelectedColor: '#51247A',
  barBg: '#F5F5F5',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#2b2b2b',
  inputBorderRadius: 4,

  brandTitle: 'UQ Design System',
  brandUrl: 'https://uq.edu.au',
  brandImage: 'https://static.uq.net.au/v11/logos/corporate/uq-logo.svg',
});