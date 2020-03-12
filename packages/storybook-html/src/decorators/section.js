import '../decorators/section.scss';

const namedSectionWrapper = (heading, domNode) => {
  const wrapperEl = document.createElement('section');
  const headingEl = document.createElement('h1');
  wrapperEl.classList.add('story-section');
  headingEl.classList.add('story-section__heading');
  headingEl.appendChild(document.createTextNode(heading));

  const element = domNode;
  
  console.log(typeof domNode);
  console.log(domNode);

  if (typeof element === 'string') {
    wrapperEl.innerHTML = element;
    wrapperEl.prepend(headingEl);
  } else if (typeof element === 'object') {
    wrapperEl.innerHTML = '';
    wrapperEl.appendChild(headingEl);
    wrapperEl.appendChild(element);
  } else {
    return element;
  }
  
  return wrapperEl;
};

export { namedSectionWrapper as default };
