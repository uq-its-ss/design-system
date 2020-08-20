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
  //decorators: [expandedStory]
};

export const progression = () => {
  return progressionHTML;
};

progression.story = {
  name: 'Progression Step 0'
}

export const progressionStep1 = () => {
  return `
  <div class="uidf-progression-wrapper">
    <ul class="progression">
      <li class="progression__step is-complete">
        <div class="progression__step-marker">
          <a class="progression__link" href="#">
            <span class="progression__step-number">1</span>
            <span class="progression__step-label">Step 1</span>
          </a>
        </div>
        <div class="progression__bar">&nbsp;</div>
      </li>
      <li class="progression__step">
        <div class="progression__step-marker">
          <a class="progression__link" href="#">
            <span class="progression__step-number">2</span>
            <span class="progression__step-label">Step 2</span>
          </a>
        </div>
        <div class="progression__bar">
          <ul class="progression__sub-step">
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
          </ul>
        </div>
      </li>
      <li class="progression__step">
        <div class="progression__step-marker">
          <a class="progression__link" href="#">
            <span class="progression__step-number">3</span>
            <span class="progression__step-label">Step 3</span>
          </a>
        </div>
        <div class="progression__bar">
          <ul class="progression__sub-step">
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
          </ul>
        </div>
      </li>
      <li class="progression__step">
        <div class="progression__step-marker">
          <a class="progression__link" href="#">
            <span class="progression__step-number">4</span>
            <span class="progression__step-label">Step 4</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
  `;
};

progressionStep1.story = {
  name: 'Progression Step 1'
}

export const progressionStep2 = () => {
  return `
  <div class="uidf-progression-wrapper">
    <ul class="progression">
      <li class="progression__step is-complete">
        <div class="progression__step-marker">
          <a class="progression__link" href="#">
            <span class="progression__step-number">1</span>
            <span class="progression__step-label">Step 1</span>
          </a>
        </div>
        <div class="progression__bar progression__bar--complete">&nbsp;</div>
      </li>
      <li class="progression__step">
        <div class="progression__step-marker">
          <a class="progression__link" href="#">
            <span class="progression__step-number">2</span>
            <span class="progression__step-label">Step 2</span>
          </a>
        </div>
        <div class="progression__bar">
          <ul class="progression__sub-step">
            <li class="progression__bar progression__bar--complete">&nbsp;</li>
            <li class="progression__bar progression__bar--complete">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
          </ul>
        </div>
      </li>
      <li class="progression__step">
        <div class="progression__step-marker">
          <a class="progression__link" href="#">
            <span class="progression__step-number">3</span>
            <span class="progression__step-label">Step 3</span>
          </a>
        </div>
        <div class="progression__bar">
          <ul class="progression__sub-step">
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
            <li class="progression__bar">&nbsp;</li>
          </ul>
        </div>
      </li>
      <li class="progression__step">
        <div class="progression__step-marker">
          <a class="progression__link" href="#">
            <span class="progression__step-number">4</span>
            <span class="progression__step-label">Step 4</span>
          </a>
        </div>
      </li>
    </ul>
  </div>  
  `;
};

progressionStep2.story = {
  name: 'Progression Step 2'
}