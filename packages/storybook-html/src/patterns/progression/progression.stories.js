// import HTML template strings
import progressionHTML from '../../components/progression/progression.html';

export default {
    title: 'Patterns/Progression - Text, Step ',
    parameters: {
      docs: {
        inlineStories: false
      },
      layout: 'padded'
    }
};

export const example = () => {
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
