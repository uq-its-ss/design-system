// import styles
import './style.scss';

// import HTML template strings
import allHTML from './all.html';
import inputHTML from './input.html';
import textAreaHTML from './text-area.html';
import selectHTML from './select.html';

export default {
  title: 'Forms/Form'
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
