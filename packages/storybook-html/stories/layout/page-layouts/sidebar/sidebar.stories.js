import "@uqds/layout/src/scss/main.scss";
import "../../layout-demo.scss";

export default {
  title: "Layout/Page layouts/Sidebar",
  parameters: {
    layout: "fullscreen",
  },
};

export const Sidebar = {
  name: "Sidebar",
  render: () => `
<div class="uqds-layout-demo-bg">
  <div class="uq-container">
    <div class="uq-sidebar-layout">
      <div class="uq-sidebar-layout__sidebar">
        <div class="uqds-layout-demo-el"></div> 
      </div>
      <div class="uq-sidebar-layout__main">
        <div class="uq-sections">
          <div class="uqds-layout-demo-el"></div> 
        </div>
      </div>
    </div>
  </div>
</div>`,
};
