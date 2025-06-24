import { Meta } from "@storybook/react";
import { Hero as Component } from "@uqds/react/tsx";

export default {
  component: Component,
  args: {
    eyebrow: "Step 1 of 8",
    title: "Choose your program",
    back: "Postgraduate coursework",
    backOnClick: () => {
      alert("Back clicked.");
    }
  },
} satisfies Meta<typeof Component>;

export const base = {};
