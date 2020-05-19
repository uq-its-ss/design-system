import { addParameters, addDecorator } from '@storybook/html';
import { themes } from '@storybook/theming';

// Load core & body styles
import './preview.scss';

addParameters({
  options: {
    theme: themes.normal,
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

addDecorator(centerStory);
