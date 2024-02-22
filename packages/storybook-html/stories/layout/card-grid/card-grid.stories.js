import "../layout-demo.scss";
import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Layout/Card grid",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const OnePerRow = {
  name: "One per row",
  render: () => `
<div class="uqds-layout-demo-bg">
  <div class="uq-container">
    <div class="uq-card-grid uq-card-grid--target-1x">
      <div class="uqds-layout-demo-card"></div>
    </div>
  </div>
</div>
`,
};

export const TwoPerRow = {
  name: "Two per row",
  render: () => `
<div class="uqds-layout-demo-bg">
  <div class="uq-container">
    <div class="uq-card-grid uq-card-grid--target-2x">
      <div class="uqds-layout-demo-card"></div>
      <div class="uqds-layout-demo-card"></div>
    </div>
  </div>
</div>`,
};

export const ThreePerRow = {
  name: "Three per row",
  render: () => `
<div class="uqds-layout-demo-bg">
  <div class="uq-container">
    <div class="uq-card-grid uq-card-grid--target-3x">
      <div class="uqds-layout-demo-card"></div>
      <div class="uqds-layout-demo-card"></div>
      <div class="uqds-layout-demo-card"></div>
    </div>
  </div>
</div>`,
};

export const FourPerRow = {
  name: "Four per row",
  render: () => `
<div class="uqds-layout-demo-bg">
  <div class="uq-container">
    <div class="uq-card-grid uq-card-grid--target-4x">
      <div class="uqds-layout-demo-card"></div>
      <div class="uqds-layout-demo-card"></div>
      <div class="uqds-layout-demo-card"></div>
      <div class="uqds-layout-demo-card"></div>
    </div>
  </div>
</div>`,
};
