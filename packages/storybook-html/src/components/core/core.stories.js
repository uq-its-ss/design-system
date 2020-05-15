// import decorators
import expandedStory from '../../../.storybook/decorators/expanded.js';
import namedSection from '../../../.storybook/decorators/section.js';

// import styles
import './core.scss';

// import HTML template strings
import coloursHTML from './colours.html';
import typoHTML from './typography.html';
import blockquoteHTML from './blockquote.html';
import iconsHTML from './icons.html';

export default {
  title: 'Core/Core'
};

export const colors = () => {
  return namedSection("Colours", coloursHTML);
};

colors.story = {
  decorators: [expandedStory]
};

export const typography = () => {
  return namedSection("Base typography", typoHTML);
};

export const blockquote = () => {
  return namedSection("Base blockquote", blockquoteHTML);
};

export const icons = () => {
  return namedSection("Icons", iconsHTML);
};
