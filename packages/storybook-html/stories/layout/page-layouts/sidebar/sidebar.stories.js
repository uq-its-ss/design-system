import { layoutDecorator } from "../../../../lib/decorators";
import { storyRenderer } from "../../../../lib/storyRenderer";
import * as LocalNavStories from "../../../components/navigation/local-nav/local-nav.stories";
import * as CardGridStories from "../../card-grid/card-grid.stories";
import "@uqds/layout/src/scss/main.scss";

const { LocalNav } = storyRenderer(LocalNavStories);
const { CardsExample } = storyRenderer(CardGridStories);

export default {
  title: "Layout/Page layouts/Sidebar",
  parameters: {
    layout: "fullscreen",
  },
};

export const Sidebar = {
  decorators: [layoutDecorator],
  render: () => `
<div class="uq-container">
  <div class="uq-sidebar-layout">
    <div class="uq-sidebar-layout__sidebar">
      <div class="uqds-layout-demo-el"></div> 
    </div>
    <div class="uq-sidebar-layout__main">
      <div class="uqds-layout-demo-el"></div> 
    </div>
  </div>
</div>
`,
};

export const LocalNavExample = {
  render: () => `
<div class="uq-container">
  <div class="uq-sidebar-layout">
    <div class="uq-sidebar-layout__sidebar">
      ${LocalNav()}
    </div>
    <div class="uq-sidebar-layout__main">
      ${CardsExample()}
    </div>
  </div>
</div>
`,
};
