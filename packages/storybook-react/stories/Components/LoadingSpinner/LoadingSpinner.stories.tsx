import { Meta } from "@storybook/react";
import { LoadingSpinner as Component } from "@uqds/react/tsx";

export default {
  component: Component,
  args: {
    variant: "dark",
    size: "default",
  },
} satisfies Meta<typeof Component>;

export const base = {};
