import './section.scss';

/**
 * Storybook decorator for wrapping whole stories.
 * @param {string} heading - The title of the story.
 * @param {(string|HTMLElement)} domNode - Contents of the story. Can be an HTML string or DOM node.
 * @param {string[]} classNames - Additional class names.
 */
function namedSectionWrapper(heading, domNode, classNames) {
  if (typeof heading !== "string") {
    console.error("Story wrapper is missing a heading (string)");
  }

  const wrapperEl = document.createElement('section');
  const headingEl = document.createElement('h1');

  wrapperEl.classList.add('story-section');
  if (classNames && Array.isArray(classNames)) {
    wrapperEl.classList.add(...classNames);
  } else if (classNames) {
    console.error("class names should be in an array of strings");
  }
  headingEl.classList.add('story-section__heading');
  headingEl.appendChild(document.createTextNode(heading));

  const element = domNode;

  if (typeof element === 'string') {
    wrapperEl.innerHTML = element;
    wrapperEl.prepend(headingEl);
  } else if (typeof element === 'object') {
    wrapperEl.innerHTML = '';
    wrapperEl.appendChild(headingEl);
    wrapperEl.appendChild(element);
  } else {
    console.error("Story wrapper is missing HTML string/DOM object.");
    return element;
  }
  
  return wrapperEl;
};

export { namedSectionWrapper as default };
