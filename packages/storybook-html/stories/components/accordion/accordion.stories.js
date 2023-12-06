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
import docs from "./accordion.docs.mdx";

export default {
  title: "Components/Accordion",
  parameters: {
    docs: {
      page: docs,
      inlineStories: false,
    },
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const usingDivs = () => {
  useEffect(() => {
    new accordionCreate();
  });
  return accordionDivHTML;
};

usingDivs.storyName = "Using divs";

export const usingLists = () => {
  useEffect(() => {
    new accordionCreate();
  });
  return accordionListHTML;
};

usingLists.storyName = "Using lists";

export const HasSubtitle = () => {
  useEffect(() => {
    new accordionCreate();
  });
  return accordionSubtitleHTML;
};

HasSubtitle.storyName = "Subtitle";

export const IsCompact = () => {
  useEffect(() => {
    new accordionCreate();
  });
  return accordionCompactHTML;
};

IsCompact.storyName = "Compact";

export const isManual = () => {
  useEffect(() => {
    new accordionCreate();
  });
  return accordionDivIsManualHTML;
};

isManual.storyName = "Variant behaviour";

export const withHeadings = (args) => {
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
};

withHeadings.args = {
  tag: "span",
};

withHeadings.argTypes = {
  tag: {
    options: ["span", "h2", "h3", "h4", "h5"],
    control: { type: "select" },
  },
};
