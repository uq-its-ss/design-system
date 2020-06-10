import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './header.scss';

// import HTML template strings
import headerHTML from './header.html';

export default {
    title: 'Components/Header',
    decorators: [expandedStory]
};

export const header = () => {
    return document.createElement('div').innerHTML = headerHTML;
};
