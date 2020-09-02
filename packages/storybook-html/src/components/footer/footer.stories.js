// import styles
import './footer.scss';

// import HTML template strings
import footerHTML from './footer.html';

export default {
  title: 'Components/Footer',
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: 'UQ Neutral 1',
      values: [
        { name: 'UQ Neutral 1', value: '#D7D1CC' }
      ]
    }
  }
};

export const footer = () => {
  return footerHTML;
};
