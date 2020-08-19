import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './progression.scss';

// import HTML template strings
import progressionHTML from './progression.html';

// documentation
import docs from './progression.docs.mdx';

export default {
  title: 'Components/Progression',
  parameters: {
    docs: {
      page: docs
    }
  },
  decorators: [expandedStory]
};

export const progression = () => {
  return progressionHTML;
};

progression.story = {
  name: 'Progression'
}

export const progressionText = () => {
  return `
    <div class="uq-previous-next">
      <div class="uq-previous-next__item">
        <a href="#" class="uq-previous-next__link-previous">Enrolment basics <span class="uq-previous-next__description">Previous</span></a>
      </div>

      <div class="uq-previous-next__item uq-previous-next__item--hidden">
        <a href="#" class="uq-previous-next__link-next">How to enrol <span class="uq-previous-next__description">Next</span></a>
      </div>
    </div>
  `;
};

progressionText.story = {
  name: 'progressionText'
}

export const progressionStep = () => {
  return `
    <div class="uq-previous-next">
      <div class="uq-previous-next__item uq-previous-next__item--hidden">
        <a href="#" class="uq-previous-next__link-previous">Enrolment basics <span class="uq-previous-next__description">Previous</span></a>
      </div>

      <div class="uq-previous-next__item">
        <a href="#" class="uq-previous-next__link-next">How to enrol <span class="uq-previous-next__description">Next</span></a>
      </div>
    </div>
  `;
};

progressionStep.story = {
  name: 'ProgressionStep'
}