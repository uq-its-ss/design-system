import "@uqds/card/src/scss/main.scss";
import "@uqds/icon/src/scss/main.scss";
import { cardDecorator } from "../../../lib/decorators";

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
        "https://design-system.ads-staging.aws.uq.edu.au/images/card/card-example-herston-campus.jpg",
      ],
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
};

export const Card = {
  args: {
    variant: "image",
    image:
      "https://design-system.ads-staging.aws.uq.edu.au/images/card/card-example-herston-campus.jpg",
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
    image
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

export const Text = {
  ...Card,
  args: {
    variant: "text",
  },
};

export const Image = {
  ...Card,
  args: {
    ...Card.args,
  },
};

export const Icon = {
  ...Card,
  args: {
    variant: "icon",
    icon: "other--walking",
  },
};

export const IconNav = {
  ...Card,
  args: {
    variant: "icon-nav",
    title: "Research",
    description:
      "Our research is creating change and making an impact on the world’s biggest challenges.",
    icon: "science-and-mathematics--science-molecule",
  },
};
