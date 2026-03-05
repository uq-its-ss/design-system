import classNames from "classnames";
import { layoutDecorator } from "../../../lib/decorators";
import { storyRenderer } from "../../../lib/storyRenderer";
import * as ProfileStories from "../../components/profile/profile.stories";

const { profile: ProfileCard } = storyRenderer(ProfileStories);

export default {
  title: "Layout/Grid",
  argTypes: {
    Columns: {
      name: "Columns",
      options: ["Default", "1 Column", "2 Column", "3 Column", "4 Column"],
      control: "select",
      table: {
        category: "Grid options", // Groups the field
      },
    },
    NumberOfItems: {
      name: "Number of Items",
      options: ["Default", "1", "2", "3", "4", "5"],
      control: "select",
      table: {
        category: "Item options", // Groups the field
      },
    },
    ItemType: {
      name: "Item Type",
      options: ["Demo item", "Profile Card"],
      control: "select",
      table: {
        category: "Item options", // Groups the field
      },
    },
  },
  args: {
    Columns: "Default",
    ItemType: "Demo item",
    NumberOfItems: "Default",
  },
  render: ({ Columns, ItemType, NumberOfItems }) => {
    let numItems;

    if (NumberOfItems === "Default") {
      const numColumns =
        Columns === "Default" ? 1 : parseInt(Columns.match(/\d+/)?.[0] || "1");
      numItems = numColumns + 1;
    } else {
      numItems = parseInt(NumberOfItems);
    }

    const cardContent =
      ItemType === "Profile Card"
        ? ProfileCard()
        : '<div class="uqds-layout-demo-card"></div>';

    const items = Array(numItems).fill(cardContent).join("\n      ");

    return `<div class="${classNames("uq-grid", Columns !== "Default" && `uq-grid--${Columns.toLowerCase().replace(" ", "-")}`)}">
      ${items}
      </div>
      `;
  },
};

export const GridDemo = {
  decorators: [layoutDecorator],
  args: {
    Columns: "Default",
    ItemType: "Demo item",
    NumberOfItems: "Default",
  },
};

export const ProfileExample = {
  args: {
    Columns: "Default",
    ItemType: "Profile Card",
    NumberOfItems: "Default",
  },
};
