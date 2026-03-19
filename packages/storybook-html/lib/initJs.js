/**
 * Call JS for html components using a decorator.
 *
 * Caveats:
 * 1. Component markup must be wrapped in a single tag. This works for most of
 * our stories - however some may not have a single top level tag, in which case
 * they will need to be wrapped in a `<div>`.
 *
 * 2. The initJs decorator will not be run when stories are embedded in other
 * stories. In these cases the top level story must implement its own initJs
 * decorator and call all the child component js.
 *
 * 3. There can't be more than one initJs decorator on a story, and it must be
 * last in the array. So don't add it to the decorators list on the default
 * component story declaration, and then own an individual story too.
 */
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
