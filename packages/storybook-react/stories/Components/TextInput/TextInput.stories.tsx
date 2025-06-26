import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { TextInput as Component } from "@uqds/react/tsx";

export default {
  component: Component,
  args: {
    label: "Text Input",
    required: false,
    expand: false,
    disabled: false,
    onSubmit: () => alert("onSubmit called!"),
  },
} satisfies Meta<typeof Component>;

export const showcase = {
  render: () => {
    const [text, setText] = useState("");
    const [searchText, setSearchText] = useState("");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Component
          type="text"
          label="Full-Width Text Input"
          labelPlacement="top"
          placeholder="Type into this field to cause an error"
          feedback={text}
          feedbackState={text ? "error" : "hidden"}
          onChange={(text) => setText(text)}
          value={text}
        />
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <Component
            type="text"
            label="Inline Text Input 1"
            labelPlacement="inline"
            feedback="This is a feedback message, in the success state."
            feedbackState="success"
            placeholder="Placeholder text"
            required
            onSubmit={() => alert("onSubmit called!")}
          />
          <Component
            type="text"
            label="Inline Text Input 2"
            labelPlacement="inline"
            feedback="This is a long feedback message, in the error state, to demonstrate wrapping when long error messages end up in this field."
            feedbackState="error"
            placeholder="Placeholder text"
          />
          <Component
            type="text"
            label="Inline Text Input 3"
            labelPlacement="inline"
            placeholder="Plain state"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <Component
            type="text"
            label="Text Input 1"
            labelPlacement="top"
            feedback="This is a feedback message, in the success state."
            feedbackState="success"
            placeholder="Placeholder text"
            required
            onSubmit={() => alert("onSubmit called!")}
          />
          <Component
            type="text"
            label="Text Input 2"
            labelPlacement="top"
            feedback="This is a long feedback message, in the error state, to demonstrate wrapping when long error messages end up in this field."
            feedbackState="error"
            placeholder="Placeholder text"
          />
          <Component
            type="text"
            label="Text Input 3"
            labelPlacement="top"
            placeholder="Plain state"
          />
        </div>
        <Component
          type="search"
          labelPlacement="inline"
          placeholder="Text input, search type"
          onSubmit={() => alert("Search for: " + searchText)}
          onClear={() => setSearchText("")}
          onChange={(text) => setSearchText(text)}
          value={searchText}
        />
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <div style={{ width: "100%" }}>
            <Component
              type="text"
              label="Expanded Inline Text Input"
              labelPlacement="inline"
              feedback="This control should take up the full width available."
              feedbackState="success"
              placeholder="Placeholder"
              expand
              onSubmit={() => alert("onSubmit called!")}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const base = {};
