import classNames from "classnames";
import { Header } from "../../components/header/header.stories";
import { footer } from "../../components/footer/footer.stories";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import * as HeroStories from "../../components/hero/hero.stories";
import * as SidebarRightStories from "../../layout/page-layouts/sidebar-right/sidebar-right.stories";
import * as CardStories from "../../components/card/card.stories";
import { storyRenderer } from "../../../lib/storyRenderer";

const { Level2: Level2Hero } = storyRenderer(HeroStories);
const { NewsExample } = storyRenderer(SidebarRightStories);
const { Text: Card } = storyRenderer(CardStories);

export default {
  title: "Templates/News/Home",
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

export const Home = {
  render: ({ showGrid }) => `
${Header.render()}
${Breadcrumb.render()}
${Level2Hero({ title: "News", description: "Get the latest from UQ News.", image: null })}
${NewsExample()}  
<div class="uq-section">
  <div class="uq-container">
    <div class="uq-card-grid uq-card-grid--target-2x">
      ${Card({ title: "Looking for a UQ expert?", description: "Browse our searchable database of UQ Staff available to share their specialist knowledge and research developments." })}
      ${Card({ title: "Contact us", description: "Do you have a media enquiry or a question for the UQ communications team?" })}
    </div>
  </div>
</div>
${footer.render()}
`,
};
