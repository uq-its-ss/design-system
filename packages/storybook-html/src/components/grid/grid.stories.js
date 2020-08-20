import expandedStory from '../../../.storybook/decorators/expanded.js';

// import stylesheet
import '@uq-uidf/grid/src/scss/_component.scss';

import docs from './grid.docs.mdx';

export default {
  title: 'Layout/Grid',
  parameters: {
    docs: {
      page: docs
    }
  },
  decorators: [expandedStory]
};

export const grid = () => {
  return `
    <div>Coming soon</div>
  `;
};
