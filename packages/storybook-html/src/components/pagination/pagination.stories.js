// import styles
import './pagination.scss';

// import HTML template strings
import paginationHTML from './pagination.html';
//import paginationFirstHTML from './pagination-first.html';
//import paginationMiddleHTML from './pagination-middle.html';
//import paginationLastHTML from './pagination-last.html';
import docs from './pagination.docs.mdx';

export default {
  title: 'Components/Pagination',
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const pagination = () => {
  return document.createElement('div').innerHTML = paginationHTML;
};

pagination.story = {
  name: 'Pagination All'
}

export const paginationFirst = () => {
  return `
    <ul class="pagination">
      <li class="pagination__item pagination__item--first pagination__item--current"><a class="pagination__link" title="Go to page 1" href="#">1</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 2" href="#">2</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 3" href="#">3</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 4" href="#">4</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 5" href="#">5</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 6" href="#">6</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 7" href="#">7</a></li>
      <li class="pagination__ellipsis pagination__ellipsis--right">…</li>
      <li class="pagination__item pagination__item--go-next"><a class="pagination__link" title="Go to next page" href="#">next &rsaquo;</a></li>
      <li class="pagination__item pagination__item--go-last"><a class="pagination__link" title="Go to last page" href="#">last &raquo;</a></li>
    </ul>
  `;
};

paginationFirst.story = {
  name: 'Pagination First'
}

export const paginationMiddle = () => {
  return `
    <ul class="pagination">
      <li class="pagination__item pagination__item--go-first"><a class="pagination__link" title="Go to first page" href="#">&laquo; first</a></li>
      <li class="pagination__item pagination__item--go-previous"><a class="pagination__link" title="Go to previous page" href="#">&lsaquo; prev</a></li>
      <li class="pagination__ellipsis pagination__ellipsis--left">…</li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 8" href="#">8</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 9" href="#">9</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 10" href="#">10</a></li>
      <li class="pagination__item pagination__item--current"><a class="pagination__link" title="Go to page 11" href="#">11</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 12" href="#">12</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 13" href="#">13</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 14" href="#">14</a></li>
      <li class="pagination__ellipsis pagination__ellipsis--right">…</li>
      <li class="pagination__item pagination__item--go-next"><a class="pagination__link" title="Go to next page" href="#">next &rsaquo;</a></li>
      <li class="pagination__item pagination__item--go-last"><a class="pagination__link" title="Go to last page" href="#">last &raquo;</a></li>
    </ul>
  `;
};

paginationMiddle.story = {
  name: 'Pagination Middle'
}

export const paginationLast = () => {
  return `
    <ul class="pagination">
      <li class="pagination__item pagination__item--go-first"><a class="pagination__link" title="Go to first page" href="#">&laquo; first</a></li>
      <li class="pagination__item pagination__item--go-previous"><a class="pagination__link" title="Go to prev page" href="#">&lsaquo; prev</a></li>
      <li class="pagination__ellipsis pagination__ellipsis--left">…</li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 15" href="#">15</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 16" href="#">16</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 17" href="#">17</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 18" href="#">18</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 19" href="#">19</a></li>
      <li class="pagination__item"><a class="pagination__link" title="Go to page 20" href="#">20</a></li>
      <li class="pagination__item pagination__item--last pagination__item--current"><a class="pagination__link" title="Go to page 21" href="#">21</a></li>
    </ul>
  `;
};

paginationLast.story = {
  name: 'Pagination Last'
}
