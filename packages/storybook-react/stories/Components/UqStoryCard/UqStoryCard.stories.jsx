import { reactStoryCardDecorator } from "../../../lib/decorators";
import { UqStoryCard as Component, UqStoryCardVariant } from "@uqds/react";

export default {
  title: "Components/UqStoryCard",
  component: Component,
  decorators: [reactStoryCardDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(UqStoryCardVariant),
    },
    titleText: {
      control: "text",
      description: "The title text for the story card",
    },
    titleHref: {
      control: "text",
      description: "The URL for the title link (leave empty for no link)",
    },
    descriptionText: {
      control: "text",
      description: "The description text for the story card",
    },
    imageSrc: {
      control: "text",
      description: "The image source URL",
    },
    imageAlt: {
      control: "text",
      description: "The image alt text",
    },
    topLabel: {
      control: "text",
      description: "The top label (e.g., 'News', 'Event')",
    },
    bottomLabel: {
      control: "text",
      description: "The bottom label (e.g., date)",
    },
    // Hide ReactNode props since they can't be controlled directly
    title: {
      control: false,
    },
    description: {
      control: false,
    },
    image: {
      control: false,
    },
  },
  args: {
    variant: UqStoryCardVariant.feature,
    titleText: "How does ATAR work and what does it mean?",
    titleHref: "#",
    descriptionText:
      "The University of Queensland is honouring a learning scientist who is leading by example to inspire and teach future teachers.",
    imageSrc: "images/card/card-example-herston-campus.jpg",
    imageAlt: "",
    topLabel: "News",
    bottomLabel: "20 September 2023",
  },
  render: ({
    variant,
    titleText,
    titleHref,
    descriptionText,
    imageSrc,
    imageAlt,
    topLabel,
    bottomLabel,
  }) => {
    const title = titleHref ? <a href={titleHref}>{titleText}</a> : titleText;
    const description = descriptionText || undefined;
    const image = imageSrc ? <img src={imageSrc} alt={imageAlt} /> : undefined;

    return (
      <Component
        variant={variant}
        title={title}
        description={description}
        image={image}
        topLabel={topLabel}
        bottomLabel={bottomLabel}
      />
    );
  },
};

export const UqStoryCard = {};
