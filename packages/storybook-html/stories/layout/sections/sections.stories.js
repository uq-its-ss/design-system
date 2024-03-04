import "@uqds/layout/src/scss/main.scss";
import "../layout-demo.scss";

export default {
  title: "Layout/Sections",
  parameters: {
    layout: "fullscreen",
  },
};

export const Sections = {
  render: () => `
<div class="uqds-layout-demo-bg">
  <div class="uq-container">
    <div class="uq-sections">
      <div class="uqds-layout-demo-el"></div> 
      <div class="uqds-layout-demo-el"></div> 
      <div class="uqds-layout-demo-el"></div> 
    </div>
  </div>
</div>`,
};
