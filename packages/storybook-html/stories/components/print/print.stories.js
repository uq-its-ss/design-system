import printStyles from "@uqds/print/src/scss/main.scss?inline";

export default {
  title: "Components/Print",
  render: () => `
<style>${printStyles}</style>
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
