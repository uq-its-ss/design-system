export default {
  title: "Components/Form/Input type/Checkbox",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: false,
      },
    },
  },
  argTypes: {
    checked: {
      name: "checked",
      control: "boolean",
      description:
        "Determines whether the input is currently selected or active.",
      table: {
        category: "State", // Groups the toggle switch
      },
    },
    disabled: {
      name: "disabled",
      control: "boolean",
      description:
        "Disables the input, preventing user interaction and typically changing its visual styling to appear inactive.",
      table: {
        category: "State", // Groups the toggle switch
      },
    },
    required: {
      name: "required",
      control: "boolean",
      description:
        "Marks the field as mandatory, preventing form submission if the user leaves it unchecked or empty.",
      table: {
        category: "Validation & Accessibility", // Groups the toggle switch
      },
    },
    ariaInvalid: {
      name: "aria-invalid",
      control: "boolean",
      description:
        "Indicates the input field has an invalid value, typically used for form validation.",
      table: {
        category: "Validation & Accessibility", // Groups the toggle switch
      },
    },
    id: {
      name: "id",
      control: "text",
      description:
        "Specifies a unique identifier for the input element, useful for associating labels.",
      table: {
        category: "Identification", // Groups the toggle switch
      },
    },
    nameIdentifier: {
      name: "nameIdentifier",
      control: "text",
      description:
        "Properties used to identify the field in the DOM or during form submission",
      table: {
        category: "Identification", // Groups the toggle switch
      },
    },
    value: {
      name: "value",
      control: "text",
      description:
        "The value submitted for this checkbox when checked. Required to distinguish individual checkboxes that share the same name in a group.",
      table: {
        category: "Identification", // Groups the toggle switch
      },
    },
  },
  args: {
    checked: false,
    disabled: false,
    required: false,
    ariaInvalid: false,
    id: "checkbox-id",
    nameIdentifier: "checkbox-name",
    value: "",
  },
  render: ({
    checked,
    disabled,
    required,
    ariaInvalid,
    nameIdentifier,
    id,
    value,
  }) => {
    return `
      <input type="checkbox" ${id ? `id="${id}"` : ""} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} ${required ? "required" : ""} ${ariaInvalid ? 'aria-invalid="true"' : ""} name="${nameIdentifier}" ${value ? `value="${value}"` : ""} />
    `;
  },
};

export const Default = {};
