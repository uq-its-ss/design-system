// import styles
import "./previous-next.scss";

export default {
  title: "Components/Previous next",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
  args: {
    ariaLabel: "Page navigation",
    nextHref: "#",
    nextLabel: "Next",
    previousHref: "#",
    previousLabel: "Previous",
    useButton: false,
  },

  argTypes: {
    ariaLabel: {
      control: "text",
      description: "Accessible label for the navigation",
    },
    nextHref: {
      control: "text",
      description: "URL for the next link",
    },
    nextLabel: {
      control: "text",
      description: "Label for the next link",
    },
    previousHref: {
      control: "text",
      description: "URL for the previous link",
    },
    previousLabel: {
      control: "text",
      description: "Label for the previous link",
    },
    useButton: {
      control: "boolean",
      description: "Use button instead of anchor tag",
    },
  },

  render: ({ ariaLabel, nextHref, nextLabel, previousHref, previousLabel, useButton }) => {
    const nextElement = useButton
      ? `<button class="uq-button uq-button--link uq-icon uq-icon--standard--arrow-right">${nextLabel}</button>`
      : `<a class="uq-icon uq-icon--standard--arrow-right" href="${nextHref}">${nextLabel}</a>`;

    const previousElement = useButton
      ? `<button class="uq-button uq-button--link uq-icon uq-icon--standard--arrow-left">${previousLabel}</button>`
      : `<a class="uq-icon uq-icon--standard--arrow-left" href="${previousHref}">${previousLabel}</a>`;

    return `
      <nav class="uq-previous-next" aria-label="${ariaLabel}">
        <div class="uq-previous-next__item">
          ${nextElement}
        </div>

        <div class="uq-previous-next__item">
          ${previousElement}
        </div>
      </nav>
    `;
  },

  name: "Both previous and next",
};

export const PreviousNext = {};