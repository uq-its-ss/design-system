// import decorators
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './core.scss';

// import HTML template strings
import coloursHTML from './colours.html';

export default {
  title: 'Core/Core'
};

export const colors = () => {
  return coloursHTML;
};

colors.story = {
  decorators: [expandedStory]
};

export const fonts = () => {
  return `
    <div class="uidf-fonts">
      <div class="uidf-font uidf-font--roboto">Roboto Regular 400</div>
      <div class="uidf-font uidf-font--roboto uidf-font--500">Roboto Medium 500</div>
      <div class="uidf-font uidf-font--merriweather uidf-font--italic">Merriweather Regular 400 italic</div>
      <div class="uidf-font--montserrat uidf-font--500">Montserrat Medium 500</div>
    </div>
  `;
};
