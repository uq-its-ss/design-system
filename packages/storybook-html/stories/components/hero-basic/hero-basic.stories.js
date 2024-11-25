import classNames from "classnames";
import "@uqds/layout/src/scss/main.scss";
import "@uqds/hero/src/scss/main.scss";
import "@uqds/tabs/src/scss/main.scss";
import "@uqds/icon/src/scss/main.scss";

export default {
  title: "Components/Heros/Hero basic",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    eyebrow: {
      control: "text",
    },
    title: {
      control: "text",
    },
    back: {
      control: "text",
    },
    image: {
      control: "select",
      options: [
        "none",
        "images/hero/hero-basic-example-1.jpg",
        "images/hero/hero-basic-example-2.jpg",
        "images/hero/hero-basic-example-3.jpg",
      ],
    },
    tabs: {
      control: "array",
    },
  },
};

export const HeroBasic = {
  name: "Hero basic",
  args: {
    eyebrow: "Eyebrow",
    title: "Title",
    back: "Back link",
    image: "images/hero/hero-basic-example-1.jpg",
    tabs: ["Tab 1", "Tab 2", "Tab 3"],
  },
  render: ({ eyebrow, title, back, image, tabs }) => `
<div class="uq-hero-basic">
  ${
    image !== "none"
      ? `
  <div class="uq-hero-basic__image">
    <img src="${image}" alt="" role="presentation" />
  </div>`
      : ""
  }
  <div class="uq-container">
    <div class="uq-hero-basic__content">
      <h1 class="uq-hero-basic__title">
        ${
          eyebrow
            ? `<span class="uq-hero-basic__eyebrow">${eyebrow}</span>`
            : ""
        }
        ${title}
      </h1>
      ${
        back
          ? `
      <div class="uq-hero-basic__back">
        <a href="#">
          <span class="uq-icon uq-icon--common--chevron-left uq-icon--light"></span>${back}
        </a>
      </div>`
          : ""
      }
    </div>
    ${
      tabs && !!tabs.length
        ? `
    <div class="uq-hero-basic__tabs">
      <div class="uq-tabs">
        <div class="uq-tabs__tab-list-wrapper">
          <div class="uq-tabs__tab-list" role="tablist" aria-label="Tab List">
            ${tabs
              .map(
                (name, index) => `
            <a class="${classNames("uq-tabs__tab", {
              "uq-tabs__tab--active": index === 0,
            })}">
              ${name}
            </a>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>`
        : ""
    }
  </div>
</div>`,
};

export const Basic = {
  ...HeroBasic,
  name: "Basic",
  args: {
    eyebrow: "Step 1 of 8",
    title: "Choose your program",
    back: "Postgraduate coursework",
    image: "none",
    tabs: [],
  },
};

export const Program = {
  ...HeroBasic,
  name: "Home",
  args: {
    eyebrow: "Bachelors of",
    title: "Agribusiness / Agricultural Science",
    back: "",
    image: "images/hero/hero-basic-example-3.jpg",
    tabs: ["Overview", "Majors", "Fees and scholarships", "How to apply"],
  },
};

export const Plan = {
  ...HeroBasic,
  name: "Plan",
  args: {
    eyebrow: "Major",
    title: "Medical Biotechnology",
    back: "Bachelor of Biotechnology",
    image: "images/hero/hero-basic-example-2.jpg",
    tabs: ["Overview", "Study details"],
  },
};
