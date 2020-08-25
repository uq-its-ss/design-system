import expandedStory from '../../../.storybook/decorators/expanded.js';

// import stylesheet
import '@uq-uidf/typography/src/scss/_component.scss';

import docs from './typography.docs.mdx';

export default {
  title: 'Base/Typography',
  parameters: {
    docs: {
      page: docs
    }
  },
  decorators: [expandedStory]
};

export const typography = () => {
  return `
    <div>Coming soon</div>
  `;
};
