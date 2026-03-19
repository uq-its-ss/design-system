import { copyButton } from "@uqds/button/src/js/copy-button";
import { initJs } from "../../../lib/initJs";

export default {
  title: "Components/CopyButton",
  decorators: [
    (storyFn) =>
      initJs(storyFn, (component) => {
        copyButton(component, component.dataset.copy);
      }),
  ],
  render: ({ label, stringToCopy }) => {
    return `<button class="uq-copy-button uq-button" data-copy="${stringToCopy}">${label}</button>`;
  },
  argTypes: {
    label: "text",
    stringToCopy: "text",
  },
  args: {
    label: "Copy article code",
    stringToCopy: "Article code!",
  },
};

export const CopyButton = {};
