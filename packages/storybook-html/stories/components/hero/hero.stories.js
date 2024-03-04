import "@uqds/layout/src/scss/main.scss";
import "@uqds/hero/src/scss/main.scss";
import "@uqds/button/src/scss/main.scss";
import classNames from "classnames";

export default {
  title: "Components/Hero",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    light: {
      control: "boolean",
    },
    large: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    button: {
      control: "text",
    },
    image: {
      control: "select",
      options: [
        "hero-example-1.jpg",
        "hero-example-2.jpg",
        "hero-example-3.jpg",
        "hero-example-4.jpg",
        "hero-example-5.jpg",
        "hero-example-6.jpg",
      ],
    },
  },
  render: ({ light, large, title, description, button, image }) => `
<div class="${classNames("uq-hero", {
    "uq-hero--light": light,
    "uq-hero--large": large,
  })}">
  <div class="uq-hero__image">
    <img src="/images/hero/${image}" alt="" role="presentation" />
  </div>
  <div class="uq-container">
    <div class="uq-hero__content">
      <h1 class="uq-hero__title">${title}</h1>
      <div class="uq-hero__description">
        <p>${description}</p>
      </div>
      ${
        button
          ? `<div class="uq-hero__button">
        <a class="${classNames("uq-button", {
          "uq-button--purple": light,
        })}" href="#">${button}</a>
      </div>`
          : ""
      }
    </div>
  </div>
</div>`,
};

export const Hero = {
  name: "Hero",
  args: {
    light: true,
    large: true,
    title: "Title",
    description: "Description",
    button: "Button",
    image: "hero-example-2.jpg",
  },
};

export const Home = {
  name: "Home",
  args: {
    light: true,
    large: true,
    title: "Master the unknown",
    description:
      "Reduced fees and online study available across many of our postgraduate degrees.",
    button: "Explore programs",
    image: "hero-example-1.jpg",
  },
};

export const Level1 = {
  name: "Level 1",
  args: {
    light: true,
    large: false,
    title: "About",
    description:
      "Reduced fees and online study available across many of our postgraduate degrees.",
    button: "",
    image: "hero-example-3.jpg",
  },
};

export const Level2 = {
  name: "Level 2",
  args: {
    light: false,
    large: false,
    title: "Events",
    description:
      "Events for the UQ community, including the public, industry, researchers, staff and students.",
    button: "",
    image: "hero-example-4.jpg",
  },
};
