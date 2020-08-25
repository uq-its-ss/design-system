// import decorators
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './core.scss';

// import HTML template strings
import coloursHTML from './colours.html';

// docs
import docs from './core.docs.mdx';

export default {
  title: 'Core/Core',
  parameters: {
    docs: {
      page: docs
    }
  },
};

export const colours = () => {
  return coloursHTML;
};

colours.story = {
  decorators: [expandedStory]
};

export const fonts = () => {
  return `
    <div class="uidf-fonts">
      <div class="uidf-font uidf-font--roboto uidf-font--300">Roboto Light 300 (deprecated)</div>
      <div class="uidf-font uidf-font--roboto">Roboto Regular 400</div>
      <div class="uidf-font uidf-font--roboto uidf-font--500">Roboto Medium 500</div>
      <div class="uidf-font uidf-font--merriweather uidf-font--italic">Merriweather Regular 400 italic</div>
      <div class="uidf-font--montserrat uidf-font--500">Montserrat Medium 500</div>
    </div>
  `;
};
