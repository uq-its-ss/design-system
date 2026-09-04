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
    state: "middle",
    ariaLabel: "Page navigation",
    previousLabel: "Previous",
    previousHref: "#",
    nextLabel: "Next",
    nextHref: "#",
    useButton: false,
  },

  argTypes: {
    state: {
      control: "select",
      options: ["initial", "middle", "final"],
      description:
        "Navigation state: initial (next only), middle (both), final (previous only)",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for the navigation",
    },
    previousHref: {
      control: "text",
      description: "URL for the previous link",
      table: {
        category: "Previous", // Groups the field
      },
    },
    previousLabel: {
      control: "text",
      description: "Label for the previous link",
      table: {
        category: "Previous", // Groups the field
      },
    },
    nextHref: {
      control: "text",
      description: "URL for the next link",
      table: {
        category: "Next", // Groups the field
      },
    },
    nextLabel: {
      control: "text",
      description: "Label for the next link",
      table: {
        category: "Next", // Groups the field
      },
    },
    useButton: {
      control: "boolean",
      description: "Use button instead of anchor tag",
      table: {
        category: "Link or Button", // Groups the field
      },
    },
  },

  render: ({
    state,
    ariaLabel,
    previousHref,
    previousLabel,
    nextHref,
    nextLabel,
    useButton,
  }) => {
    const previousElement = useButton
      ? `<button class="uq-button uq-button--link uq-icon uq-icon--standard--arrow-left">${previousLabel}</button>`
      : `<a class="uq-icon uq-icon--standard--arrow-left" href="${previousHref}">${previousLabel}</a>`;

    const nextElement = useButton
      ? `<button class="uq-button uq-button--link uq-icon uq-icon--standard--arrow-right">${nextLabel}</button>`
      : `<a class="uq-icon uq-icon--standard--arrow-right" href="${nextHref}">${nextLabel}</a>`;

    // Determine which elements to show based on state
    const showNext = state === "initial" || state === "middle";
    const showPrevious = state === "middle" || state === "final";

    return `
      <nav class="uq-previous-next" aria-label="${ariaLabel}">
        ${showPrevious ? `<div class="uq-previous-next__item">${previousElement}</div>` : ""}
        ${showNext ? `<div class="uq-previous-next__item">${nextElement}</div>` : ""}
      </nav>
    `;
  },

  name: "Previous next navigation",
};

export const Initial = {
  args: {
    state: "initial",
    nextLabel: "Next",
  },
  name: "Initial state (Next only)",
};

export const Middle = {
  args: {
    state: "middle",
  },
  name: "Middle state (Both)",
};

export const Final = {
  args: {
    state: "final",
  },
  name: "Final state (Previous only)",
};

export const WithButtons = {
  args: {
    state: "middle",
    useButton: true,
  },
  name: "With buttons (Middle state)",
};

export const Labels = {
  args: {
    state: "middle",
    useButton: true,
    nextLabel: "Assessment",
    previousLabel: "Course overview",
  },
  name: "Labels (Middle state with custom labels)",
};
