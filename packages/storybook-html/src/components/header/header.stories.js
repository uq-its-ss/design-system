import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './header.scss';

// import scripts
import headerCreate from '@uq-uidf/header/src/js/header.es6';

// import HTML template strings
import headerHTML from './header.html';

export default {
    title: 'Components/Header',
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
  