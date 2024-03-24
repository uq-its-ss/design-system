import { layoutDecorator } from "../../../lib/decorators";
import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Layout/Container",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: `<div class="uqds-layout-demo-el"></div>`,
  },
  decorators: [layoutDecorator],
};

export const Container = {
  render: ({ children }) => `
<div class="uq-container">
  ${children}
</div>
`,
};
