import classNames from "classnames";
import { Header } from "../components/header/header.stories";
import { footer } from "../components/footer/footer.stories";
import { breadcrumb } from "../components/breadcrumb/breadcrumb.stories";
import { Home as Hero } from "../components/hero/hero.stories";

export default {
  title: "Templates/Home",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
      "storybook/docs/panel": { hidden: true },
    },
    viewMode: "story",
  },
  argTypes: {
    showGrid: {
      control: "boolean",
    },
  },
  args: {
    showGrid: false,
  },
};

export const Home = {
  render: ({ showGrid }) => `
<div class="${classNames({ "uqds-layout-demo-bg": showGrid })}">
  ${Header()}
  ${breadcrumb()}
  <div class="uq-sections">
    ${Hero.render(Hero.args)}
    <div class="uq-container">
      <div class="uq-sections">
        <div class="uqds-layout-demo-el"></div> 
        <div class="uq-card-grid uq-card-grid--target-1x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
        <div class="uq-card-grid uq-card-grid--target-2x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
        <div class="uqds-layout-demo-el"></div>
        <div class="uq-card-grid uq-card-grid--target-3x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
        <div class="uqds-layout-demo-el"></div> 
        <div class="uq-card-grid uq-card-grid--target-4x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
      </div>
    </div>
  </div>
  ${footer()}
</div>`,
};
