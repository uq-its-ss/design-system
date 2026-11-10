const exampleLinks = [
  {
    label: "Degrees and programs",
    href: "https://study.uq.edu.au/study-options/programs",
  },
  {
    label: "Browse study areas",
    href: "https://study.uq.edu.au/study-options/browse-study-areas",
  },
  { label: "Admissions", href: "https://study.uq.edu.au/admissions" },
  { label: "Short courses", href: "https://study.uq.edu.au/short-courses" },
  {
    label: "International students",
    href: "https://study.uq.edu.au/information-resources/international-students",
  },
  { label: "Events", href: "https://study.uq.edu.au/events" },
];

// Controls for example link N only appear when at least N links are shown
const linkArgTypes = Object.fromEntries(
  exampleLinks.flatMap((_, i) => [
    [
      `label${i + 1}`,
      {
        name: `Link ${i + 1} Label`,
        control: "text",
        if: { arg: "count", gte: i + 1 },
        table: { category: "Links" },
      },
    ],
    [
      `href${i + 1}`,
      {
        name: `Link ${i + 1} HREF`,
        control: "text",
        if: { arg: "count", gte: i + 1 },
        table: { category: "Links" },
      },
    ],
  ]),
);

const linkArgs = Object.fromEntries(
  exampleLinks.flatMap(({ label, href }, i) => [
    [`label${i + 1}`, label],
    [`href${i + 1}`, href],
  ]),
);

export default {
  title: "Components/Link Grid",
  render: (args) => {
    // Links beyond the sixth repeat the examples
    const items = Array.from({ length: args.count }, (_, i) => {
      const n = (i % exampleLinks.length) + 1;
      return `
      <li class="uq-link-grid__item">
        <a href="${args[`href${n}`]}" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
        ${args[`label${n}`]}
        </a>
      </li>`;
    }).join("");

    return `
    <ul class="uq-link-grid uq-grid uq-grid--3-column">${items}
    </ul>
    `;
  },
  argTypes: {
    count: {
      name: "Number of links",
      control: { type: "number", min: 1, max: 24, step: 1 },
    },
    ...linkArgTypes,
  },
  args: {
    count: 2,
    ...linkArgs,
  },
};

export const Primary = {};

export const WithCustomGrid = {
  args: {
    count: 4,
  },
};

export const WithCardGrid = {
  render: () => `
  <div>
    <ul class="uq-link-grid uq-card-grid uq-card-grid--target-3x">
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 1
        </a>
      </li>
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 2
        </a>
      </li>
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 3
        </a>
      </li>
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 4
        </a>
      </li>
    </ul>
  </div>
  `,
};

export const WithGlobalGrid = {
  render: () => `
  <div>
    <ul class="uq-link-grid uq-grid uq-grid--3-column">
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 1
        </a>
      </li>
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 2
        </a>
      </li>
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 3
        </a>
      </li>
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 4
        </a>
      </li>
    </ul>
  </div>
  `,
};
