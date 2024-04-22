import classNames from "classnames";
import "@uqds/sections/src/scss/main.scss";

export default {
  title: "Components/Section",
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    shaded: {
      control: "boolean",
    },
  },
};

export const Section = {
  args: {
    title: "Title",
    description: "Description",
    content: "",
    shaded: false,
  },
  render: ({ title, description, content, shaded }) => `
<section class="${classNames("uq-section", { "uq-section--shaded": shaded })}">
  <div class="uq-section__header">
    ${title ? `<h2 class="uq-section__title">${title}</h2>` : ""}
    ${
      description
        ? `
    <div class="uq-section__description">
      <p>${description}</p>
    </div>`
        : ""
    }
  </div>
  ${content}
</section>`,
};

export const Shaded = {
  ...Section,
  args: {
    title: "Title",
    description: "Description",
    content: "",
    shaded: true,
  },
};

export const Container = {
  name: "With container",
  args: {
    title: "Title",
    description: "Description",
    content: "",
    shaded: false,
  },
  render: ({ title, description, content, shaded }) => `
<section class="${classNames("uq-section", { "uq-section--shaded": shaded })}">
  <div class="uq-container">
    <div class="uq-section__header">
      ${title ? `<h2 class="uq-section__title">${title}</h2>` : ""}
      ${
        description
          ? `
      <div class="uq-section__description">
        ${description}
      </div>`
          : ""
      }
    </div>
    ${content}
  </div>
</section>`,
};

export const ShadedContainer = {
  ...Container,
  args: {
    title: "Title",
    description: "Description",
    content: "",
    shaded: true,
  },
};
