import './expanded.scss';

/**
 * Storybook decorator function.
 * @param {storyFn} storyFn - Story function.
 */
export default storyFn => {
  const HTMLContent = storyFn();
  if (typeof HTMLContent == "string") {
    return `<div class="story--expanded"><div>${HTMLContent}<div></div>`
  } else {
    const HTMLObj = document.createElement('div');
    const HTMLObjInner = document.createElement('div');
    HTMLObj.classList.add('story--expanded');
    HTMLObjInner.appendChild(HTMLContent);
    HTMLObj.appendChild(HTMLObjInner);
    return HTMLObj;
  }
};
