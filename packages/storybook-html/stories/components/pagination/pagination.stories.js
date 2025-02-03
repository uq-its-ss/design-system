export default {
  title: "Components/Pagination",
};

export const Pagination = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__previous">
        <span class="visually-hidden">Previous page</span>
        <span class="uq-icon uq-icon--standard--chevron-left"></span>
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 1
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__ellipsis">
        &hellip;
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 4
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__current" aria-current="page">
        <span class="visually-hidden">Page</span> 5
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 6
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__ellipsis">
        &hellip;
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 13
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__next">
        <span class="visually-hidden">Next page</span>
        <span class="uq-icon uq-icon--standard--chevron-right"></span>
      </a>
    </li>
  </ul>
</nav>`;
  },
};

export const AsButtons = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul>
    <li>
      <button href="#" class="uq-pagination__item uq-pagination__previous">
        <span class="visually-hidden">Previous page</span>
        <span class="uq-icon uq-icon--standard--chevron-left"></span>
      </button>
    </li>
    <li>
      <button href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 1
      </button>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__ellipsis">
        &hellip;
      </a>
    </li>
    <li>
      <button href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 4
      </button>
    </li>
    <li>
      <button href="#" class="uq-pagination__item uq-pagination__current" aria-current="page">
        <span class="visually-hidden">Page</span> 5
      </button>
    </li>
    <li>
      <button href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 6
      </button>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__ellipsis">
        &hellip;
      </a>
    </li>
    <li>
      <button href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 13
      </button>
    </li>
    <li>
      <button href="#" class="uq-pagination__item uq-pagination__next">
        <span class="visually-hidden">Next page</span>
        <span class="uq-icon uq-icon--standard--chevron-right"></span>
      </button>
    </li>
  </ul>
</nav>`;
  },
};

export const Previous = {
  render: () => {
    return `<a href="#" class="uq-pagination__item uq-pagination__previous">
  <span class="visually-hidden">Previous page</span>
  <span class="uq-icon uq-icon--standard--chevron-left"></span>
</a>`;
  },
};

export const Next = {
  render: () => {
    return `<a href="#" class="uq-pagination__item uq-pagination__next">
  <span class="visually-hidden">Previous page</span>
  <span class="uq-icon uq-icon--standard--chevron-right"></span>
</a>`;
  },
};

export const Current = {
  render: () => {
    return `<a href="#" class="uq-pagination__item uq-pagination__current" aria-current="page">
  <span class="visually-hidden">Page</span> 5
</a>`;
  },
};

export const Number = {
  render: () => {
    return `<a href="#" class="uq-pagination__item">
  <span class="visually-hidden">Page</span> 1
</a>`;
  },
};

export const Ellipsis = {
  render: () => {
    return `<span href="#" class="uq-pagination__item uq-pagination__ellipsis">
  &hellip;
</span>`;
  },
};

export const EllipsisLinked = {
  render: () => {
    return `<a href="#" class="uq-pagination__item uq-pagination__ellipsis">
  <span class="visually-hidden">Page 9</span>
  &hellip;
</span>`;
  },
};

export const PagesLessFirst = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__current" aria-current="page">
        <span class="visually-hidden">Page</span> 1
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 2
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 3
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 4
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__next">
        <span class="visually-hidden">Next page</span>
        <span class="uq-icon uq-icon--standard--chevron-right"></span>
      </a>
    </li>
  </ul>
</nav>`;
  },
};

export const PagesLessLast = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__previous">
        <span class="visually-hidden">Previous page</span>
        <span class="uq-icon uq-icon--standard--chevron-left"></span>
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 1
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 2
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 3
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__current" aria-current="page">
        <span class="visually-hidden">Page</span> 4
      </a>
    </li>
  </ul>
</nav>`;
  },
};

export const PagesLessMiddle = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__previous">
        <span class="visually-hidden">Previous page</span>
        <span class="uq-icon uq-icon--standard--chevron-left"></span>
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 1
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 2
      </a>
    </li>
    <li>
      <a href="#"  class="uq-pagination__item uq-pagination__current" aria-current="page">
        <span class="visually-hidden">Page</span> 3
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 4
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__next">
        <span class="visually-hidden">Next page</span>
        <span class="uq-icon uq-icon--standard--chevron-right"></span>
      </a>
    </li>
  </ul>
</nav>`;
  },
};

export const PagesMoreFirst = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__current" aria-current="page">
        <span class="visually-hidden">Page</span> 1
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 2
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 3
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 4
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 5
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__ellipsis">
        <span class="visually-hidden">Page 6</span>
        &hellip;
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 13
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__next">
        <span class="visually-hidden">Next page</span>
        <span class="uq-icon uq-icon--standard--chevron-right"></span>
      </a>
    </li>
  </ul>
</nav>`;
  },
};

export const PagesMoreLast = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__previous">
        <span class="visually-hidden">Previous page</span>
        <span class="uq-icon uq-icon--standard--chevron-left"></span>
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 1
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__ellipsis">
        <span class="visually-hidden">Page 8</span>
        &hellip;
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 9
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 10
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 11
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 12
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__current" aria-current="page">
        <span class="visually-hidden">Page</span> 13
      </a>
    </li>
  </ul>
</nav>`;
  },
};

export const PagesMoreMiddle = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__previous">
        <span class="visually-hidden">Previous page</span>
        <span class="uq-icon uq-icon--standard--chevron-left"></span>
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 1
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__ellipsis">
        <span class="visually-hidden">Page 5</span>
        &hellip;
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 7
      </a>
    </li>
    <li>
      <a href="#"  class="uq-pagination__item uq-pagination__current" aria-current="page">
        <span class="visually-hidden">Page</span> 8
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 9
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__ellipsis">
        <span class="visually-hidden">Page 11</span>
        &hellip;
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item">
        <span class="visually-hidden">Page</span> 13
      </a>
    </li>
    <li>
      <a href="#" class="uq-pagination__item uq-pagination__next">
        <span class="visually-hidden">Next page</span>
        <span class="uq-icon uq-icon--standard--chevron-right"></span>
      </a>
    </li>
  </ul>
</nav>`;
  },
};