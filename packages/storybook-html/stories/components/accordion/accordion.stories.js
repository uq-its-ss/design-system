import { useEffect } from "@storybook/addons";

// import styles
import "@uqds/accordion/src/scss/_component.scss";

// import scripts
import accordionCreate from "@uqds/accordion/src/js/accordion";

// import HTML template strings
import accordionDivHTML from "./accordion-div.html";
import accordionListHTML from "./accordion-list.html";
import accordionSubtitleHTML from "./accordion-subtitle.html";
import accordionCompactHTML from "./accordion-compact.html";
import accordionDivIsManualHTML from "./accordion-div-is-manual.html";

// documentation
import docs from "./accordion.mdx";

export default {
  title: "Components/Accordion",
  parameters: {
    docs: {
      inlineStories: false,
    },
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const usingDivs = {
  render: () => {
    useEffect(() => {
      new accordionCreate();
    });
    return accordionDivHTML;
  },

  name: "Using divs",
};

export const usingLists = {
  render: () => {
    useEffect(() => {
      new accordionCreate();
    });
    return accordionListHTML;
  },

  name: "Using lists",
};

export const HasSubtitle = {
  render: () => {
    useEffect(() => {
      new accordionCreate();
    });
    return accordionSubtitleHTML;
  },

  name: "Subtitle",
};

export const IsCompact = {
  render: () => {
    useEffect(() => {
      new accordionCreate();
    });
    return accordionCompactHTML;
  },

  name: "Compact",
};

export const isManual = {
  render: () => {
    useEffect(() => {
      new accordionCreate();
    });
    return accordionDivIsManualHTML;
  },

  name: "Variant behaviour",
};

export const withHeadings = {
  render: (args) => {
    useEffect(() => {
      new accordionCreate();
    });
    return `<div class="uq-accordion" aria-label="Accordion button group" role="presentation">
      <div class="uq-accordion__item">
      <button class="uq-accordion__toggle" aria-controls="content-1" aria-expanded="false" id="accordion-title-1"><${args.tag}>Title 1</${args.tag}></button>
      <div class="uq-accordion__content" role="region" aria-hidden="true" id="content-1" aria-labelledby="accordion-title-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.</p>
      </div>
      </div>`;
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
