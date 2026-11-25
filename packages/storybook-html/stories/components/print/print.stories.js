import { withPrintStyles } from "../../../.storybook/custom/printPreview";

export default {
  title: "Components/Print",
  decorators: [withPrintStyles],
  parameters: {
    printMedia: true,
    docs: {
      source: { excludeDecorators: true },
      story: { inline: false, height: "200px" },
    },
  },
  render: () => `
<article>
  <h2>Print stylesheet example</h2>
  <p>
    Use your browser's print preview to see how this content changes. Links show their
    destination, for example
    <a href="https://www.uq.edu.au">The University of Queensland</a>, and
    <abbr title="University of Queensland">UQ</abbr> shows its full title.
  </p>
  <blockquote>
    <p>Blockquotes avoid being split across pages.</p>
  </blockquote>
</article>`,
};

export const Print = {};
