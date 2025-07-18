import { UqIcon as Component, UqIconVariant } from "@uqds/react/src/jsx/main";
import iconCatalog from "@uqds/icon";

export default {
  title: "Components/UqIcon",
  component: Component,
  argTypes: {
    name: {
      control: "select",
      options: iconCatalog.map(
        (icon) => `${icon["category"]}--${icon["name"]}`,
      ),
    },
    variant: {
      control: "select",
      options: Object.values(UqIconVariant),
    },
  },
  args: {
    name: "agriculture-and-environment--ecology-leaf",
  },
};

export const UqIcon = {};
