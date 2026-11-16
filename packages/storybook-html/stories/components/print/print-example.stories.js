import printStyles from "@uqds/print/src/scss/main.scss?inline";
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
    return `
<section class="uqds-print-component" data-source="${path}">
  <h2>${title}</h2>
  ${stories[name]()}
</section>`;
  } catch (error) {
    return `<section><h2>${path}</h2><p>Unable to render: ${error.message}</p></section>`;
  }
};

export default {
  title: "Components/Print/Print Example",
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    options: { showPanel: false },
  },
};

export const PrintExample = {
  render: () => `
<style>${printStyles}</style>
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
