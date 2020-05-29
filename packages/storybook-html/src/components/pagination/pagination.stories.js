// import styles
import './pagination.scss';

// import HTML template strings
import paginationHTML from './pagination.html';
import paginationFirstStateHTML from './pagination-first-state.html';
import paginationLastStateHTML from './pagination-last-state.html';
import paginationMiddleStateHTML from './pagination-middle-state.html';

export default {
  title: 'Components/Pagination'
};

export const pagination = () => {
  return document.createElement('div').innerHTML = paginationHTML;
};

export const paginationFirstState = () => {
  return paginationFirstStateHTML;
};

export const paginationLastState = () => {
  return paginationLastStateHTML;
};

export const paginationMiddleState = () => {
  return paginationMiddleStateHTML;
};