// import styles
import "./tabs.scss";

// import scripts
import { Tabs } from "@uqds/tabs/src/js/tabs";

export default {
  title: "Components/Tabs",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const tabsOutline = {
  render: () => {
    return `
    <div id="tabsDefaultExample" class="uq-tabs uq-tabs--outline">
      <div class="uq-tabs__tab-list-wrapper">
        <div class="uq-tabs__tab-list" role="tablist" aria-label="Tab List">
          <button class="uq-tabs__tab uq-tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab1-panel" id="tab1">Tab 1</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab2-panel" id="tab2" tabindex="-1">Tab 2</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab3-panel" id="tab3" tabindex="-1">Tab 3</button>
          <a class="uq-tabs__link" href="#">Tab link</a>
        </div>
      </div>
      <div class="uq-tabs__tab-panel uq-tabs__tab-panel--active" role="tabpanel" id="tab1-panel" aria-labelledby="tab1" tabindex="0">
        <p>Tab1 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab2-panel" aria-labelledby="tab2" tabindex="0" hidden="">
        <p>Tab2 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab3-panel" aria-labelledby="tab3" tabindex="0" hidden="">
        <p>Tab3 panel text</p>
      </div>
    </div>
    `;
  },
  play: ({ canvasElement }) => {
    const tabs = { container: canvasElement.querySelector("#tabsDefaultExample")};
    if (tabs) new Tabs(tabs);
  },

  name: "Default / Outline",
};

export const tabsMinimal = {
  render: () => {
    return `
    <div id="tabsMinimalExample" class="uq-tabs">
      <div class="uq-tabs__tab-list-wrapper">
        <div class="uq-tabs__tab-list" role="tablist" aria-label="Tab List">
          <button class="uq-tabs__tab uq-tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab21-panel" id="tab21">Tab 1</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab22-panel" id="tab22" tabindex="-1">Tab 2</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab23-panel" id="tab23" tabindex="-1">Tab 3</button>
        </div>
      </div>
      <div class="uq-tabs__tab-panel uq-tabs__tab-panel--active" role="tabpanel" id="tab21-panel" aria-labelledby="tab21" tabindex="0">
        <p>Tab1 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab22-panel" aria-labelledby="tab22" tabindex="0" hidden="">
        <p>Tab2 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab23-panel" aria-labelledby="tab23" tabindex="0" hidden="">
        <p>Tab3 panel text</p>
      </div>
    </div>
    `;
  },
  play: ({ canvasElement }) => {
    const tabs = { container: canvasElement.querySelector("#tabsMinimalExample")};
    if (tabs) new Tabs(tabs);
  },

  name: "Minimal",
};

export const tabsLined = {
  render: () => {
    return `
    <div id="tabsLinedExample" class="uq-tabs uq-tabs--lined">
      <div class="uq-tabs__tab-list-wrapper">
        <div class="uq-tabs__tab-list" role="tablist" aria-label="Tab List">
          <button class="uq-tabs__tab uq-tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab31-panel" id="tab31">Tab 1</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab32-panel" id="tab32" tabindex="-1">Tab 2</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab33-panel" id="tab33" tabindex="-1">Tab 3</button>
        </div>
      </div>
      <div class="uq-tabs__tab-panel uq-tabs__tab-panel--active" role="tabpanel" id="tab31-panel" aria-labelledby="tab31" tabindex="0">
        <p>Tab1 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab32-panel" aria-labelledby="tab32" tabindex="0" hidden="">
        <p>Tab2 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab33-panel" aria-labelledby="tab33" tabindex="0" hidden="">
        <p>Tab3 panel text</p>
      </div>
    </div>
    `;
  },
  play: ({ canvasElement }) => {
    const tabs = { container: canvasElement.querySelector("#tabsLinedExample")};
    if (tabs) new Tabs(tabs);
  },

  name: "Lined",
};

export const tabsWithIcon = {
  render: () => {
    return `
    <div id="tabsWithIconExample" class="uq-tabs uq-tabs--outline">
      <div class="uq-tabs__tab-list-wrapper">
        <div class="uq-tabs__tab-list" role="tablist" aria-label="Tab List">
          <button class="uq-tabs__tab uq-tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab41-panel" id="tab41">
            <span class="uq-icon uq-icon--common--search"></span> Tab 1
          </button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab42-panel" id="tab42" tabindex="-1">
            <span class="uq-icon uq-icon--common--search"></span> Tab 2
          </button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab43-panel" id="tab43" tabindex="-1">
            <span class="uq-icon uq-icon--common--search"></span> Tab 3
          </button>
        </div>
      </div>
      <div class="uq-tabs__tab-panel uq-tabs__tab-panel--active" role="tabpanel" id="tab41-panel" aria-labelledby="tab41" tabindex="0">
        <p>Tab1 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab42-panel" aria-labelledby="tab42" tabindex="0" hidden="">
        <p>Tab2 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab43-panel" aria-labelledby="tab43" tabindex="0" hidden="">
        <p>Tab3 panel text</p>
      </div>
    </div>
    `;
  },
  play: ({ canvasElement }) => {
    const tabs = { container: canvasElement.querySelector("#tabsWithIconExample")};
    if (tabs) new Tabs(tabs);
  },

  name: "With icon",
};

export const tabsFullWidth = {
  render: () => {
    return `
    <div id="tabsFullWidthExample" class="uq-tabs uq-tabs--outline uq-tabs--full-width">
      <div class="uq-tabs__tab-list-wrapper">
        <div class="uq-tabs__tab-list" role="tablist" aria-label="Tab List">
          <button class="uq-tabs__tab uq-tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab51-panel" id="tab51">Tab 1</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab52-panel" id="tab52" tabindex="-1">Tab 2</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab53-panel" id="tab53" tabindex="-1">Tab 3</button>
        </div>
      </div>
      <div class="uq-tabs__tab-panel uq-tabs__tab-panel--active" role="tabpanel" id="tab51-panel" aria-labelledby="tab51" tabindex="0">
        <p>Tab1 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab52-panel" aria-labelledby="tab52" tabindex="0" hidden="">
        <p>Tab2 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab53-panel" aria-labelledby="tab53" tabindex="0" hidden="">
        <p>Tab3 panel text</p>
      </div>
    </div>
    `;
  },
  play: ({ canvasElement }) => {
    const tabs = { container: canvasElement.querySelector("#tabsFullWidthExample")};
    if (tabs) new Tabs(tabs);
  },

  name: "Full width",
};

export const tabsSmall = {
  render: () => {
    return `
    <div id="tabsSmallExample" class="uq-tabs uq-tabs--outline uq-tabs--small">
      <div class="uq-tabs__tab-list-wrapper">
        <div class="uq-tabs__tab-list" role="tablist" aria-label="Tab List">
          <button class="uq-tabs__tab uq-tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab61-panel" id="tab61">Tab 1</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab62-panel" id="tab62" tabindex="-1">Tab 2</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab63-panel" id="tab63" tabindex="-1">Tab 3</button>
        </div>
      </div>
      <div class="uq-tabs__tab-panel uq-tabs__tab-panel--active" role="tabpanel" id="tab61-panel" aria-labelledby="tab61" tabindex="0">
        <p>Tab1 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab62-panel" aria-labelledby="tab62" tabindex="0" hidden="">
        <p>Tab2 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab63-panel" aria-labelledby="tab63" tabindex="0" hidden="">
        <p>Tab3 panel text</p>
      </div>
    </div>
    `;
  },
  play: ({ canvasElement }) => {
    const tabs = { container: canvasElement.querySelector("#tabsSmallExample")};
    if (tabs) new Tabs(tabs);
  },

  name: "Small",
};

export const tabsReversed = {
  render: () => {
    return `
    <div id="tabsReversedExample" class="uq-tabs uq-tabs--outline uq-tabs--reversed">
      <div class="uq-tabs__tab-list-wrapper">
        <div class="uq-tabs__tab-list" role="tablist" aria-label="Tab List">
          <button class="uq-tabs__tab uq-tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab71-panel" id="tab71">Tab 1</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab72-panel" id="tab72" tabindex="-1">Tab 2</button>
          <button class="uq-tabs__tab" role="tab" aria-selected="false" aria-controls="tab73-panel" id="tab73" tabindex="-1">Tab 3</button>
        </div>
      </div>
      <div class="uq-tabs__tab-panel uq-tabs__tab-panel--active" role="tabpanel" id="tab71-panel" aria-labelledby="tab71" tabindex="0">
        <p>Tab1 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab72-panel" aria-labelledby="tab72" tabindex="0" hidden="">
        <p>Tab2 panel text</p>
      </div>
      <div class="uq-tabs__tab-panel" role="tabpanel" id="tab73-panel" aria-labelledby="tab73" tabindex="0" hidden="">
        <p>Tab3 panel text</p>
      </div>
    </div>
    `;
  },
  play: ({ canvasElement }) => {
    const tabs = { container: canvasElement.querySelector("#tabsReversedExample")};
    if (tabs) new Tabs(tabs);
  },

  name: "Reversed",
};
