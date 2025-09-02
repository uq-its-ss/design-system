import React, { type FC } from "react";
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

// Dummy Link component to demonstrate using different back components.
interface LinkProps {
  children: React.ReactNode;
};
const Link: FC<LinkProps> = ({ children }) => (
  <a href="#" onClick={(ev) => {
    alert("Custom component clicked.");
    ev.preventDefault();
  }}>
    {children}
  </a>
);

export const showcase = {
  render: () => (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "0px"
    }}>
      <Component
        eyebrow={undefined}
        title="Title Only"
        backText={undefined}
      />
      <Component
        eyebrow="With Eyebrow"
        title="Title"
        backText={undefined}
      />
      <Component
        eyebrow={undefined}
        title="Title"
        backText="Backwards navigation"
        backComponentProps={{
          href: "#",
          onClick: (ev: React.MouseEvent<HTMLAnchorElement>) => {
            alert("Back link clicked.");
            ev.preventDefault();
          }
        }}
      />
      <Component
        eyebrow="Custom back link component"
        title="Title"
        backText="Link text"
        backComponent={Link}
      />
    </div>
  ),
};

export const base = {};
