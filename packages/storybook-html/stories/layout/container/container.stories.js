import "@uqds/layout/src/scss/main.scss";
import "../layout-demo.scss";

export default {
  title: "Layout/Container",
  parameters: {
    layout: "fullscreen",
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
