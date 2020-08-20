import expandedStory from '../../../.storybook/decorators/expanded.js';

// import stylesheet
import '@uq-uidf/utility/src/scss/_component.scss';

import docs from './utility.docs.mdx';

export default {
  title: 'Base/Utility',
  parameters: {
    docs: {
      page: docs
    }
  },
  decorators: [expandedStory]
};

export const utility = () => {
  return `
    <div>Coming soon</div>
  `;
};
