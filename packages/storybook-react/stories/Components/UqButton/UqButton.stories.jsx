import { reactCardDecorator } from "../../../lib/decorators";
import iconCatalog from "@uqds/icon";
import {
  UqButton as Component,
  UqButtonStyle, UqButtonSize,
  UqIcon,
} from "@uqds/react/src/jsx/main";

export default {
  title: "Components/UqButton",
  component: Component,
  decorators: [reactCardDecorator],
  argTypes: {
    label: "text",
    style: {
      control: "select",
      options: ["Primary", "Secondary", "Tertiary"],
      mapping: {
        Primary: "",
        Secondary: "uq-button--secondary",
        Tertiary: "uq-button--tertiary",
      },
    },
    size: {
      control: "select",
      options: ["Tiny", "Small", "Default", "Large"],
      mapping: {
        Default: "",
        Tiny: "uq-button--tiny",
        Small: "uq-button--small",
        Large: "uq-button--large",
      },
    },
    expand: "boolean",
    icon: {
      options: iconCatalog.map((icon) => `${icon.category}--${icon.name}`),
      control: "select",
    },
  },
  args: {
    style: UqButtonStyle.primary,
    size: UqButtonSize.default,
    expand: false,
    label: "Button",
  },
};

export const UqButton = {};
