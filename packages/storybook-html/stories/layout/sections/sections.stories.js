import docs from "./sections.docs.mdx";
import "../layout-demo.scss";
import "../../../../layout/src/scss/main.scss";

export default {
  title: "Layout/Sections",
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
