import "@uqds/pane/src/scss/main.scss";
import "@uqds/icon/src/scss/main.scss";
import { cardDecorator } from "../../../lib/decorators";

export default {
  title: "Components/Cards/Pane",
  decorators: [cardDecorator],
  argTypes: {
    title: "text",
    description: "text",
    variant: {
      control: "select",
      options: [
        "text",
        "image",
        "video",
        "icon",
        "icon-large",
        "text-shaded",
        "icon-shaded",
      ],
    },
    video: "text",
    image: {
      control: "select",
      options: ["images/card/card-example-herston-campus.jpg"],
    },
    icon: {
      control: "select",
      options: [
        "other--walking",
        "student-services--disability-wheelchair",
        "agriculture-and-environment--ecology-leaf",
        "education--mortarboard",
        "science-and-mathematics--science-molecule",
      ],
    },
    links: "text",
  },
  args: {
    title: "Settling in",
    description:
      "Settle in to uni life quicker with guides on everything from Orientation to campus safety.",
    links: `<a href="#">This is a link</a>`,
  },
};

export const Pane = {
  args: {
    variant: "image",
    image: "images/card/card-example-herston-campus.jpg",
    icon: "",
    links: `<a href="#">This is a link</a><a href="#">This is another link</a>`,
  },
  render: ({ variant, image, icon, title, description, links, video }) => `
<div class="uq-pane uq-pane--${variant}">
  ${
    image
      ? `<div class="uq-pane__image"><img src="${image}" alt="" /></div>`
      : ""
  }
  ${
    video
      ? `<div class="uq-pane__video"><iframe width="560" height="315" src="${video}" allowfullscreen></iframe></div>`
      : ""
  }
  <div class="uq-pane__content">
    ${
      icon
        ? `<div class="uq-pane__icon"><span class="uq-icon uq-icon--${icon}"></span></div>`
        : ""
    }
    <h3 class="uq-pane__title">${title}</h3>
    ${
      description
        ? `<div class="uq-pane__description">${description}</div>`
        : ""
    }
    ${links ? `<div class="uq-pane__actions">${links}</div>` : ""}
  </div>
</div>`,
};

export const Image = {
  ...Pane,
  args: {
    variant: "image",
    image: "images/card/card-example-herston-campus.jpg",
  },
};

export const Video = {
  ...Pane,
  args: {
    variant: "video",
    video: "https://www.youtube.com/embed/ViMYZ8PRAjQ?si=MjVUL2on656-WESr",
  },
};

export const Text = {
  ...Pane,
  args: {
    variant: "text",
    image: "",
    icon: "",
  },
};

export const TextShaded = {
  ...Text,
  args: {
    variant: "text-shaded",
  },
};

export const Icon = {
  ...Pane,
  args: {
    variant: "icon",
    image: "",
    icon: "student-services--disability-wheelchair",
  },
};

export const IconLarge = {
  ...Icon,
  args: {
    variant: "icon-large",
    icon: "education--mortarboard",
  },
};

export const IconShaded = {
  ...Icon,
  args: {
    variant: "icon-shaded",
    icon: "agriculture-and-environment--ecology-leaf",
  },
};
