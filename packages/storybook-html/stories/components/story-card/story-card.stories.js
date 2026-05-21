import { cardDecorator, storyCardDecorator } from "../../../lib/decorators";

export default {
  title: "Components/Cards/Story Card",
  argTypes: {
    title: "text",
    href: "text",
    description: "text",
    topLabel: "text",
    bottomLabel: "text",
    variant: {
      control: "select",
      options: ["story", "news", "event", "landscape", "feature"],
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
  },
  args: {
    title: "How does ATAR work and what does it mean?",
    description:
      "The University of Queensland is honouring a learning scientist who is leading by example to inspire and teach future teachers. The University of Queensland is honouring a learning scientist who is leading by example to inspire and teach future teachers. The University of Queensland is honouring a learning scientist who is leading by example to inspire and teach future teachers.",
    topLabel: "Uni life",
    bottomLabel: "3 minute read time",
    image: "images/card/card-example-herston-campus.jpg",
    href: "",
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
    image && image !== "none"
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

export const StoryCard = {
  args: {
    variant: "story",
    description: "",
  },
  decorators: [cardDecorator],
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

export const LandscapeCard = {
  decorators: [storyCardDecorator],
  args: {
    title:
      "ATAR advice for school leavers from Australia’s University Teacher of the Year ATAR advice for school leavers from Australia’s University Teacher of the Year",
    topLabel: "News",
    bottomLabel: "20 September 2023",
    variant: "landscape",
  },
};

export const LandscapeMissingImageCard = {
  ...LandscapeCard,
  args: {
    topLabel: "News",
    bottomLabel: "20 September 2023",
    variant: "landscape",
  },
  render: ({ variant, title, href, topLabel, description, bottomLabel }) => `
<div class="uq-story-card uq-story-card--${variant}">
  <div class="uq-story-card__image"></div>
  <div class="uq-story-card__content">
    <div class="uq-story-card__top-label">${topLabel}</div>
    <h3 class="uq-story-card__title"><a href="${href}">${title}</a></h3>
    <div class="uq-story-card__description">${description}</div>
    <div class="uq-story-card__bottom-label">${bottomLabel}</div>
  </div>
</div>`,
};

export const LandscapeNoImageCard = {
  ...LandscapeCard,
  args: {
    topLabel: "News",
    bottomLabel: "20 September 2023",
    variant: "landscape",
    image: null,
  },
};

export const FeatureCard = {
  ...LandscapeCard,
  args: {
    topLabel: "News",
    bottomLabel: "20 September 2023",
    variant: "feature",
  },
};
