import "../layout-demo.scss";
import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Layout/Sections",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
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
