import { Header } from "../../components/header/header.stories";
import { footer } from "../../components/footer/footer.stories";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import * as CardStories from "../../components/card/card.stories";
import * as PaneStories from "../../components/pane/pane.stories";
import { storyRenderer } from "../../../lib/storyRenderer";
import * as AlertStories from "../../components/alert/alert.stories";
import { accordion } from "@uqds/accordion/src/js/main";

const { Image: ImageCard, Text: TextCard } = storyRenderer(CardStories);
const { TextShaded: ShadedPane, Text: Pane } = storyRenderer(PaneStories);
const { alertWarning: Alert } = storyRenderer(AlertStories);

export default {
  title: "Templates/News/Article",
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

export const Article = {
  play: () => {
    new accordion();
  },
  render: ({ showGrid }) => `
${Header.render()}
${Breadcrumb.render()}
<div class="uq-section">
  <div class="uq-container">
    <div class="uq-sidebar-right-layout uq-article-layout">
      <div class="uq-sidebar-right-layout__main">
        <div class="uq-section">
          <h1>Setting a course for improving Queensland's waterways</h1>
        </div>
        <div class="uq-section">
          ${Alert({ message: "Warning: Some readers may find the details in this story distressing." })}
        </div>
        <div class="uq-section">
          <p>Dr Wenger said the UQ-developed product would be an open access, almost real-time management program that allows users to map pollution, identify coral reefs at risk and determine the management effort needed to protect coral reefs.</p>
        </div>
        <div class="uq-section">
          ${ShadedPane({ title: "Key points", links: null, description: `<ul><li>Two of only four national recipients appointed a Companion of the Order of Australia (AC) are from the UQ community.</li><li>More than 40 members of the UQ community received Australia Day honours from ACs to OAMs.</li></ul>` })}
        </div>
        <div class="uq-section">
          <p>The program, funded by the Coral Research and Development Accelerator Platform (CORDAP) an initiative of the G20, will identify near-real time threats to reef systems, providing conservation managers with the crucial information they need to better protect coral reefs.</p>
          <p>The project is a collaboration between Dr Amelia Wenger from UQ’s School of the Environment and the Wildlife Conservation Society – along with Associate Professor Simon Albert and Dr Nick Hutley from UQ's School of Civil Engineering.</p>
          <p>"Water pollution from land-based activities is now the biggest threat for more than 30 per cent of the world’s coral reefs" Dr Wenger said.</p>
          <p>"It affects the food, health, livelihood and economic opportunities for millions of people."</p>
          <p>Dr Wenger said the UQ-developed product would be an open access, almost real-time management program that allows users to map pollution, identify coral reefs at risk and determine the management effort needed to protect coral reefs.</p>
        </div>
        <div class="uq-section">
          <div class="uq-accordion" aria-label="Accordion button group" role="presentation">
            <div class="uq-accordion__item">
              <button class="uq-accordion__toggle" aria-controls="content-1" aria-expanded="false" id="accordion-title-1">
                <div class="uq-accordion__icon"><img src="images/news/creative-commons.svg" alt="" /></div>
                Republish via Creative Commons
              </button>
              <div class="uq-accordion__content" role="region" aria-hidden="true" id="content-1" aria-labelledby="accordion-title-1">
                <img src="images/news/creative-commons-full.svg" alt="" />
                <p>As part of our vision of knowledge leadership for a better world we encourage others to republish our news articles online or in print under our Creative Commons licence. You must follow these guidelines ensuring that you credit UQ and our authors, include a link back to the original article and don't make material edits.</p>
                ${Alert({ message: `By copying the article code, you will be adhering to the <a href="#">UQ guidelines</a>.` })}
              </div>
            </div>
          </div>
        </div>
        <div class="uq-section">
          <div class="uq-section__header">
            <h2 class="uq-section__title">Related articles</h2>
          </div>
          <div class="uq-card-grid uq-card-grid--target-2x">
            ${ImageCard({ title: "Looking for a UQ expert?", description: "Browse our searchable database of UQ Staff available to share their specialist knowledge and research developments." })}
            ${ImageCard({ title: "Contact us", description: "Do you have a media enquiry or a question for the UQ communications team?" })}
          </div>
        </div>
      </div>
      <div class="uq-sidebar-right-layout__sidebar">
        <div class="uq-section">
          <div class="uq-card-grid">
            ${ShadedPane({ title: "Media contact", description: `<p>Dr Amelia Wenger<br /><a href="#">a.wenger@uq.edu.au</a><br />+61 406 559 711</p><p>Faculty of Science Media<br /><a href="#">science.media@uq.edu.au</a><br />+61 438 162 687</p>`, links: `<a href="#">Download media resources</a>` })}
            ${TextCard({ title: "Subscribe to UQ News", description: "Get the latest from our newsroom." })}
            ${ShadedPane()}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
${footer.render()}
`,
};
