// import scripts
import { accordion } from "@uqds/accordion/src/js/main";
// import styles
import "@uqds/accordion/src/scss/_component.scss";

// import HTML template strings
import accordionDivHTML from "./accordion-div.html";
import accordionListHTML from "./accordion-list.html";
import accordionSubtitleHTML from "./accordion-subtitle.html";
import accordionCompactHTML from "./accordion-compact.html";
import accordionDivIsManualHTML from "./accordion-div-is-manual.html";

export default {
  title: "Components/Accordion",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const usingDivs = {
  render: () => {
    return accordionDivHTML;
  },
  play: () => {
    new accordion();
  },
  name: "Using divs",
};

export const usingLists = {
  render: () => {
    return accordionListHTML;
  },
  play: () => {
    new accordion();
  },
  name: "Using lists",
};

export const HasSubtitle = {
  render: () => {
    return accordionSubtitleHTML;
  },
  play: () => {
    new accordion();
  },
  name: "Subtitle",
};

export const IsCompact = {
  render: () => {
    return accordionCompactHTML;
  },
  play: () => {
    new accordion();
  },
  name: "Compact",
};

export const isManual = {
  render: () => {
    return accordionDivIsManualHTML;
  },
  play: () => {
    new accordion();
  },

  name: "Variant behaviour",
};

export const withHeadings = {
  render: (args) =>
    `<div class="uq-accordion" aria-label="Accordion button group" role="presentation">
      <div class="uq-accordion__item">
      <button class="uq-accordion__toggle" aria-controls="content-1" aria-expanded="false" id="accordion-title-1"><${args.tag}>Title 1</${args.tag}></button>
      <div class="uq-accordion__content" role="region" aria-hidden="true" id="content-1" aria-labelledby="accordion-title-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.</p>
      </div>
      </div>`,
  play: () => {
    new accordion();
  },
  args: {
    tag: "span",
  },

  argTypes: {
    tag: {
      options: ["span", "h2", "h3", "h4", "h5"],
      control: { type: "select" },
    },
  },
};
