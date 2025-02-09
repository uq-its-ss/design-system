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
