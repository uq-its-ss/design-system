import { createButton } from "./button";

export default {
  title: "Components/Button",
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    label: { control: "text" },
    style: {
      control: { type: "radio" },
      options: {
        Primary: "",
        Secondary: "uq-button--secondary",
        Tertiary: "uq-button--tertiary",
      },
      //options: ['small', 'medium', 'large'],
    },
    size: {
      control: { type: "inline-radio" },
      options: {
        default: "",
        tiny: "uq-button--tiny",
        small: "uq-button--small",
        large: "uq-button--large",
      },
      //options: ['small', 'medium', 'large'],
    },
    expand: { control: "boolean" },
  },
};

export const Primary = {
  args: {
    label: "Button",
    style: "",
    size: "",
    expand: false,
  },
};

export const Secondary = {
  args: {
    label: "Secondary",
    style: "uq-button--secondary",
  },
};

export const Tertiary = {
  args: {
    label: "Tertiary",
    style: "uq-button--tertiary",
  },
};

export const Size = {
  args: {
    buttons: [{ ...createButton.Primary }, { ...createButton.Secondary }],
    orientation: "horizontal",
  },
  render: () => {
    return `
    <button type="button" class="uq-button uq-button--tiny">Tiny</button>
    <button type="button" class="uq-button uq-button--small">Small</button>
    <button type="button" class="uq-button">Default</button>
    <button type="button" class="uq-button uq-button--large">Large</button>
    `;
  },
};

export const Expanded = {
  args: {
    expand: true,
    label: "Button",
  },
};
