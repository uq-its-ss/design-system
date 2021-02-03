// import styles
import './hero.scss';

// import HTML template strings
import heroHTML from './hero.html';

// import Docs
import docs from './hero.docs.mdx';

export default {
  title: 'Components/Hero',
  parameters: {
    docs: {
      page: docs
    },
    layout: "fullscreen",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const hero = () => {
  return heroHTML;
};

hero.storyName = 'All';
