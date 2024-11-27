import { layoutDecorator } from "../../../../lib/decorators";
import { storyRenderer } from "../../../../lib/storyRenderer";
import * as StoryCardStories from "../../../components/story-card/story-card.stories";
import "@uqds/layout/src/scss/main.scss";

const { NewsCard, LandscapeCard, LandscapeNoImageCard, FeatureCard } =
  storyRenderer(StoryCardStories);

export default {
  title: "Layout/Page layouts/Sidebar right",
  parameters: {
    layout: "fullscreen",
  },
};

export const SidebarRight = {
  decorators: [layoutDecorator],
  render: () => `
<div class="uq-container">
  <div class="uq-sidebar-right-layout">
    <div class="uq-sidebar-right-layout__main">
      <div class="uqds-layout-demo-el"></div> 
    </div>
    <div class="uq-sidebar-right-layout__sidebar">
      <div class="uqds-layout-demo-el"></div> 
    </div>
  </div>
</div>
`,
};

export const NewsExample = {
  render: () => `
<div class="uq-container">
  <div class="uq-sidebar-right-layout">
    <div class="uq-sidebar-right-layout__main">
      <div class="uq-section">
        <div class="uq-card-grid">
          ${FeatureCard()}
          <div class="uq-card-grid uq-card-grid--target-2x">
            ${NewsCard()}
            ${NewsCard()}
            ${NewsCard()}
            ${NewsCard()}
          </div>
        </div>
      </div>
      <div class="uq-section">
        <div class="uq-section__header">
          <h2 class="uq-section__title">Science and technology news</h2>
        </div>
        <div class="uq-card-grid">
          ${LandscapeCard()}
          ${LandscapeCard()}
          ${LandscapeCard()}
          ${LandscapeCard()}
        </div> 
      </div>
    </div>
    <div class="uq-sidebar-right-layout__sidebar">
      <div class="uq-section">
        <div class="uq-section__header">
          <h2 class="uq-section__title">Editors' pick</h2>
        </div>
        <div class="uq-card-grid">
          ${LandscapeCard()}
          ${LandscapeCard()}
          ${LandscapeCard()}
          ${LandscapeCard()}
        </div>    
      </div>
      <div class="uq-section">
        <div class="uq-section__header">
          <h2 class="uq-section__title">More news</h2>
        </div>
        <div class="uq-card-grid">
          ${LandscapeNoImageCard()}
          ${LandscapeNoImageCard()}
          ${LandscapeNoImageCard()}
          ${LandscapeNoImageCard()}
        </div>
      </div>
      <div class="uq-section">
        <div class="uq-section__header">
          <h2 class="uq-section__title">Media</h2>
        </div>
        <div class="uq-card-grid uq-card-grid--target-2x">
          ${NewsCard()}
          ${NewsCard()}
        </div>
      </div>
    </div>
  </div>
</div>
`,
};
