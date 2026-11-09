export default {
  title: "Components/Link Grid",
  render: ({ label, count }) => {
    const items = Array.from(
      { length: count },
      (_, i) => `
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
        ${label} ${i + 1}
        </a>
      </li>`,
    ).join("");

    return `
    <ul class="uq-link-grid uq-grid uq-grid--3-column">${items}
    </ul>
    `;
  },
  argTypes: {
    label: { control: "text" },
    count: { control: { type: "number", min: 1, max: 24, step: 1 } },
  },
  args: {
    label: "Link Grid Item",
    count: 1,
  },
};

export const Primary = {};

export const WithCustomGrid = {
  args: {
    label: "Custom Grid Item",
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
