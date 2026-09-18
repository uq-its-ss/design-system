export default {
  title: "Components/Form/Input type/Label",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: false,
      },
    },
  },
  argTypes: {
    textLabel: {
      name: "textLabel",
      control: "text",
      description: "The text content of the label element.",
    },
    forIdentifier: {
      name: "forIdentifier",
      control: "text",
      description:
        "Properties used to identify the field in the DOM or during form submission",
      table: {
        category: "Identification", // Groups the toggle switch
      },
    },
    content: {
      name: "content",
      control: "text",
      description:
        "HTML content to wrap inside the <label> element (e.g. an input plus its text), used for implicit label association.",
    },
  },
  args: {
    textLabel: "Label Text",
    forIdentifier: "label-for",
  },
  render: ({ textLabel, forIdentifier }) => {
    return `
      <label for="${forIdentifier}">${textLabel}</label>
    `;
  },
};

// Explicit association: <label for="..."> paired with an input's id, elsewhere in the DOM.
export const Default = {
  argTypes: {
    content: { table: { disable: true } },
  },
};

// Implicit association: <label> wraps its content (e.g. an input and its text)
// directly, so no for/id pairing is required. A matching for/id can still be
// supplied alongside the wrapping for extra accessibility support, since some
// assistive technology relies on the for/id pairing even when the input is wrapped.
export const Implicit = {
  args: {
    content: '<input type="checkbox" id="label-for" /> Label Text',
  },
  argTypes: {
    textLabel: { table: { disable: true } },
  },
  render: ({ content, forIdentifier }) => `
    <label ${forIdentifier ? `for="${forIdentifier}"` : ""}>${content}</label>
  `,
};
