// import styles
import './blockquote.scss';

// import HTML template strings
import blockquoteHTML from './blockquote.html';
import blockquoteLightHTML from './blockquote-light.html';

// documentation
import docs from './blockquote.docs.mdx';

export default {
  title: 'Components/Blockquote',
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

export const blockquote = () => {
  return blockquoteHTML;
};
blockquote.storyName = 'Default';

export const blockquoteLight = () => {
  return blockquoteLightHTML;
};
blockquoteLight.storyName = 'Light';
blockquoteLight.parameters = {
  docs: {
     inlineStories: false
  },
  backgrounds: {
    default: 'Purple',
    values: [
      {
        name: 'Purple',
        value: '#51247A',
      }
    ],
  } 
};
