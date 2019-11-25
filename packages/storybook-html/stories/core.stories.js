// import component styles
import '../src/components/core/style.scss';

// import HTML template strings
import coloursHTML from '../src/components/core/colours.html';
import typoHTML from '../src/components/core/typography.html';
import blockquoteHTML from '../src/components/core/blockquote.html';

export default {
  title: 'Core'
};

export const colors = () => {
  return document.createElement('div').innerHTML = coloursHTML;
};

export const typography = () => {
  return document.createElement('div').innerHTML = typoHTML;
};

export const blockquote = () => {
  return document.createElement('div').innerHTML = blockquoteHTML;
};

export const icons = () => {
  return document.createElement('div');
};

export const forms = () => {
  return document.createElement('div');
};
