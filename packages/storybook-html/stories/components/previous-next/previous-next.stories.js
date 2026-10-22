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
    addMargin: false,
    previousText: "Previous",
    previousHref: "#",
    nextText: "Next",
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
    addMargin: {
      control: "boolean",
      description: "Add margin around the previous-next component",
    },
    previousHref: {
      control: "text",
      description: "URL for the previous link",
      table: {
        category: "Previous", // Groups the field
      },
    },
    previousText: {
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
    nextText: {
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
    previousText,
    nextHref,
    nextText,
    useButton,
    addMargin,
  }) => {
    const previousElement = useButton
      ? `<button class="uq-button uq-button--link uq-icon uq-icon--standard--arrow-left"><span class="uq-previous-next__text">${previousText}</span></button>`
      : `<a class="uq-icon uq-icon--standard--arrow-left" href="${previousHref}"><span class="uq-previous-next__text">${previousText}</span></a>`;

    const nextElement = useButton
      ? `<button class="uq-button uq-button--link uq-icon uq-icon--standard--arrow-right"><span class="uq-previous-next__text">${nextText}</span></button>`
      : `<a class="uq-icon uq-icon--standard--arrow-right" href="${nextHref}"><span class="uq-previous-next__text">${nextText}</span></a>`;

    // Determine which elements to show based on state
    const showNext = state === "initial" || state === "middle";
    const showPrevious = state === "middle" || state === "final";

    return `
      <nav class="uq-previous-next ${addMargin ? "uq-previous-next__margin" : ""}" aria-label="${ariaLabel}">
        ${showPrevious ? `<div class="uq-previous-next__item">${previousElement}</div>` : ""}
        ${showNext ? `<div class="uq-previous-next__item">${nextElement}</div>` : ""}
      </nav>
    `;
  },

  name: "Previous next navigation",
};
export const Default = {};

export const Initial = {
  args: {
    state: "initial",
    nextText: "Next",
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
    nextText: "Assessment",
    previousText: "Course overview",
  },
  name: "Labels (Middle state with custom labels)",
};
