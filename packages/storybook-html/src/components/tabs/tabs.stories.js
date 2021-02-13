import { useEffect } from '@storybook/client-api';

// import styles
import './tabs.scss';

// import scripts
import Tabs from '@uqds/tabs/src/js/tabs';

// documentation
import docs from './tabs.docs.mdx';

export default {
  title: 'Components/Tabs',
  parameters: {
    docs: {
      page: docs
    },
    layout: "padded",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const tabsOutline = () => {
  useEffect(() => {
    new Tabs({container: document.getElementById('tabsDefaultExample')});
  });
  return `
  <div id="tabsDefaultExample" class="tabs tabs--outline">
    <div class="tabs__tab-list" role="tablist" aria-label="Tab List">
      <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab1-panel" id="tab1">Tab 1</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab2-panel" id="tab2" tabindex="-1">Tab 2</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab3-panel" id="tab3" tabindex="-1">Tab 3</button>
      <a class="tabs__link" href="#">Tab link</a>
    </div>
    <div class="tabs__tab-panel tabs__tab-panel--active" role="tabpanel" id="tab1-panel" aria-labelledby="tab1" tabindex="0">
      <p>Tab1 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab2-panel" aria-labelledby="tab2" tabindex="0" hidden="">
      <p>Tab2 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab3-panel" aria-labelledby="tab3" tabindex="0" hidden="">
      <p>Tab3 panel text</p>
    </div>
  </div>
  `;
};

tabsOutline.storyName = 'Default / Outline';

export const tabsMinimal = () => {
  useEffect(() => {
    new Tabs({container: document.getElementById('tabsMinimalExample')});
  });
  return `
  <div id="tabsMinimalExample" class="tabs">
    <div class="tabs__tab-list" role="tablist" aria-label="Tab List">
      <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab21-panel" id="tab21">Tab 1</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab22-panel" id="tab22" tabindex="-1">Tab 2</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab23-panel" id="tab23" tabindex="-1">Tab 3</button>
    </div>
    <div class="tabs__tab-panel tabs__tab-panel--active" role="tabpanel" id="tab21-panel" aria-labelledby="tab21" tabindex="0">
      <p>Tab1 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab22-panel" aria-labelledby="tab22" tabindex="0" hidden="">
      <p>Tab2 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab23-panel" aria-labelledby="tab23" tabindex="0" hidden="">
      <p>Tab3 panel text</p>
    </div>
  </div>
  `;
};

tabsMinimal.storyName = 'Minimal';

export const tabsLined = () => {
  useEffect(() => {
    new Tabs({container: document.getElementById('tabsLinedExample')});
  });
  return `
  <div id="tabsLinedExample" class="tabs tabs--lined">
    <div class="tabs__tab-list" role="tablist" aria-label="Tab List">
      <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab31-panel" id="tab31">Tab 1</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab32-panel" id="tab32" tabindex="-1">Tab 2</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab33-panel" id="tab33" tabindex="-1">Tab 3</button>
    </div>
    <div class="tabs__tab-panel tabs__tab-panel--active" role="tabpanel" id="tab31-panel" aria-labelledby="tab31" tabindex="0">
      <p>Tab1 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab32-panel" aria-labelledby="tab32" tabindex="0" hidden="">
      <p>Tab2 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab33-panel" aria-labelledby="tab33" tabindex="0" hidden="">
      <p>Tab3 panel text</p>
    </div>
  </div>
  `;
};

tabsLined.storyName = 'Lined';

export const tabsWithIcon = () => {
  useEffect(() => {
    new Tabs({container: document.getElementById('tabsWithIconExample')});
  });
  return `
  <div id="tabsWithIconExample" class="tabs tabs--outline">
    <div class="tabs__tab-list" role="tablist" aria-label="Tab List">
      <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab41-panel" id="tab41">
        <span class="uq-icon uq-icon--search"></span> Tab 1
      </button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab42-panel" id="tab42" tabindex="-1">
        <span class="uq-icon uq-icon--search"></span> Tab 2
      </button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab43-panel" id="tab43" tabindex="-1">
        <span class="uq-icon uq-icon--search"></span> Tab 3
      </button>
    </div>
    <div class="tabs__tab-panel tabs__tab-panel--active" role="tabpanel" id="tab41-panel" aria-labelledby="tab41" tabindex="0">
      <p>Tab1 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab42-panel" aria-labelledby="tab42" tabindex="0" hidden="">
      <p>Tab2 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab43-panel" aria-labelledby="tab43" tabindex="0" hidden="">
      <p>Tab3 panel text</p>
    </div>
  </div>
  `;
};

tabsWithIcon.storyName = 'With icon';

export const tabsFullWidth = () => {
  useEffect(() => {
    new Tabs({container: document.getElementById('tabsFullWidthExample')});
  });
  return `
  <div id="tabsFullWidthExample" class="tabs tabs--outline tabs--full-width">
    <div class="tabs__tab-list" role="tablist" aria-label="Tab List">
      <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab51-panel" id="tab51">Tab 1</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab52-panel" id="tab52" tabindex="-1">Tab 2</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab53-panel" id="tab53" tabindex="-1">Tab 3</button>
    </div>
    <div class="tabs__tab-panel tabs__tab-panel--active" role="tabpanel" id="tab51-panel" aria-labelledby="tab51" tabindex="0">
      <p>Tab1 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab52-panel" aria-labelledby="tab52" tabindex="0" hidden="">
      <p>Tab2 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab53-panel" aria-labelledby="tab53" tabindex="0" hidden="">
      <p>Tab3 panel text</p>
    </div>
  </div>
  `;
};

tabsFullWidth.storyName = 'Full width';

export const tabsSmall = () => {
  useEffect(() => {
    new Tabs({container: document.getElementById('tabsSmallExample')});
  });
  return `
  <div id="tabsSmallExample" class="tabs tabs--outline tabs--small">
    <div class="tabs__tab-list" role="tablist" aria-label="Tab List">
      <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab61-panel" id="tab61">Tab 1</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab62-panel" id="tab62" tabindex="-1">Tab 2</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab63-panel" id="tab63" tabindex="-1">Tab 3</button>
    </div>
    <div class="tabs__tab-panel tabs__tab-panel--active" role="tabpanel" id="tab61-panel" aria-labelledby="tab61" tabindex="0">
      <p>Tab1 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab62-panel" aria-labelledby="tab62" tabindex="0" hidden="">
      <p>Tab2 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab63-panel" aria-labelledby="tab63" tabindex="0" hidden="">
      <p>Tab3 panel text</p>
    </div>
  </div>
  `;
};

tabsSmall.storyName = 'Small';

export const tabsReversed = () => {
  useEffect(() => {
    new Tabs({container: document.getElementById('tabsReversedExample')});
  });
  return `
  <div id="tabsReversedExample" class="tabs tabs--outline tabs--reversed">
    <div class="tabs__tab-list" role="tablist" aria-label="Tab List">
      <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab71-panel" id="tab71">Tab 1</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab72-panel" id="tab72" tabindex="-1">Tab 2</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab73-panel" id="tab73" tabindex="-1">Tab 3</button>
    </div>
    <div class="tabs__tab-panel tabs__tab-panel--active" role="tabpanel" id="tab71-panel" aria-labelledby="tab71" tabindex="0">
      <p>Tab1 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab72-panel" aria-labelledby="tab72" tabindex="0" hidden="">
      <p>Tab2 panel text</p>
    </div>
    <div class="tabs__tab-panel" role="tabpanel" id="tab73-panel" aria-labelledby="tab73" tabindex="0" hidden="">
      <p>Tab3 panel text</p>
    </div>
  </div>
  `;
};

tabsReversed.storyName = 'Reversed';