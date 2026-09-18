import { storyRenderer } from "../../../lib/storyRenderer";
import * as CheckboxStories from "./checkbox.stories";
import * as LabelStories from "./label.stories";

const checkbox = storyRenderer(CheckboxStories);
const label = storyRenderer(LabelStories);

export default {
  title: "Components/Form/Examples",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: false,
      },
    },
  },
};

// Explicit association: separate <input> and <label for="...">, siblings.
// Input first, then label.
export const CheckboxWithLabel = {
  render: () => `
    ${checkbox.Default({ id: "subscribe", nameIdentifier: "subscribe", value: "yes" })}
    ${label.Default({ textLabel: "Subscribe to updates", forIdentifier: "subscribe" })}
  `,
};

// Implicit association: <label> wraps the <input>, with a matching for/id
// pair retained for extra accessibility support (some assistive tech relies
// on for/id even when the input is wrapped). Input first, then label text,
// to stay visually consistent with the explicit example.
export const CheckboxWithLabelImplicit = {
  render: () =>
    label.Implicit({
      forIdentifier: "subscribe",
      content: `
        ${checkbox.Default({ id: "subscribe", nameIdentifier: "subscribe", value: "yes" })}
        Subscribe to updates
      `,
    }),
};

// Group of checkboxes sharing one name, each with a distinct value, wrapped
// in a fieldset/legend. No wrapper element around each pair (can be added later).
export const CheckboxGroup = {
  render: () => `
    <fieldset>
      <legend>Areas of interest</legend>

      ${checkbox.Default({ id: "interest-research", nameIdentifier: "interest", value: "research" })}
      ${label.Default({ textLabel: "Research", forIdentifier: "interest-research" })}

      ${checkbox.Default({ id: "interest-teaching", nameIdentifier: "interest", value: "teaching" })}
      ${label.Default({ textLabel: "Teaching", forIdentifier: "interest-teaching" })}

      ${checkbox.Default({ id: "interest-industry", nameIdentifier: "interest", value: "industry" })}
      ${label.Default({ textLabel: "Industry engagement", forIdentifier: "interest-industry" })}

      ${checkbox.Default({ id: "interest-community", nameIdentifier: "interest", value: "community" })}
      ${label.Default({ textLabel: "Community outreach", forIdentifier: "interest-community" })}
    </fieldset>
  `,
};
