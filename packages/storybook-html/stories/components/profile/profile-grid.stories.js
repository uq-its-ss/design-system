import classNames from "classnames";
import { layoutDecorator } from "../../../lib/decorators";
import { storyRenderer } from "../../../lib/storyRenderer";
import * as ProfileStories from "./profile.stories";
import * as LocalNavStories from "../navigation/local-nav/local-nav.stories";
import "@uqds/layout/src/scss/main.scss";

// Initialize our renderers
const { profile: ProfileCard } = storyRenderer(ProfileStories);
const { LocalNav } = storyRenderer(LocalNavStories);

export default {
  title: "Components/Profile/Using Grid Layouts",
  argTypes: {
    // Layout Toggles
    Columns: {
      name: "Grid Columns",
      options: ["1 Column", "2 Column"],
      control: "inline-radio",
      table: { category: "Grid Options" },
    },
    NumberOfItems: {
      name: "Number of Profiles",
      control: { type: "number", min: 1, max: 8 },
      table: { category: "Grid Options" },
    },
    hasSidebar: {
      name: "Demo in Sidebar",
      control: "boolean",
      table: { category: "Grid Options" },
    },
    // Hide all Profile controls
    titleElement: { table: { disable: true } },
    honorificPrefix: { table: { disable: true } },
    name: { table: { disable: true } },
    position: { table: { disable: true } },
    bio: { table: { disable: true } },
    hasContact: { table: { disable: true } },
    email: { table: { disable: true } },
    phone: { table: { disable: true } },
    ctaUrl: { table: { disable: true } },
    hasImage: { table: { disable: true } },
    image: { table: { disable: true } },
  },
  args: {
    ...ProfileStories.default.args,
    Columns: "2 Column",
    NumberOfItems: 3,
    hasSidebar: false,
  },
  render: (args) => {
    // 1. Generate the Profile Cards
    const cardContent = ProfileCard(args);
    const gridItems = Array(args.NumberOfItems).fill(cardContent).join("\n");

    // 2. Wrap in the Grid container
    const gridHtml = `
      <div class="${classNames("uq-grid", `uq-grid--${args.Columns.toLowerCase().replace(" ", "-")}`)}">
        ${gridItems}
      </div>`;

    // 3. Conditionally wrap in the Sidebar layout or just a standard container
    if (args.hasSidebar) {
      return `
        <div class="uq-container">
          <div class="uq-sidebar-layout">
            <aside class="uq-sidebar-layout__sidebar">
              ${LocalNav()}
            </aside>
            <main class="uq-sidebar-layout__main">
              ${gridHtml}
            </main>
          </div>
        </div>`;
    }

    return `<div class="uq-container">${gridHtml}</div>`;
  },
};

// Single export that handles all states via Controls
export const usingGrid = {};
