// import decorators
import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/core/core.scss';

// import HTML template strings
import coloursHTML from '../src/components/core/colours.html';
import typoHTML from '../src/components/core/typography.html';
import blockquoteHTML from '../src/components/core/blockquote.html';
import iconsHTML from '../src/components/core/icons.html';

export default {
  title: 'Core|Core'
};

export const colors = () => {
  return namedSection("Colours", coloursHTML);
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
