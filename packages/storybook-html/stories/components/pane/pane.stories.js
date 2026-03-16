import { cardDecorator } from "../../../lib/decorators";
import iconCatalog from "@uqds/icon";

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
      options: [
        "none",
        "images/card/card-example-herston-campus.jpg",
        "images/example-1.jpg",
        "images/example-2.jpg",
        "images/example-3.jpg",
        "images/example-4.jpg",
      ],
    },
    icon: {
      options: iconCatalog.map((icon) => `${icon.category}--${icon.name}`),
      control: "select",
    },
    links: "text",
  },
  args: {
    title: "Settling in",
    description:
      "Settle in to uni life quicker with guides on everything from Orientation to campus safety.",
    links: `<a href="#">This is a link</a>`,
  },
  render: ({ variant, image, icon, title, description, links, video }) => `
<div class="uq-pane uq-pane--${variant}">
  ${
    image && image !== "none"
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

export const Pane = {
  args: {
    variant: "image",
    image: "images/card/card-example-herston-campus.jpg",
    icon: "",
    links: `<a href="#">This is a link</a><a href="#">This is another link</a>`,
  },
};

export const Image = {
  args: {
    variant: "image",
    image: "images/card/card-example-herston-campus.jpg",
  },
};

export const Video = {
  args: {
    variant: "video",
    video: "https://www.youtube.com/embed/ViMYZ8PRAjQ?si=MjVUL2on656-WESr",
  },
};

export const Text = {
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
