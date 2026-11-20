import { withPrintStyles } from "../../../.storybook/custom/printPreview";
import { storyRenderer } from "../../../lib/storyRenderer";

// Every component story file except the print story itself and the core
// foundations (colour, typography), which are not components.
const modules = import.meta.glob(
  ["../**/*.stories.js", "!../print/*", "!../core/*"],
  { eager: true },
);

// Renders every story exported by each component story file.
const renderComponent = ([path, module]) => {
  try {
    const stories = storyRenderer(module);
    const title = module.default.title.replace(/^Components\//, "");
    const entries = Object.entries(stories).filter(
      ([n]) => !["default", "__namedExportsOrder"].includes(n),
    );
    const body = entries
      .map(([name, render]) => {
        try {
          const output = render();
          // Some stories return DOM nodes rather than HTML strings.
          const html = output instanceof Element ? output.outerHTML : output;
          const heading = entries.length > 1 ? `<h3>${name}</h3>` : "";
          return `${heading}${html}`;
        } catch (error) {
          return `<p>Unable to render ${name}: ${error.message}</p>`;
        }
      })
      .join("");
    return `
<section class="uqds-print-component" data-source="${path}">
  <h2>${title}</h2>
  ${body}
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
