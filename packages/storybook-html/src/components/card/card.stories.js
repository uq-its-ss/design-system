// import decorators
import namedSection from '../../decorators/section.js';

// import styles
import './card.scss';

// import HTML template strings
import cardsHTML from './card.html';

export default {
  title: 'Components/Cards'
};

export const all = () => {
  return namedSection("Cards", cardsHTML, ["story-section--cards"]);
};
