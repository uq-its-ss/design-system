import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './header.scss';

// import scripts
import headerCreate from '@uq-uidf/header/src/js/header.es6';

// import HTML template strings
import headerHTML from './header.html';

import docs from './header.docs.mdx';

export default {
    title: 'Components/Header',
    parameters: {
      docs: {
        page: docs
      }
    },
    decorators: [expandedStory]
};

export const header = () => {
    useEffect(() => {
        new headerCreate();
      });
    return headerHTML;
};

header.story = {
  name: "Header" 
}
  

