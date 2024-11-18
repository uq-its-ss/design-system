import { breadcrumb } from "@uqds/breadcrumb/src/js/main";
import "@uqds/layout/src/scss/main.scss";
import "@uqds/breadcrumb/src/scss/main.scss";

export default {
  title: "Components/Breadcrumb",
  parameters: {
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const Breadcrumb = {
  render: () => `
<div class="uq-breadcrumbs">
  <div class="uq-container uq-container--flex">
    <nav class="uq-breadcrumb" aria-label="Breadcrumb">
      <ol class="uq-breadcrumb__list">
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="UQ home" href="https://uq.edu.au/">UQ home</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Level one" href="/information-and-services">Level one</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Level two" href="/information-and-services/internet-and-wifi">Level two</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Bachelor of Business with a Major in Management or Finance" href="#">Bachelor of Business with a Major in Management or Finance</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Major Leadership and Management Science" href="#">Major Leadership and Management Science</a>
        </li>
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Current page" href="#">Current page</a>
        </li>
      </ol>
    </nav>
  </div>
</div>`,
  play: ({ canvasElement }) => {
    const breadcrumbs = canvasElement.querySelector(".uq-breadcrumb");
    if (breadcrumbs) new breadcrumb(breadcrumbs);
  },
};
