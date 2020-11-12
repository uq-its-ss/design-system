// uqTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#51247A',

  // Typography
  fontBase: '"Roboto", "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barSelectedColor: '#51247A',

  brandTitle: 'UQ Design System',
  brandUrl: 'https://uq.edu.au',
  brandImage: 'https://static.uq.net.au/v11/logos/corporate/uq-logo.svg',
});