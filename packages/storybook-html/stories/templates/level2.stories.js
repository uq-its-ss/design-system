import classNames from "classnames";
import * as HeaderStories from "../components/header/header.stories";
import * as FooterStories from "../components/footer/footer.stories";
import * as BreadcrumbStories from "../components/breadcrumb/breadcrumb.stories";
import * as HeroStories from "../components/hero/hero.stories";
import * as SidebarStories from "../layout/page-layouts/sidebar/sidebar.stories";
import { storyRenderer } from "../../lib/storyRenderer";

const { Header } = storyRenderer(HeaderStories);
const { Breadcrumb } = storyRenderer(BreadcrumbStories);
const { Level2: Level2Hero } = storyRenderer(HeroStories);
const { LocalNavExample } = storyRenderer(SidebarStories);
const { footer } = storyRenderer(FooterStories);

export default {
  title: "Templates/Level 2",
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

export const Level2 = {
  render: ({ showGrid }) => `
<div class="${classNames({ "uqds-layout-demo-bg": showGrid })}">
  <a href="#uq-header" class="visually-hidden focusable">Skip to header</a>
  <a href="#uq-main" class="visually-hidden focusable">Skip to content</a>
  <a href="#uq-footer" class="visually-hidden focusable">Skip to footer</a>    
  ${Header()}
  <main id="uq-main">
    ${Breadcrumb({ showLevels: 1, levelOne: "Level 1", currentPage: "Level 2" })}
    ${Level2Hero()}
    ${LocalNavExample()}  
  </main>
  ${footer()}
</div>`,
};
