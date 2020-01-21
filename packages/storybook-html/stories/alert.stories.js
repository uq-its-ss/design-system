// import styles
import '../src/components/alert/style.scss';

// import HTML template strings
import allHTML from '../src/components/alert/all.html';

export default {
  title: 'Alert'
};

export const all = () => {
  return document.createElement('div').innerHTML = allHTML;
};
