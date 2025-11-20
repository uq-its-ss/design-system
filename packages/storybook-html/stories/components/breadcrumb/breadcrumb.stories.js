import { breadcrumb } from "@uqds/breadcrumb/src/js/main";

export default {
  title: "Components/Breadcrumb",
  argTypes: {
    showLevels: {
      control: "number",
    },
    levelOne: "text",
    levelTwo: "text",
    levelThree: "text",
    levelFour: "text",
    currentPage: "text",
  },
  args: {
    showLevels: 4,
    levelOne: "Level one",
    levelTwo: "Level two",
    levelThree: "Level three",
    levelFour: "Level four",
    currentPage: "Current page",
  },
  render: ({
    showLevels,
    levelOne,
    levelTwo,
    levelThree,
    levelFour,
    currentPage,
  }) => `
<div class="uq-breadcrumbs">
  <div class="uq-container uq-container--flex">
    <nav class="uq-breadcrumb" aria-label="Breadcrumb">
      <ol class="uq-breadcrumb__list">
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="UQ home" href="https://uq.edu.au">UQ home</a>
        </li>
        ${
          showLevels > 0
            ? `
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Level one" href="/information-and-services">${levelOne}</a>
        </li>`
            : ""
        }
        ${
          showLevels > 1
            ? `
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Level two" href="/information-and-services/internet-and-wifi">${levelTwo}</a>
        </li>`
            : ""
        }
        ${
          showLevels > 2
            ? `
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Bachelor of Business with a Major in Management or Finance" href="#">${levelThree}</a>
        </li>`
            : ""
        }           
        ${
          showLevels > 3
            ? `
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Major Leadership and Management Science" href="#">${levelFour}</a>
        </li>`
            : ""
        }   
        <li class="uq-breadcrumb__item">
          <a class="uq-breadcrumb__link" title="Current page" href="#">${currentPage}</a>
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

export const Breadcrumb = {};
