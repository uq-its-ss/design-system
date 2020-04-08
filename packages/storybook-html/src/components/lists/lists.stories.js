// import styles
import './lists.scss';

// import HTML template strings
import listsHTML from './lists.html';


export default {
  title: 'Components/Lists'
};

export const lists = () => {
  return document.createElement('div').innerHTML = listsHTML;
};
