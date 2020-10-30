// import styles
import './blockquote.scss';

// import HTML template strings
import blockquoteHTML from './blockquote.html';

export default {
  title: 'Components/Blockquote',
  parameters: {
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const blockquote = () => {
  return blockquoteHTML;
};
