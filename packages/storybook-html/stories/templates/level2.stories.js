import classNames from "classnames";
import * as SkipLinksStories from "../components/body/skip-links.stories";
import * as HeaderStories from "../components/header/header.stories";
import * as FooterStories from "../components/footer/footer.stories";
import * as BreadcrumbStories from "../components/breadcrumb/breadcrumb.stories";
import * as HeroStories from "../components/hero/hero.stories";
import * as SidebarStories from "../layout/page-layouts/sidebar/sidebar.stories";
import { storyRenderer } from "../../lib/storyRenderer";

const { SkipLinks } = storyRenderer(SkipLinksStories);
const { Header } = storyRenderer(HeaderStories);
const { Breadcrumb } = storyRenderer(BreadcrumbStories);
const { Level2: Level2Hero } = storyRenderer(HeroStories);
const { LocalNavExample } = storyRenderer(SidebarStories);
const { Footer: footer } = storyRenderer(FooterStories);

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
<div class="${classNames({ "uqds-layout-preview": showGrid })}">
  ${SkipLinks()}
  ${Header()}
  <main id="uq-main">
    ${Breadcrumb({ showLevels: 1, levelOne: "Level 1", currentPage: "Level 2" })}
    ${Level2Hero()}
    ${LocalNavExample()}  
  </main>
  ${footer()}
</div>`,
};
