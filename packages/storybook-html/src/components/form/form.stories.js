// import styles
import './style.scss';

// import HTML template strings
import allHTML from './all.html';
import inputHTML from './input.html';
import textAreaHTML from './text-area.html';
import selectHTML from './select.html';

export default {
  title: 'Forms/Form',
  previewTabs: {
    canvas: {hidden: false}
  }
};

export const kitchenSink = () => {
  return allHTML;
};

kitchenSink.storyName = "Kitchen sink";

export const input = () => {
  return inputHTML;
};

export const textArea = () => {
  return textAreaHTML;
};

textArea.storyName = "Text area";

export const select = () => {
  return selectHTML;
};
