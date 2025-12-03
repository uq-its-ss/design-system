import { Tabs } from "@uqds/tabs/src/js/tabs";
import classNames from "classnames";
import iconCatalog from "@uqds/icon";

export default {
  title: "Components/Tabs",
  argTypes: {
    style: {
      control: "check",
      options: ["Outline", "Lined", "Full width", "Small", "Reversed"],
      mapping: {
        Outline: "uq-tabs--outline",
        Lined: "uq-tabs--lined",
        "Full width": "uq-tabs--full-width",
        Small: "uq-tabs--small",
        Reversed: "uq-tabs--reversed",
      },
    },
    icon: {
      options: iconCatalog.map((icon) => `${icon.category}--${icon.name}`),
      control: "select",
    },
    tab: "text",
    panel: "text",
    link: "text",
  },
  args: {
    style: ["Outline"],
    icon: "",
    tab: "Tab 1",
    panel: "Tab1 panel text",
    link: "Tab link",
  },
  play: ({ canvasElement }) => {
    const tabs = {
      container: canvasElement.querySelector(".uq-tabs"),
    };
    if (tabs) new Tabs(tabs);
  },
  render: ({ style, icon, tab, panel, link }) => {
    const prefix = (Math.random() + 1).toString(36).substring(7);
    return `
    <div class="${classNames("uq-tabs", style)}">
      <div class="uq-tabs__tab-list-wrapper">
        <div class="uq-tabs__tab-list" role="tablist" aria-label="Tab List">
          <button class="uq-tabs__tab uq-tabs__tab--active" role="tab" aria-selected="true" aria-controls="${prefix}-tab1-panel" id="${prefix}-tab1">
            ${icon ? `<span class="uq-icon uq-icon--${icon}"></span>` : ""} ${tab}
          </button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="${prefix}-tab2-panel" id="${prefix}-tab2" tabindex="-1"> 
            ${icon ? `<span class="uq-icon uq-icon--${icon}"></span>` : ""} Tab 2
          </button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="${prefix}-tab3-panel" id="${prefix}-tab3" tabindex="-1">
            ${icon ? `<span class="uq-icon uq-icon--${icon}"></span>` : ""} Tab 3
          </button>
          <a class="uq-tabs__link" href="#">${link}</a>
        </div>
      </div>
      <div class="uq-tabs__tab-panel uq-tabs__tab-panel--active" role="tabpanel" id="${prefix}-tab1-panel" aria-labelledby="tab1" tabindex="0">
        <p>${panel}</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="${prefix}-tab2-panel" aria-labelledby="tab2" tabindex="0" hidden="">
        <p>Tab2 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="${prefix}-tab3-panel" aria-labelledby="tab3" tabindex="0" hidden="">
        <p>Tab3 panel text</p>
      </div>
    </div>
    `;
  },
};

export const Outline = {};

export const Minimal = {
  args: {
    style: [],
  },
};

export const Lined = {
  args: {
    style: ["Lined"],
  },
};

export const WithIcon = {
  args: {
    style: ["Lined"],
    icon: "common--search",
  },
};

export const FullWidth = {
  args: {
    style: ["Outline", "Full width"],
  },
};

export const Small = {
  args: {
    style: ["Outline", "Small"],
  },
};

export const Reversed = {
  args: {
    style: ["Outline", "Reversed"],
  },
};
