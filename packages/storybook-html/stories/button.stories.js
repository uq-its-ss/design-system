// import styles
import '../src/components/button/button.scss';

// import HTML template strings
import buttonHTML from '../src/components/button/button.html';

export default {
  title: 'Button'
};

export const button = () => {
  return document.createElement('div').innerHTML = buttonHTML;
};