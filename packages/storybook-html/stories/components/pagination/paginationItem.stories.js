export default {
  title: "Components/Pagination/PaginationItem",
  argTypes: {
    As: {
      control: "select",
      options: ["a", "button"],
    },
    number: {
      control: "text",
    },
    current: {
      control: "boolean",
    },
    href: {
      control: "text",
    },
    value: {
      control: "text",
    },
  },
  args: {
    As: "a",
    number: 1,
    current: false,
    href: "#",
    value: null,
  },
};

export const Item = {
  render: ({ As, number, current, href, value }) => `
    <li class="uq-pagination__list-item">
      <${As} ${href ? `href="${href}"` : ""} ${value ? `value="${value}"` : ""} class="uq-pagination__item${current ? ` uq-pagination__current` : ""}" ${current ? `aria-current="true"` : ""}>
        <span class="visually-hidden">Page</span> ${number}
      </${As}>
    </li>
  `,
};

export const Current = {
  ...Item,
  args: {
    current: true,
  },
};

export const Ellipsis = {
  render: ({ As, number, href, value }) => `
    <li class="uq-pagination__list-item">
      <${As} ${href ? `href="${href}"` : ""} ${value ? `value="${value}"` : ""} class="uq-pagination__item uq-pagination__ellipsis">
        <span class="visually-hidden">Skip to page ${number}</span>
        &hellip;
      </${As}>
    </li>
  `,
};

export const Previous = {
  render: ({ As, href, value }) => `
    <li class="uq-pagination__list-item">
      <${As} ${href ? `href="${href}"` : ""} ${value ? `value="${value}"` : ""} class="uq-pagination__item uq-pagination__previous">
        <span class="visually-hidden">Previous page</span>
        <span class="uq-icon uq-icon--standard--chevron-left"></span>
      </${As}>
    </li>
  `,
};

export const Next = {
  render: ({ As, href, value }) => `
    <li class="uq-pagination__list-item">
      <${As} ${href ? `href="${href}"` : ""} ${value ? `value="${value}"` : ""} class="uq-pagination__item uq-pagination__next">
        <span class="visually-hidden">Next page</span>
        <span class="uq-icon uq-icon--standard--chevron-right"></span>
      </${As}>
    </li>
  `,
};
