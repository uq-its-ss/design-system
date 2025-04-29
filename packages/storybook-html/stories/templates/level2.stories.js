import classNames from "classnames";
import { Header } from "../components/header/header.stories";
import { footer } from "../components/footer/footer.stories";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb.stories";
import * as HeroStories from "../components/hero/hero.stories";
import * as SidebarStories from "../layout/page-layouts/sidebar/sidebar.stories";
import { storyRenderer } from "../../lib/storyRenderer";
import { header } from "@uqds/header/src/js/main";
import { breadcrumb } from "@uqds/breadcrumb/src/js/main";

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
    ${Header.render()}
    ${Breadcrumb.render()}
    ${Level2Hero()}
    ${LocalNavExample()}  
    ${footer.render()}
  </div>`,
  play: ({ canvasElement }) => {
    // Initialise Header
    const headerElem = canvasElement.querySelector(".uq-header");
    if (headerElem) new header(headerElem);

    // Initialise Main Navigation
    const navElem = canvasElement.querySelector("#jsNav");
    if (navElem)
      new siteHeaderNavigation(navElem, "uq-site-header__navigation");

    // Initialise Breadcrumb
    const breadcrumbs = canvasElement.querySelector(".uq-breadcrumb");
    if (breadcrumbs) new breadcrumb(breadcrumbs);
  }
};
