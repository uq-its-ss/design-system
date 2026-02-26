import React from "react";
import { Meta } from "@storybook/react";
import iconCatalog from "@uqds/icon";
import { Button as Component } from "@uqds/react/tsx";

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

export const showcase = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
        justifyItems: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Component
        style="primary"
        label="Primary"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="secondary"
        label="Secondary"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="tertiary"
        label="Tertiary"
        onClick={() => alert("Button clicked")}
      />

      <Component
        style="primary"
        label="Pri Disabled"
        disabled={true}
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="secondary"
        label="Sec Disabled"
        disabled={true}
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="tertiary"
        label="Ter Disabled"
        disabled={true}
        onClick={() => alert("Button clicked")}
      />

      <Component
        style="primary"
        size="tiny"
        label="Pri Tiny"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="secondary"
        size="tiny"
        label="Sec Tiny"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="tertiary"
        size="tiny"
        label="Ter Tiny"
        onClick={() => alert("Button clicked")}
      />

      <Component
        style="primary"
        size="small"
        label="Pri Small"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="secondary"
        size="small"
        label="Sec Small"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="tertiary"
        size="small"
        label="Ter Small"
        onClick={() => alert("Button clicked")}
      />

      <Component
        style="primary"
        size="large"
        label="Pri Large"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="secondary"
        size="large"
        label="Sec Large"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="tertiary"
        size="large"
        label="Ter Large"
        onClick={() => alert("Button clicked")}
      />

      <Component
        style="primary"
        icon="education--mortarboard"
        label="Pri Icon"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="secondary"
        icon="education--mortarboard"
        label="Sec Icon"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="tertiary"
        icon="education--mortarboard"
        label="Ter Icon"
        onClick={() => alert("Button clicked")}
      />

      <Component
        style="primary"
        icon="education--mortarboard"
        spinner={true}
        label="Pri Spinner"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="secondary"
        icon="education--mortarboard"
        spinner={true}
        label="Sec Spinner"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="tertiary"
        icon="education--mortarboard"
        spinner={true}
        label="Ter Spinner"
        onClick={() => alert("Button clicked")}
      />

      <Component
        style="primary"
        expand={true}
        label="Pri Expanded"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="secondary"
        expand={true}
        label="Sec Expanded"
        onClick={() => alert("Button clicked")}
      />
      <Component
        style="tertiary"
        expand={true}
        label="Ter Expanded"
        onClick={() => alert("Button clicked")}
      />
    </div>
  ),
};

export const base = {};
