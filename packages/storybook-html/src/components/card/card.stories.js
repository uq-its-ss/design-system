// import styles
import './card.scss';

// import HTML template strings
import cardsHTML from './card.html';

export default {
  title: 'Components/Cards',
  parameters: {
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const all = () => {
  return cardsHTML;
};
