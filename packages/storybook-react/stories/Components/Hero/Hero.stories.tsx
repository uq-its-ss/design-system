import { Meta } from "@storybook/react";
import { Hero as Component } from "@uqds/react/tsx";

export default {
  component: Component,
  args: {
    eyebrow: "Step 1 of 8",
    title: "Choose your program",
    backText: "Postgraduate coursework",
    backComponent: "a",
    backComponentProps: {
      href: "#",
      onClick: (ev: React.MouseEvent<HTMLAnchorElement>) => {
        alert("Back link clicked.");
        ev.preventDefault();
      },
    },
  },
} satisfies Meta<typeof Component>;

export const base = {};
