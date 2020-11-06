// YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#51247A',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'grey',
  barSelectedColor: '#51247A',
  barBg: '#F5F5F5',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'UQ Design System',
  brandUrl: 'https://uq.edu.au',
  brandImage: 'https://static.uq.net.au/v11/logos/corporate/uq-logo--reversed.svg',
});