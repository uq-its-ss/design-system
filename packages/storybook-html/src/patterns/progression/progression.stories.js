import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import HTML template strings
import progressionHTML from '../../components/progression/progression.html';

export default {
    title: 'Patterns/Progression - Text, Step ',
    decorators: [expandedStory]
};

export const example = () => {
    useEffect(() => {

      });
    return `
      <br/><br/>
      <div class="row">
        <div class="column">
          <div class="progression-text">Step <span class="step-current">2</span> of <span class="step-total">4</span></div>
        </div>
      </div>
      <br/><br/>
      ${progressionHTML}
    `;
};
