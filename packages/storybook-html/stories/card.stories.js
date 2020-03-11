// import decorators
import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/card/card.scss';

// import HTML template strings
import cardsHTML from '../src/components/card/card.html';

export default {
  title: 'Cards'
};

export const all = () => {
  return namedSection("Cards", cardsHTML, ["story-section--cards"]);
};
