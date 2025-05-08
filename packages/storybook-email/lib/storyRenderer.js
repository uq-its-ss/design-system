/**
 * Allow easier rendering of HTML stories.
 *
 * For usage example:
 * @see packages/storybook-html/stories/docs/introduction/overview.stories.js
 */
export const storyRenderer = (Story) => {
  const stories = {};

  // Remove any default decorators.
  delete Story.default.decorators;

  Object.keys(Story).forEach((key) => {
    // Remove any story decorators.
    if (Story[key].decorators) {
      delete Story[key].decorators;
    }

    // Ensure each export has a render function.
    if (Story.default.render && !Story[key].render) {
      Story[key].render = Story.default.render;
    }

    // Combine args from default story.
    if (Story.default.args) {
      Story[key].args = {
        ...Story.default.args,
        ...Story[key].args,
      };
    }

    // Return story as a function.
    stories[key] = (args) =>
      Story[key].render({
        ...Story[key].args,
        ...args,
      });
  });

  return stories;
};
