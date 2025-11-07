import { Header } from "../../components/header/header.stories";
import { footer } from "../../components/footer/footer.stories";
import * as AlertStories from "../../components/alert/alert.stories";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import * as HeroStories from "../../components/hero/hero.stories";
import * as SidebarRightStories from "../../layout/page-layouts/sidebar-right/sidebar-right.stories";
import * as CardStories from "../../components/card/card.stories";
import { storyRenderer } from "../../../lib/storyRenderer";
import * as PillListStories from "../../components/pill/list/pill-list.stories";
import * as SearchInputStories from "../../components/search-input/search-input.stories";
import { searchInput } from "@uqds/form/src/js/main";
import { Alerts } from "@uqds/alert/src/js/main";

const { Level2: Level2Hero } = storyRenderer(HeroStories);
const { NewsExample } = storyRenderer(SidebarRightStories);
const { Text: Card } = storyRenderer(CardStories);
const { List: PillList } = storyRenderer(PillListStories);
const { SearchInput } = storyRenderer(SearchInputStories);
const { successGlobal } = storyRenderer(AlertStories);

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
  play: ({ canvasElement }) => {
    const search = canvasElement.querySelector(".uq-search-input");
    searchInput(search);
    const alert = canvasElement.querySelector("#global-alerts-container");
    if (alert) new Alerts(alert);
  },
  render: ({ showGrid }) => `
${Header.render()}
${Breadcrumb.render()}
<div id="global-alerts-container">
${successGlobal()}
</div>
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
${footer.render()}
`,
};
