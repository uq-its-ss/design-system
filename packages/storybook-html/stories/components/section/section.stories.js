import classNames from "classnames";
import "@uqds/sections/src/scss/main.scss";

export default {
  title: "Components/Section",
  argTypes: {
    title: {
      control: "text",
    },
    headingElement: {
      options: ["h2", "h3", "h4", "h5", "h6"],
      control: "select",
    },
    description: {
      control: "text",
    },
    shaded: {
      control: "boolean",
    },
    noMargin: {
      control: "boolean",
    },
  },
};

export const Section = {
  args: {
    title: "Title",
    headingElement: "h3",
    link: `<a href="#">See more</a>`,
    description: "Description",
    content: "",
    shaded: false,
    noMargin: false,
  },
  render: ({
    title,
    headingElement,
    link,
    description,
    content,
    shaded,
    noMargin,
  }) => `
<section class="${classNames("uq-section", {
    "uq-section--shaded": shaded,
    "uq-section--no-margin": noMargin,
  })}">
  <div class="uq-section__header">
    ${
      title
        ? `<${headingElement} class="uq-section__title">${title}</${headingElement}>`
        : ""
    }
    ${link ? `<div class="uq-section__link">${link}</div>` : ""}
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
    ...Section.args,
    shaded: true,
  },
};

export const Container = {
  name: "With container",
  args: {
    title: "Title",
    headingElement: "h3",
    description: "Description",
    content: "",
    shaded: false,
  },
  render: ({ title, headingElement, description, content, shaded }) => `
<section class="${classNames("uq-section", { "uq-section--shaded": shaded })}">
  <div class="uq-container">
    <div class="uq-section__header">
      ${
        title
          ? `<${headingElement} class="uq-section__title">${title}</${headingElement}>`
          : ""
      }
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
    ...Container.args,
    shaded: true,
  },
};

export const NoMargin = {
  ...Section,
  args: {
    ...Section.args,
    noMargin: true,
  },
};
