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

export const Default = {};
