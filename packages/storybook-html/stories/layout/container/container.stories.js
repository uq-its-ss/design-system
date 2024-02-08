import docs from "./container.docs.mdx";
import "../layout-demo.scss";
import "../../../../layout/src/scss/main.scss";

export default {
  title: "Layout/Container",
  parameters: {
    layout: "fullscreen",
    docs: {
      page: docs,
    },
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
