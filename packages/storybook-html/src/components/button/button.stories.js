// import styles
import './button.scss';

// import HTML template strings
import buttonHTML from './button.html';
import iconButtonHTML from './icon-button.html';

export default {
  title: 'Components/Button'
};

export const button = () => {
  return buttonHTML;
};

export const iconButton = () => {
  return iconButtonHTML;
};
