// import styles
import './style.scss';

// import HTML template strings
import allHTML from './all.html';
import tableHTML from './table.html';

export default {
  title: 'Typography/Body'
};

export const all = () => {
  return document.createElement('div').innerHTML = allHTML;
};

export const table = () => {
  return document.createElement('div').innerHTML = tableHTML;
};
