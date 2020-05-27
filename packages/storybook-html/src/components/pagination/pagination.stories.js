// import styles
import './pagination.scss';

// import HTML template strings
import paginationHTML from './pagination.html';

export default {
  title: 'Components/Pagination'
};

export const pagination = () => {
  return document.createElement('div').innerHTML = paginationHTML;
};