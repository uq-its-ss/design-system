// import styles
import '../src/components/button/button.scss';

// import HTML template strings
import buttonHTML from '../src/components/button/button.html';
import iconButtonHTML from '../src/components/button/icon-button.html';

export default {
  title: 'Components|Button'
};

export const button = () => {
  return document.createElement('div').innerHTML = buttonHTML;
};

export const iconButton = () => {
  return document.createElement('div').innerHTML = iconButtonHTML;
};

