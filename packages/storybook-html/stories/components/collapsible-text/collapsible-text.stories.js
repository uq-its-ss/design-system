import classNames from "classnames";
import { initJs } from "../../../lib/initJs";
import { collapsibleText } from "@uqds/collapsible-text/src/js/main";

export default {
  title: "Components/CollapsibleText",
  argTypes: {
    title: {
      control: "text",
    },
  },
  args: {
    title: "Title",
  },
  decorators: [
    (storyFn) =>
      initJs(storyFn, (component) => {
        new collapsibleText();
      }),
  ],
  render: ({
    title,
  }) => {
    return `
<div class="uq-collapsible-text">
collapsible-text
</div>
`;
  },
};

export const Default = {};
