import "@uqds/card/src/scss/main.scss";
import "@uqds/icon/src/scss/main.scss";
import { cardDecorator } from "../../../lib/decorators";

export default {
  title: "Components/Cards/Story Card",
  decorators: [cardDecorator],
  argTypes: {
    title: "text",
    href: "text",
    description: "text",
    topLabel: "text",
    bottomLabel: "text",
    variant: {
      control: "select",
      options: ["story", "news", "event"],
    },
    image: {
      control: "select",
      options: ["images/card/card-example-herston-campus.jpg"],
    },
  },
  args: {
    title: "How does ATAR work and what does it mean?",
    description:
      "The University of Queensland is honouring a learning scientist who is leading by example to inspire and teach future teachers.",
    topLabel: "Uni life",
    bottomLabel: "3 minute read time",
    image: "images/card/card-example-herston-campus.jpg",
    href: "",
  },
};

export const StoryCard = {
  args: {
    variant: "story",
    description: "",
  },
  render: ({
    variant,
    image,
    title,
    href,
    topLabel,
    description,
    bottomLabel,
  }) => `
<div class="uq-story-card uq-story-card--${variant}">
  ${
    image
      ? `<div class="uq-story-card__image"><img src="${image}" alt="" /></div>`
      : ""
  }
  <div class="uq-story-card__content">
    ${topLabel ? `<div class="uq-story-card__top-label">${topLabel}</div>` : ""}
    <h3 class="uq-story-card__title"><a href="${href}">${title}</a></h3>
    ${
      description
        ? `<div class="uq-story-card__description">${description}</div>`
        : ""
    }
    ${
      bottomLabel
        ? `<div class="uq-story-card__bottom-label">${bottomLabel}</div>`
        : ""
    }
  </div>
</div>`,
};

export const NewsCard = {
  ...StoryCard,
  args: {
    topLabel: "News",
    bottomLabel: "20 September 2023",
    variant: "news",
  },
};

export const EventCard = {
  ...StoryCard,
  args: {
    topLabel: "24 January 2024",
    bottomLabel: "St Lucia",
    variant: "event",
    description: "",
  },
};
