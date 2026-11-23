// import stylesheet
import "./body.scss";

export default {
  title: "Components/Body/Skip links",
  parameters: {
    layout: "padded",
  },
};

export const SkipLinks = {
  name: "Skip links",
  decorators: [
    (story) => {
      const content = story();
      const intro = "<p>Tab to skip links to make them visible</p>";
      if (typeof content === "string") {
        return intro + content;
      }
      const fragment = document.createDocumentFragment();
      fragment.append(
        document.createRange().createContextualFragment(intro),
        content,
      );
      return fragment;
    },
  ],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
      },
    },
  },
  render:
    () => `<a href="#uq-main" class="visually-hidden focusable">Skip to content</a>
    <a href="#uq-footer" class="visually-hidden focusable">Skip to footer</a>
  `,
};
