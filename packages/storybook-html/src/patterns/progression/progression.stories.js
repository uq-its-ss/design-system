// import HTML template strings
import progressionHTML from '../../components/progression/progression.html';

export default {
    title: 'Patterns/Progression - text, step ',
    parameters: {
      docs: {
        inlineStories: false
      },
      layout: 'padded',
      previewTabs: {
        canvas: {hidden: false}
      }
    }
};

export const example = () => {
    return `
      <br/><br/>
      <div class="uq-grid">
        <div class="uq-grid__col uq-grid__col--6">
          <div class="progression-text">Step <span class="step-current">2</span> of <span class="step-total">4</span></div>
        </div>
      </div>
      <br/><br/>
      ${progressionHTML}
    `;
};
