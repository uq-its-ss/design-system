// import styles
import './panel-pane.scss';

// import HTML template strings
import panelPaneHTML from './panel-pane.html';

// import Docs
import docs from './panel-pane.docs.mdx';

export default {
  title: 'Components/Panel Pane',
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const panelPaneAll = () => {
  return panelPaneHTML;
};

panelPaneAll.story = {
  name: 'All'
}

export const panelPane = () => {
  return `
  <div class="panel-pane">
    <div class="panel-pane__content">
      <div class="row">
        <div class="columns">
          <h1 class="panel-pane__title">Page Title</h1>
        </div>
      </div>
    </div>
  </div>
  `;
};

panelPane.story = {
  name: 'Default'
}

export const panelPaneWhite = () => {
  return `
  <div class="panel-pane panel-pane--white">
    <div class="panel-pane__content">
      <div class="row">
        <div class="columns">
          <h1 class="panel-pane__title">Page Title</h1>
        </div>
      </div>
    </div>
  </div>
  `;
};

panelPaneWhite.story = {
  name: 'White'
}