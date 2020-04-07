// import styles
import '../src/components/body/style.scss';

// import HTML template strings
import allHTML from '../src/components/body/all.html';
import tableHTML from '../src/components/body/table.html';

export default {
  title: 'Typography|Body'
};

export const all = () => {
  return document.createElement('div').innerHTML = allHTML;
};

export const table = () => {
  return document.createElement('div').innerHTML = tableHTML;
};
