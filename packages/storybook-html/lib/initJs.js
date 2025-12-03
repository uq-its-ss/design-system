export const initJs = (storyFn, initFn) => {
  // storyFn outputs a string.
  const htmlString = storyFn();

  // Use DomParser to parse string to a HTML document.
  const parser = new DOMParser();
  const document = parser.parseFromString(htmlString, "text/html");

  // The component is the first element.
  const component = document.body.firstElementChild;

  // Run the initFn on the component, after the HTML renders.
  queueMicrotask(() => initFn(component));

  return component;
};
