import { storyRenderer } from "../../../lib/storyRenderer";
import * as CardStories from "../card/card.stories";
import * as LinkgridStories from "./link-grid.stories";
import "@uqds/layout/src/scss/main.scss";
import "@uqds/sections/src/scss/main.scss";

const {
  Image: CardImage,
  Text: CardText,
  Icon: CardIcon,
} = storyRenderer(CardStories);
const {
  Primary: LinkGridPrimary,
  WithCustomGrid: LinkGridWithCustomGrid,
  WithCardGrid: LinkGridWithCardGrid,
  WithGlobalGrid: LinkGridWithGlobalGrid,
} = storyRenderer(LinkgridStories);

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

export default {
  title: "Components/Link Grid/Examples",
};

export const CardsExample = {
  render: () => `
  <h2>Link Grid Examples</h2>
  ${LinkGridPrimary()}
  <h2>Custom grid 205px</h2>
  <p> I have set the custom grid to 205px. The custom grid is essentially the global grid but setup with only 3 column option.</p>
  ${LinkGridWithCustomGrid()}
  <h2>Global grid 317px</h2>
  ${LinkGridWithGlobalGrid()}
   <h2>Card grid</h2>
  ${LinkGridWithCardGrid()}
  <h2>3 Column Card Grid</h2>
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

  <h2>less cards than column count</h2>
   <p>Custom gird (auto fill)</p> 
   <ul class="uq-link-grid uq-link-grid--target-3x">
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
        Custom Grid Item 1
        </a>
      </li>
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
        Custom Grid Item 2
        </a>
      </li>
    </ul>
  <p>global grid (auto fit)</p>
  <ul class="uq-link-grid uq-grid uq-grid--3-column">
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 1
        </a>
      </li>
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 2
        </a>
      </li>
    </ul>
  <p>card grid (auto fill)</p>
    <div>
    <ul class="uq-link-grid uq-card-grid uq-card-grid--target-3x">
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 1
        </a>
      </li>
      <li class="uq-link-grid__item">
        <a href="#" class="uq-link-grid__link uq-icon uq-icon--right uq-icon--standard--arrow-right">
          Card Grid Item 2
        </a>
      </li>
    </ul>
  </div>


  <h2>General Cards grid</h2>
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
