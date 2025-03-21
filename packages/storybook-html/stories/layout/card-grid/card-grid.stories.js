import { storyRenderer } from "../../../lib/storyRenderer";
import { layoutDecorator } from "../../../lib/decorators";
import * as CardStories from "../../components/card/card.stories";
import * as PaneStories from "../../components/pane/pane.stories";
import * as StoryCardStories from "../../components/story-card/story-card.stories";
import "@uqds/layout/src/scss/main.scss";
import "@uqds/sections/src/scss/main.scss";

const {
  Image: CardImage,
  Text: CardText,
  Icon: CardIcon,
} = storyRenderer(CardStories);
const {
  Image: PaneImage,
  Video: PaneVideo,
  TextShaded: PaneTextShaded,
  IconShaded: PaneIcon,
  IconLarge: PaneIconLarge,
} = storyRenderer(PaneStories);
const { NewsCard, EventCard, StoryCard } = storyRenderer(StoryCardStories);

export default {
  title: "Layout/Card grid",
  argTypes: {
    target: {
      control: "select",
      options: ["1x", "2x", "3x", "4x"],
    },
  },
};

export const CardGrid = {
  decorators: [layoutDecorator],
  args: {
    target: "3x",
  },
  render: ({ target }) => `
<div class="uq-card-grid uq-card-grid--target-${target}">
  ${target === "1x" ? `<div class="uqds-layout-demo-card"></div>` : ""}
  ${
    target === "2x"
      ? `<div class="uqds-layout-demo-card"></div><div class="uqds-layout-demo-card"></div>`
      : ""
  }
  ${
    target === "3x"
      ? `<div class="uqds-layout-demo-card"></div><div class="uqds-layout-demo-card"></div><div class="uqds-layout-demo-card"></div>`
      : ""
  }
  ${
    target === "4x"
      ? `<div class="uqds-layout-demo-card"></div><div class="uqds-layout-demo-card"></div><div class="uqds-layout-demo-card"></div><div class="uqds-layout-demo-card"></div>`
      : ""
  }
</div>
`,
};

const titleString1 = "Looking for a UQ researcher?";
const titleString2 = "$8 million Snow fellowship to predict disease risk";
const titleString3 = "Outstanding alumni";
const descString1 =
  "We have experts across a myriad of disciplines. Explore by name, area of research or project.";
const descString2 =
  "Landmark genetic research could allow doctors to accurately predict whether a patient is at risk.";
const descString3 =
  "We’re addressing environmental, social and economic concerns and working towards a brighter future.";
const imageUrl1 =
  "https://about.uq.edu.au/sites/default/files/styles/image_panel/public/2022-05/sandstone-people-walking_0.jpg";
const imageUrl2 =
  "https://research.uq.edu.au/sites/default/files/styles/image_panel/public/2022-05/agriculutre-students.jpg";
const imageUrl3 =
  "https://about.uq.edu.au/sites/default/files/styles/image_panel/public/2022-05/uq-campus-st-lucia.jpg";

export const CardsExample = {
  render: () => `
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-1x">
      ${CardImage({
        title: titleString2,
        description: descString2,
        image: imageUrl2,
      })}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-2x">
      ${CardImage({
        title: titleString3,
        description: descString1,
        image: imageUrl1,
      })}
      ${CardImage({
        title: titleString2,
        description: descString2,
        image: imageUrl3,
      })}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-3x">
      ${CardText({
        title: titleString1,
        description: descString3,
      })}
      ${CardText({
        title: titleString2,
        description: descString2,
      })}
      ${CardText({
        title: titleString3,
        description: descString1,
      })}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-4x">
      ${CardIcon({
        title: titleString3,
        description: descString1,
      })}
      ${CardIcon({
        title: titleString1,
        description: descString2,
      })}
      ${CardIcon({
        title: titleString2,
        description: descString1,
      })}
      ${CardIcon({
        title: titleString1,
        description: descString3,
      })}
    </div>
  </div>
`,
};

export const PanesExample = {
  render: () => `
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-1x">
      ${PaneImage({
        title: titleString3,
        description: descString1,
        image: imageUrl1,
      })}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-2x">
      ${PaneIconLarge({
        title: titleString2,
        description: descString3,
      })}
      ${PaneIconLarge({
        title: titleString1,
        description: descString2,
      })}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-3x">
      ${PaneIcon({
        title: titleString3,
        description: descString1,
      })}
      ${PaneIcon({
        title: titleString2,
        description: descString2,
      })}
      ${PaneIcon({
        title: titleString1,
        description: descString3,
      })}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-4x">
      ${PaneTextShaded({
        title: titleString1,
        description: descString3,
      })}
      ${PaneTextShaded({
        title: titleString2,
        description: descString1,
      })}
      ${PaneTextShaded({
        title: titleString3,
        description: descString2,
      })}
       ${PaneTextShaded({
         title: titleString1,
         description: descString3,
       })}
    </div>
  </div>
`,
};

export const StoryCardExample = {
  render: () => `
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-1x">
      ${EventCard({
        title: titleString3,
        description: descString1,
        image: imageUrl1,
      })}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-2x">
      ${StoryCard({
        title: titleString2,
        description: descString3,
      })}
      ${StoryCard({
        title: titleString1,
        description: descString2,
      })}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-3x">
      ${NewsCard({
        title: titleString3,
        description: descString1,
      })}
      ${NewsCard({
        title: titleString2,
        description: descString2,
      })}
      ${NewsCard({
        title: titleString1,
        description: descString3,
      })}
    </div>
  </div>
  <div class="uq-section">
    <div class="uq-card-grid uq-card-grid--target-4x">
      ${EventCard({
        title: titleString1,
        description: descString3,
      })}
      ${EventCard({
        title: titleString2,
        description: descString1,
      })}
      ${EventCard({
        title: titleString3,
        description: descString2,
      })}
       ${EventCard({
         title: titleString1,
         description: descString3,
       })}
    </div>
  </div>
`,
};

export const CardGrid1PerRowExample = {
  render: () => {
    return `
<div class="uq-container">
  <div class="uq-card-grid uq-card-grid--target-1x">
     ${PaneImage()}
     ${PaneVideo()}
     ${PaneImage({ title: "Pane with long text", description: `<p>Lorem est irure qui consequat ad occaecat excepteur esse duis et. In ad Lorem et laborum. Consequat reprehenderit consequat velit anim. Ipsum amet enim nulla irure cupidatat ea voluptate do nisi aliqua sit et veniam commodo nisi. Sit laboris commodo excepteur amet cillum sunt. Enim ex ut incididunt magna ad incididunt.</p><p>Amet magna adipisicing aliqua enim occaecat est velit elit aute. Magna elit amet commodo esse in ullamco dolore ut. Non ut consectetur Lorem adipisicing. Quis proident proident nostrud ad qui elit commodo commodo duis est ullamco sint nulla. Proident do sint ut pariatur deserunt aute elit velit culpa.</p><p>Irure non occaecat consequat nisi do eiusmod nisi laborum ea eiusmod id exercitation ad incididunt eiusmod. Irure ea aliqua consequat enim deserunt amet nostrud nisi esse. Et aliquip eu pariatur et cupidatat ex in ex fugiat tempor quis ex adipisicing adipisicing dolore. Laboris amet et ullamco esse ad cupidatat adipisicing non non magna excepteur duis consectetur. Nulla adipisicing eiusmod ipsum occaecat. Ex dolor ullamco voluptate tempor. Sit deserunt excepteur nisi minim tempor fugiat est aute ipsum ea pariatur ea mollit eu excepteur.</p>` })}
     ${CardImage()}
     ${NewsCard()}
     ${EventCard()}
     ${StoryCard()}
  </div>
</div>`;
  },
};
