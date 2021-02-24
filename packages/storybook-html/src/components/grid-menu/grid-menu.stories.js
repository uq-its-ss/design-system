// import styles
import './grid-menu.scss';

// import docs
import docs from './grid-menu.docs.mdx';

// import HTML template strings
import gridMenuHTML from './grid-menu.html';
import gridMenuEqualisedHTML from './grid-menu-equalised.html';

export default {
  title: 'Components/Grid menu',
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

export const gridMenuAll = () => {
  return gridMenuHTML;
};

gridMenuAll.storyName = "Grid menu all";

// add more keywords
gridMenuAll.parameters = { notes: 'links'};

export const equalised = () => {
  return gridMenuEqualisedHTML;
};

equalised.storyName = "Grid menu equalised";
