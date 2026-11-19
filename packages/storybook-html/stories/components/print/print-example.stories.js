import { withPrintStyles } from "../../../.storybook/custom/printPreview";
import { storyRenderer } from "../../../lib/storyRenderer";

// Every component story file except the print story itself and the core
// foundations (colour, typography), which are not components.
const modules = import.meta.glob(
  ["../**/*.stories.js", "!../print/*", "!../core/*"],
  { eager: true },
);

// Renders the first story exported by each component story file.
const renderComponent = ([path, module]) => {
  try {
    const stories = storyRenderer(module);
    const [name] = Object.keys(stories);
    const title = module.default.title.replace(/^Components\//, "");
    const output = stories[name]();
    // Some stories return DOM nodes rather than HTML strings.
    const html = output instanceof Element ? output.outerHTML : output;
    return `
<section class="uqds-print-component" data-source="${path}">
  <h2>${title}</h2>
  ${html}
</section>`;
  } catch (error) {
    return `<section><h2>${path}</h2><p>Unable to render: ${error.message}</p></section>`;
  }
};

export default {
  title: "Components/Print/Print Example",
  tags: ["!autodocs"],
  decorators: [withPrintStyles],
  parameters: {
    printMedia: true,
    docs: { source: { excludeDecorators: true } },
    layout: "padded",
    options: { showPanel: false },
  },
};

export const PrintExample = {
  render: () => `
<main id="uq-main">
  <h1>Design system components</h1>
  <p>
    Use your browser's print preview to see every component with the print
    stylesheet applied.
  </p>
  ${Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(renderComponent)
    .join("")}
</main>`,
};
