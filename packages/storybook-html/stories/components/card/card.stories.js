import { cardDecorator } from "../../../lib/decorators";
import iconCatalog from "@uqds/icon";

export default {
  title: "Components/Cards/Card",
  decorators: [cardDecorator],
  argTypes: {
    title: "text",
    headingElement: {
      options: ["h2", "h3", "h4", "h5", "h6"],
      control: "select",
    },
    href: "text",
    description: "text",
    variant: {
      control: "select",
      options: ["text", "image", "icon", "icon-nav"],
    },
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
  },
  args: {
    title: "How does ATAR work and what does it mean?",
    headingElement: "h3",
    description:
      "The University of Queensland is honouring a learning scientist who is leading by example to inspire and teach future teachers.",
    topLabel: "",
    bottomLabel: "",
    icon: "",
    image: "",
    href: "",
  },
  render: ({
    variant,
    image,
    icon,
    title,
    headingElement,
    href,
    topLabel,
    description,
    bottomLabel,
  }) => `
<div class="uq-card uq-card--${variant}">
  ${
    image && image !== "none"
      ? `<div class="uq-card__image"><img src="${image}" alt="" /></div>`
      : ""
  }
  <div class="uq-card__content">
    ${
      icon
        ? `<div class="uq-card__icon"><span class="uq-icon uq-icon--${icon}"></span></div>`
        : ""
    }
    ${topLabel ? `<div class="uq-card__top-label">${topLabel}</div>` : ""}
    <${headingElement} class="uq-card__title"><a href="${href}">${title}</a></${headingElement}>
    ${
      description
        ? `<div class="uq-card__description">${description}</div>`
        : ""
    }
    ${
      bottomLabel
        ? `<div class="uq-card__bottom-label">${bottomLabel}</div>`
        : ""
    }
  </div>
</div>`,
};

export const Card = {
  args: {
    variant: "image",
    image: "images/card/card-example-herston-campus.jpg",
  },
};

export const Text = {
  args: {
    variant: "text",
  },
};

export const Image = {
  args: {
    ...Card.args,
  },
};

export const Icon = {
  args: {
    variant: "icon",
    icon: "other--walking",
  },
};

export const IconNav = {
  args: {
    variant: "icon-nav",
    title: "Research",
    description:
      "Our research is creating change and making an impact on the world’s biggest challenges.",
    icon: "science-and-mathematics--science-molecule",
  },
};
