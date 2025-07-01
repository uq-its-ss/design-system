import React from "react";
import { Meta } from "@storybook/react";
import { Alert as Component, Button } from "@uqds/react/tsx";

export default {
  component: Component,
  args: {
    visible: true,
    variant: "info",
    global: false,
    title: "Short summary",
    children: "Message as JSX code",
    suffix: "Suffix content (intended to be JSX code for a button or link)",
  },
} satisfies Meta<typeof Component>;

export const showcase = {
  render: () => (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(200px, 1fr))",
      gap: "2rem"
    }}>
      <Component
        variant="info"
      >
        Info variant.
      </Component>
      <Component
        variant="warning"
      >
        Warning variant.
      </Component>
      <Component
        variant="error"
      >
        Error variant.
      </Component>
      <Component
        variant="success"
      >
        Success variant.
      </Component>

      <Component
        variant="info"
        global={true}
      >
        Global info variant.
      </Component>
      <Component
        variant="warning"
        global={true}
      >
        Global warning variant.
      </Component>
      <Component
        variant="error"
        global={true}
      >
        Global error variant.
      </Component>
      <Component
        variant="success"
        global={true}
      >
        Global success variant.
      </Component>

      <Component
        variant="info"
        suffix={<Button label="Learn more" onClick={() => alert('Button clicked')} />}
      >
        A button can be specified in the suffix.
      </Component>
      <Component
        variant="info"
        suffix={<a href="#">Learn more</a>}
      >
        A link can be specified in the suffix.
      </Component>
      <Component
        title="With title"
        variant="info"
      >
        If supplied, the title should be a very short summary of the message.
      </Component>
      <Component
        title="With HTML"
        variant="info"
      >
        The message <b>may</b> contain <i>HTML</i> but it is recommended that
        this be limited to simple formatting.
      </Component>
    </div>
  ),
};

export const base = {};
