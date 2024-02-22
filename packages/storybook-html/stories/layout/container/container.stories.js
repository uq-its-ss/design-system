import "../layout-demo.scss";
import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Layout/Container",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const Container = {
  render: () => `
<div class="uqds-layout-demo-bg">
  <div class="uq-container">
    <div class="uqds-layout-demo-el"></div>  
  </div>
</div>`,
};
