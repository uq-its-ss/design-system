import classNames from "classnames";
import { header } from "@uqds/header/src/js/main";
import { Default as Header } from "../components/header/header.stories";
import { footer } from "../components/footer/footer.stories";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb.stories";
import * as HeroStories from "../components/hero/hero.stories";
import * as SidebarStories from "../layout/page-layouts/sidebar/sidebar.stories";
import { storyRenderer } from "../../lib/storyRenderer";

const { Level2: Level2Hero } = storyRenderer(HeroStories);
const { LocalNavExample } = storyRenderer(SidebarStories);

export default {
  title: "Templates/Level 2",
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

export const Level2 = {
  render: ({ showGrid }) => `
<div class="${classNames({ "uqds-layout-demo-bg": showGrid })}">
  ${Header.render(Header.args)}
  ${Breadcrumb.render()}
  ${Level2Hero()}
  ${LocalNavExample()}  
  ${footer.render()}
</div>`,
  // 2. Add the play function
  play: ({ canvasElement }) => {
    // 3. Initialize the Header
    const headerElem = canvasElement.querySelector(".uq-header");
    if (headerElem) new header(headerElem);
    // Note: If the components rendered by Level2Hero and LocalNavExample also require JS,
    // their initialization functions would need to be imported and called here as well.
  },
};
