// import styles
import './tabs.scss';

// import HTML template strings
import tabsHTML from './tabs.html';

// import scripts
//import '@uqds/tabs/src/js/tabs.es6';

// documentation
//import docs from './tabs.docs.mdx';

export default {
  title: 'Components/Tabs',
  parameters: {
    /*docs: {
      page: docs
    },*/
    layout: "padded",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const all = () => {
  return tabsHTML;
};

export const tabsDefault = () => {
  return `
  <div class="tabs tabs--bordered">
    <div class="tabs__tab-list" role="tablist" aria-label="Tab List">
      <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab1-panel" id="tab1">Tab 1</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab2-panel" id="tab2" tabindex="-1">Tab 2</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab3-panel" id="tab3" tabindex="-1">Tab 3</button>
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

tabsDefault.storyName = 'Default';

export const tabsFullWidth = () => {
  return `
  <div class="tabs tabs--bordered tabs--full-width">
    <div class="tabs__tab-list" role="tablist" aria-label="Tab List">
      <button class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab1-panel" id="tab1">Tab 1</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab2-panel" id="tab2" tabindex="-1">Tab 2</button>
      <button class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab3-panel" id="tab3" tabindex="-1">Tab 3</button>
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

tabsFullWidth.storyName = 'Full width';
