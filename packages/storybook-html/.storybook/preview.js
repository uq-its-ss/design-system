import { sortStories } from './utils/helpers';

// Load core & body styles
import './preview.scss';

// Sort order of navigation
const SORT_ORDER = {
  Introduction: [
    'Welcome',
    'Getting started'
  ],
  Core: [],
  Base: [
    'Body'
  ],
  Layout: [],
  Components: [],
  Forms: [
    'Form',
    'Form errors',
    'Form validation',
    'Working examples'
  ],
  Patterns: []
};

export const parameters = {
  layout: 'centered',
  options: {
    storySort: sortStories(SORT_ORDER)
  }
};
