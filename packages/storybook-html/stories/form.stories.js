// import styles
import '../src/components/form/style.scss';

// import HTML template strings
import allHTML from '../src/components/form/all.html';
import inputHTML from '../src/components/form/input.html';
import textAreaHTML from '../src/components/form/text-area.html';
import selectHTML from '../src/components/form/select.html';

export default {
  title: 'Forms|Form'
};

export const all = () => {
  return document.createElement('div').innerHTML = allHTML;
};

export const input = () => {
  return document.createElement('div').innerHTML = inputHTML;
};

export const textArea = () => {
  return document.createElement('div').innerHTML = textAreaHTML;
};

export const select = () => {
  return document.createElement('div').innerHTML = selectHTML;
};

export const inputValidation = () => {
  return document.createElement('div');
};

export const inputValidationErrors = () => {
  return document.createElement('div');
};
