// import styles
import './style.scss';

// import HTML template strings
import allHTML from './all.html';
import inputHTML from './input.html';
import textAreaHTML from './text-area.html';
import selectHTML from './select.html';

import docs from './form.docs.mdx';

export default {
  title: 'Components/Form',
  parameters: {
    docs: {
      page: docs
    },
    previewTabs: {
      canvas: {
        hidden: false
      }
    }
  }
};

export const kitchenSink = () => {
  return allHTML;
};

export const input = () => {
  return inputHTML;
};

export const textArea = () => {
  return textAreaHTML;
};

export const select = () => {
  return selectHTML;
};
