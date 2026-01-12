<<<<<<< HEAD
import { Header } from "../../components/header/header.stories";
import { footer } from "../../components/footer/footer.stories";
import * as AlertStories from "../../components/alert/alert.stories";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
=======
import { storyRenderer } from "../../../lib/storyRenderer";
import * as HeaderStories from "../../components/header/header.stories";
import * as BreadcrumbStories from "../../components/breadcrumb/breadcrumb.stories";
>>>>>>> origin
import * as HeroStories from "../../components/hero/hero.stories";
import * as SidebarRightStories from "../../layout/page-layouts/sidebar-right/sidebar-right.stories";
import * as CardStories from "../../components/card/card.stories";
import * as PillListStories from "../../components/pill/list/pill-list.stories";
import * as SearchInputStories from "../../components/search-input/search-input.stories";
import { searchInput } from "@uqds/form/src/js/main";
<<<<<<< HEAD
import { Alerts } from "@uqds/alert/src/js/main";
=======
import * as FooterStories from "../../components/footer/footer.stories";
import { initJs } from "../../../lib/initJs";
>>>>>>> origin

const { Header } = storyRenderer(HeaderStories);
const { Breadcrumb } = storyRenderer(BreadcrumbStories);
const { footer } = storyRenderer(FooterStories);
const { Level2: Level2Hero } = storyRenderer(HeroStories);
const { NewsExample } = storyRenderer(SidebarRightStories);
const { Text: Card } = storyRenderer(CardStories);
const { List: PillList } = storyRenderer(PillListStories);
const { SearchInput } = storyRenderer(SearchInputStories);
const { successGlobal } = storyRenderer(AlertStories);

export default {
  title: "Templates/News/Home",
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

export const Home = {
  decorators: [
    (storyFn) =>
      initJs(storyFn, (component) => {
        searchInput(component.querySelector(".uq-search-input"));
      }),
  ],
  render: () => `
<div>
  ${Header()}
  ${Breadcrumb({ showLevels: 0, currentPage: "News" })}
  ${Level2Hero({ title: "News", description: "Get the latest from UQ News.", image: null })}
  ${NewsExample()}
  <div class="uq-section">
    <div class="uq-container">
      <div class="uq-section__header">
        <h2 class="uq-section__title">Looking for specific news?</h2>
      </div>
      <h3>Search by keyword</h3>
      ${SearchInput()}
      <h3>Browse by topic</h3>
      ${PillList()}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-container">
      <div class="uq-card-grid uq-card-grid--target-2x">
        ${Card({ title: "Looking for a UQ expert?", description: "Browse our searchable database of UQ Staff available to share their specialist knowledge and research developments." })}
        ${Card({ title: "Contact us", description: "Do you have a media enquiry or a question for the UQ communications team?" })}
      </div>
    </div>
  </div>
  ${footer()}
</div>
`,
};
