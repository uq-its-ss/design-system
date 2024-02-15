import classNames from "classnames";
import { Header } from "../components/header/header.stories";
import { footer } from "../components/footer/footer.stories";
import { breadcrumb } from "../components/breadcrumb/breadcrumb.stories";
import { Level2 as Hero } from "../components/hero/hero.stories";

export default {
  title: "Templates/Level 2",
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

export const Level2 = {
  render: ({ showGrid }) => `
<div class="${classNames({ "uqds-layout-demo-bg": showGrid })}">
  ${Header()}
  ${breadcrumb()}
  <div class="uq-sections">
    ${Hero.render(Hero.args)}
    <div class="uq-container">
      <div class="uq-sidebar-layout">
        <div class="uq-sidebar-layout__sidebar">
          <div class="uqds-layout-demo-el"></div> 
        </div>
        <div class="uq-sidebar-layout__main">
          <div class="uq-sections">
            <div class="uq-section">
              <div class="uq-section__header">
                <h2 class="uq-section__title">Title</h2>
                <div class="uq-section__description">
                  <p>Description</p>
                </div>
              </div>
              <div class="uq-card-grid uq-card-grid--target-1x">
                <div class="uqds-layout-demo-card"></div>
                <div class="uqds-layout-demo-card"></div>
              </div>
            </div>
            <div class="uq-section uq-section--shaded">
              <div class="uq-section__header">
                <h2 class="uq-section__title">Title</h2>
                <div class="uq-section__description">
                  <p>Description</p>
                </div>
              </div>
              <div class="uq-card-grid uq-card-grid--target-2x">
                <div class="uqds-layout-demo-card"></div>
                <div class="uqds-layout-demo-card"></div>
              </div>
            </div>
            <div class="uq-section">
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
                <div class="uqds-layout-demo-card"></div>
                <div class="uqds-layout-demo-card"></div>
                <div class="uqds-layout-demo-card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${footer()}
</div>`,
};
