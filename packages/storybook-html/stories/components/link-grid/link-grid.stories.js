import classNames from "classnames";
import iconCatalog from "@uqds/icon";

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
    <ul class="uq-link-grid">${items}
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
