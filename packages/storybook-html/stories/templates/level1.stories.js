import classNames from "classnames";
import { Header } from "../components/header/header.stories";
import { footer } from "../components/footer/footer.stories";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb.stories";
import { Level1 as Hero } from "../components/hero/hero.stories";
import "@uqds/layout/src/scss/main.scss";
import "@uqds/sections/src/scss/main.scss";

export default {
  title: "Templates/Level 1",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
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

export const Level1 = {
  render: ({ showGrid }) => `
<div class="${classNames({ "uqds-layout-demo-bg": showGrid })}">
  ${Header.render()}
  ${Breadcrumb.render()}
    ${Hero.render(Hero.args)}
    <div class="uq-container">
        <div class="uq-section">
        <div class="uqds-layout-demo-el"></div>
        </div>
        <div class="uq-section">
        <div class="uq-card-grid uq-card-grid--target-1x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
        </div>
        <div class="uq-section">
        <div class="uq-card-grid uq-card-grid--target-2x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
        </div>
        <div class="uq-section">
        <div class="uqds-layout-demo-el"></div>
        </div>
        <div class="uq-section">
        <div class="uq-card-grid uq-card-grid--target-3x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
        </div>
        <div class="uq-section">
        <div class="uqds-layout-demo-el"></div> 
        </div>
        <div class="uq-section">
        <div class="uq-card-grid uq-card-grid--target-4x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
      </div>
    </div>
  ${footer.render()}
</div>`,
};
