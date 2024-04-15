import { layoutDecorator } from "../../../lib/decorators";
import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Layout/Sections",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [layoutDecorator],
};

export const Sections = {
  render: () => `
<div class="uq-container">
  <div class="uq-sections">
    <div class="uqds-layout-demo-el"></div> 
    <div class="uqds-layout-demo-el"></div> 
    <div class="uqds-layout-demo-el"></div> 
  </div>
</div>
`,
};
