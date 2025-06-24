import { Meta } from "@storybook/react";
import iconCatalog from "@uqds/icon";
import { UqButton as Component } from "@uqds/react";

export default {
  component: Component,
  argTypes: {
    icon: {
      options: [
        "",
        ...iconCatalog.map((icon) => `${icon.category}--${icon.name}`),
      ],
      control: "select",
    },
  },
  args: {
    label: "Button",
    expand: false,
    spinner: false,
    disabled: false,
    onClick: () => alert("Button clicked"),
  },
} satisfies Meta<typeof Component>;

export const base = {};
