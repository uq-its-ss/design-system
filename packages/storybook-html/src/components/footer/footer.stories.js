import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './footer.scss';

// import HTML template strings
import footerHTML from './footer.html';

export default {
    title: 'Components/Footer',
    decorators: [expandedStory]
};

export const footer = () => {
    return document.createElement('div').innerHTML = footerHTML;
};
