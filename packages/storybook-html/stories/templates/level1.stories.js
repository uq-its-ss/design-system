import classNames from "classnames";
import { storyRenderer } from "../../lib/storyRenderer";
import * as SkipLinksStories from "../components/body/skip-links.stories";
import * as HeaderStories from "../components/header/header.stories";
import * as FooterStories from "../components/footer/footer.stories";
import * as BreadcrumbStories from "../components/breadcrumb/breadcrumb.stories";
import * as HeroStories from "../components/hero/hero.stories";

const { SkipLinks } = storyRenderer(SkipLinksStories);
const { Header } = storyRenderer(HeaderStories);
const { Breadcrumb } = storyRenderer(BreadcrumbStories);
const { Hero } = storyRenderer(HeroStories);
const { Footer: footer } = storyRenderer(FooterStories);

export default {
  title: "Templates/Level 1",
  tags: ["!autodocs"],
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
<div class="${classNames({ "uqds-layout-preview": showGrid })}">
  ${SkipLinks()}
  ${Header()}
  <main id="uq-main">
    ${Breadcrumb({ showLevels: 0, currentPage: "Level 1" })}
    ${Hero()}
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
  </main>
  ${footer()}
</div>`,
};
