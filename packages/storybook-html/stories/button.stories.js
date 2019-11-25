// import HTML template strings
import buttonsHTML from '../src/components/button/buttons.html';

export default {
  title: 'Button'
};

export const buttons = () => {
  return document.createElement('div').innerHTML = buttonsHTML;
};