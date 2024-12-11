import { copyButton } from "@uqds/button/src/js/copy-button";

export default {
  title: "Components/CopyButton",
  render: ({ label, stringToCopy }) => {
    return `<button class="uq-copy-button uq-button" data-copy="${stringToCopy}">${label}</button>`;
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector(".uq-copy-button");
    copyButton(button, button.dataset.copy);
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
