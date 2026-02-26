import React from "react";
import { Meta } from "@storybook/react";
import { Icon as Component } from "@uqds/react/tsx";
import iconCatalog from "@uqds/icon";

const styles = {
  plain: {
    padding: "1ex",
  },
  dark: {
    backgroundColor: "black",
    color: "white",
    padding: "1ex",
  },
  uq: {
    backgroundColor: "#51247a", // purple-500
    color: "white",
    padding: "1ex",
  },
};

export default {
  component: Component,
  argTypes: {
    name: {
      control: "select",
      options: iconCatalog.map(
        (icon) => `${icon["category"]}--${icon["name"]}`,
      ),
    },
  },
  args: {
    name: "agriculture-and-environment--ecology-leaf",
  },
} satisfies Meta<typeof Component>;

export const showcase = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={styles.plain}>
        <Component name="social--email" variant="default" />
        <span>Default</span>
      </div>
      <div style={styles.plain}>
        <Component name="social--email" variant="light" />
        <span>Light</span>
      </div>
      <div style={styles.plain}>
        <Component name="social--email" variant="text" />
        <span>Text</span>
      </div>

      <div style={styles.dark}>
        <Component name="social--email" variant="default" />
        <span>Default</span>
      </div>
      <div style={styles.dark}>
        <Component name="social--email" variant="light" />
        <span>Light</span>
      </div>
      <div style={styles.dark}>
        <Component name="social--email" variant="text" />
        <span>Text</span>
      </div>

      <div style={styles.uq}>
        <Component name="social--email" variant="default" />
        <span>Default</span>
      </div>
      <div style={styles.uq}>
        <Component name="social--email" variant="light" />
        <span>Light</span>
      </div>
      <div style={styles.uq}>
        <Component name="social--email" variant="text" />
        <span>Text</span>
      </div>
    </div>
  ),
};

export const base = {};
