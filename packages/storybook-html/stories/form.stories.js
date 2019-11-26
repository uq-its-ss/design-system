// import styles
import '../src/components/form/style.scss';

// import HTML template strings
import textInputHTML from '../src/components/form/text-input.html';
import textAreaHTML from '../src/components/form/text-area.html';

export default {
  title: 'Form'
};

export const textInput = () => {
  return document.createElement('div').innerHTML = textInputHTML;
};

export const textArea = () => {
  return document.createElement('div').innerHTML = textAreaHTML;
};
