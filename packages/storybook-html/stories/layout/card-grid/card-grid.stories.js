import "@uqds/layout/src/scss/main.scss";
import "../layout-demo.scss";

export default {
  title: "Layout/Card grid",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    target: {
      control: "select",
      options: ["1x", "2x", "3x", "4x"],
    },
    children: {
      control: "string",
    },
  },
};

export const OnePerRow = {
  name: "One per row",
  args: {
    target: "1x",
    children: `<div class="uqds-layout-demo-card"></div>`,
  },
  render: ({ target, children }) => `
<div class="uqds-layout-demo-bg">
  <div class="uq-container">
    <div class="uq-card-grid uq-card-grid--target-${target}">
      ${children}
    </div>
  </div>
</div>
`,
};

export const TwoPerRow = {
  ...OnePerRow,
  name: "Two per row",
  args: {
    target: "2x",
    children: `
<div class="uqds-layout-demo-card"></div>
<div class="uqds-layout-demo-card"></div>`,
  },
};

export const ThreePerRow = {
  ...OnePerRow,
  name: "Three per row",
  args: {
    target: "3x",
    children: `
<div class="uqds-layout-demo-card"></div>
<div class="uqds-layout-demo-card"></div>
<div class="uqds-layout-demo-card"></div>`,
  },
};

export const FourPerRow = {
  ...OnePerRow,
  name: "Four per row",
  args: {
    target: "4x",
    children: `
<div class="uqds-layout-demo-card"></div>
<div class="uqds-layout-demo-card"></div>
<div class="uqds-layout-demo-card"></div>
<div class="uqds-layout-demo-card"></div>`,
  },
};
