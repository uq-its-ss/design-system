import { addParameters, addDecorator } from '@storybook/html';
import { themes } from '@storybook/theming';

import { sortStories } from './utils/helpers';

// Load core & body styles
import './preview.scss';

// Sort order of navigation
const SORT_ORDER = {
  Introduction: [
    'Welcome'
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

addParameters({
  options: {
    theme: themes.normal,
    storySort: sortStories(SORT_ORDER),
    showRoots: true
  }
});

/**
 * Storybook decorator function.
 * @param {storyFn} storyFn - Story function.
 */
const centerStory = storyFn => {
  const HTMLContent = storyFn();
  if (typeof HTMLContent == "string") {
    return `<div class="story--centered"><div>${HTMLContent}</div></div>`
  } else {
    const HTMLObj = document.createElement('div');
    const HTMLObjInner = document.createElement('div');
    HTMLObj.classList.add('story--centered');
    HTMLObjInner.appendChild(HTMLContent);
    HTMLObj.appendChild(HTMLObjInner);
    return HTMLObj;
  }
};

// Centre all stories by default
addDecorator(centerStory);
