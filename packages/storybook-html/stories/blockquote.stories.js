// import styles
import '../src/components/blockquote/blockquote.scss';

// import HTML template strings
import blockquoteHTML from '../src/components/blockquote/blockquote.html';

export default {
  title: 'Blockquote'
};

export const blockquote = () => {
  return document.createElement('div').innerHTML = blockquoteHTML;
};