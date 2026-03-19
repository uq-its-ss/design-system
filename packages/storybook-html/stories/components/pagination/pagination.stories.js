import { storyRenderer } from "../../../lib/storyRenderer";
import * as PaginationItemStories from "./paginationItem.stories";

const { Item, Ellipsis, Previous, Next } = storyRenderer(PaginationItemStories);

export default {
  title: "Components/Pagination/Pagination",
  argTypes: {
    element: {
      options: ["a", "button"],
      control: "select",
    },
  },
  args: {
    element: "a",
  },
};

export const Pagination = {
  render: ({ element }) => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Previous({ As: element })}
    ${Item({ As: element, number: 1 })}
    ${Ellipsis({ As: element, number: 2 })}
    ${Item({ As: element, number: 4 })}
    ${Item({ As: element, number: 5, current: true })}
    ${Item({ As: element, number: 6 })}
    ${Ellipsis({ As: element, number: 8 })}
    ${Item({ As: element, number: 13 })}
    ${Next({ As: element })}
  </ul>
</nav>`;
  },
};

export const AsButtons = {
  render: ({ element }) => {
    return `<nav class="uq-pagination" aria-label="Pagination">
  <ul class="uq-pagination__list">
    ${Previous({ As: element, href: null })}
    ${Item({ As: element, href: null, number: 1 })}
    ${Ellipsis({ As: element, href: null, number: 2 })}
    ${Item({ As: element, href: null, number: 4 })}
    ${Item({ As: element, href: null, number: 5, current: true })}
    ${Item({ As: element, href: null, number: 6 })}
    ${Ellipsis({ As: element, href: null, number: 8 })}
    ${Item({ As: element, href: null, number: 13 })}
    ${Next({ As: element, href: null })}
  </ul>
</nav>`;
  },
  args: {
    element: "button",
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
