import classNames from "classnames";
import iconCatalog from "@uqds/icon";
import { initJs } from "../../../lib/initJs";
import { accordion } from "@uqds/accordion/src/js/main";

export default {
  title: "Components/Accordion",
  argTypes: {
    title: {
      control: "text",
    },
    titleElement: {
      options: ["none", "h2", "h3", "h4", "h5"],
      control: "select",
    },
    content: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
    icon: {
      options: iconCatalog.map((icon) => `${icon.category}--${icon.name}`),
      control: "select",
    },
    accordionElement: {
      options: ["div", "ul/li"],
      control: "select",
    },
    compact: {
      type: "boolean",
    },
    isManual: {
      type: "boolean",
    },
    accordionCount: {
      control: "number",
    },
  },
  args: {
    title: "Title",
    titleElement: "none",
    icon: "",
    subtitle: "",
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.</p>`,
    accordionElement: "div",
    compact: false,
    isManual: false,
    accordionCount: 1,
  },
  decorators: [
    (storyFn) =>
      initJs(storyFn, (component) => {
        new accordion();
      }),
  ],
  render: ({
    title,
    titleElement,
    icon,
    subtitle,
    content,
    accordionElement,
    compact,
    isManual,
    accordionCount,
  }) => {
    let counter = 0;
    let accordions = "";
    while (counter < accordionCount) {
      accordions += `<${accordionElement !== "div" ? `li` : `div`} class="uq-accordion__item">
    <button class="uq-accordion__toggle" aria-controls="content-1" aria-expanded="false" id="accordion-title-1">
      ${icon ? `<div class="uq-accordion__icon"><span class="uq-icon uq-icon--${icon}"></span></div>` : ""}
      ${titleElement !== "none" ? `<${titleElement}>${title}</${titleElement}>` : title}
      ${subtitle ? `<span class="uq-accordion__subtitle">${subtitle}</span>` : ""}
    </button>
    <div class="uq-accordion__content" role="region" aria-hidden="true" id="content-1" aria-labelledby="accordion-title-1">
      ${content}
    </div>
    </${accordionElement !== "div" ? `li` : `div`}>`;
      counter += 1;
    }
    return `
<${accordionElement !== "div" ? `ul` : `div`} class="${classNames("uq-accordion", { "uq-accordion--compact": compact, "uq-accordion--is-manual": isManual })}" aria-label="Accordion button group" role="presentation">
  ${accordions}
</${accordionElement !== "div" ? `ul` : `div`}>
`;
  },
};

export const Accordion = {};

export const UsingLists = {
  args: {
    accordionElement: "ul/li",
    accordionCount: 3,
  },
};

export const HasSubtitle = {
  args: {
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget.",
  },
};

export const WithIcon = {
  args: {
    icon: "agriculture-and-environment--ecology-leaf",
  },
};

export const Compact = {
  args: {
    compact: true,
    accordionCount: 3,
  },
};

export const Manual = {
  args: {
    isManual: true,
    accordionCount: 3,
  },
};

export const WithHeadings = {
  args: {
    titleElement: "h2",
  },
};
