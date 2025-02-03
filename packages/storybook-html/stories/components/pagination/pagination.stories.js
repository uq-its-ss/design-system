import { storyRenderer } from "../../../lib/storyRenderer";
import * as PaginationItemStories from "./paginationItem.stories";

const { Item, Ellipsis, Previous, Next } = storyRenderer(PaginationItemStories);

export default {
  title: "Components/Pagination/Pagination",
};

export const Pagination = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Previous()}
    ${Item({ number: 1 })}
    ${Ellipsis({ number: 2 })}
    ${Item({ number: 4 })}
    ${Item({ number: 5, current: true })}
    ${Item({ number: 6 })}
    ${Ellipsis({ number: 8 })}
    ${Item({ number: 13 })}
    ${Next()}
  </ul>
</nav>`;
  },
};

export const AsButtons = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Previous({ As: "button", href: null })}
    ${Item({ As: "button", href: null, number: 1 })}
    ${Ellipsis({ As: "button", href: null, number: 2 })}
    ${Item({ As: "button", href: null, number: 4 })}
    ${Item({ As: "button", href: null, number: 5, current: true })}
    ${Item({ As: "button", href: null, number: 6 })}
    ${Ellipsis({ As: "button", href: null, number: 8 })}
    ${Item({ As: "button", href: null, number: 13 })}
    ${Next({ As: "button", href: null })}
  </ul>
</nav>`;
  },
};

export const PagesLessFirst = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Item({ number: 1, current: true })}
    ${Item({ number: 2 })}
    ${Item({ number: 3 })}
    ${Item({ number: 4 })}
    ${Item({ number: 5 })}
    ${Next()}
  </ul>
</nav>`;
  },
};

export const PagesLessLast = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Previous()}
    ${Item({ number: 1 })}
    ${Item({ number: 2 })}
    ${Item({ number: 3 })}
    ${Item({ number: 4 })}
    ${Item({ number: 5, current: true })}
  </ul>
</nav>`;
  },
};

export const PagesLessMiddle = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Previous()}
    ${Item({ number: 1 })}
    ${Item({ number: 2 })}
    ${Item({ number: 3, current: true })}
    ${Item({ number: 4 })}
    ${Item({ number: 5 })}
    ${Next()}
  </ul>
</nav>`;
  },
};

export const PagesMoreFirst = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Item({ number: 1, current: true })}
    ${Item({ number: 2 })}
    ${Item({ number: 3 })}
    ${Item({ number: 4 })}
    ${Ellipsis({ number: 4 })}
    ${Item({ number: 13 })}
    ${Next()}
  </ul>
</nav>`;
  },
};

export const PagesMoreLast = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Previous()}
    ${Item({ number: 1 })}
    ${Ellipsis({ number: 10 })}
    ${Item({ number: 10 })}
    ${Item({ number: 11 })}
    ${Item({ number: 12 })}
    ${Item({ number: 13, current: true })}
  </ul>
</nav>`;
  },
};

export const PagesMoreMiddle = {
  render: () => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Previous()}
    ${Item({ number: 1 })}
    ${Ellipsis({ number: 5 })}
    ${Item({ number: 7 })}
    ${Item({ number: 8, current: true })}
    ${Item({ number: 9 })}
    ${Ellipsis({ number: 11 })}
    ${Item({ number: 13 })}
    ${Next()}
  </ul>
</nav>`;
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
