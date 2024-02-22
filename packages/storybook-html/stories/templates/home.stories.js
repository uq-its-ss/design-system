import classNames from "classnames";
import { Header } from "../components/header/header.stories";
import { footer } from "../components/footer/footer.stories";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb.stories";
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
  ${Breadcrumb.render()}
  <div class="uq-sections">
    ${Hero.render(Hero.args)}
    <div class="uq-section">
      <div class="uq-container">
        <div class="uq-card-grid uq-card-grid--target-1x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
      </div>
    </div>
    <div class="uq-section">
      <div class="uq-container">
        <div class="uq-card-grid uq-card-grid--target-2x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
      </div>
    </div>
    <div class="uq-section uq-section--shaded">
      <div class="uq-container">
        <div class="uq-section__header">
          <h2 class="uq-section__title">Title</h2>
          <div class="uq-section__description">
            <p>Description</p>
          </div>
        </div>
        <div class="uqds-layout-demo-el"></div> 
      </div>
    </div>
    <div class="uq-section">
      <div class="uq-container">
        <div class="uqds-layout-demo-el"></div> 
      </div>
    </div>
    <div class="uq-section">
      <div class="uq-container">
        <div class="uq-card-grid uq-card-grid--target-4x">
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
          <div class="uqds-layout-demo-card"></div>
        </div>
      </div>
    </div>
    <div class="uq-section uq-section--shaded">
      <div class="uq-container">
        <div class="uq-section__header">
          <h2 class="uq-section__title">Title</h2>
          <div class="uq-section__description">
            <p>Description</p>
          </div>
        </div>
        <div class="uq-card-grid uq-card-grid--target-3x">
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
