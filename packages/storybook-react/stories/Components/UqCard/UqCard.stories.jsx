import { reactCardDecorator } from "../../../lib/decorators";
import { UqCard as Component, UqCardVariant, UqIcon } from "@uqds/react";
import iconCatalog from "@uqds/icon";

export default {
  title: "Components/UqCard",
  component: Component,
  decorators: [reactCardDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(UqCardVariant),
    },
    titleText: {
      control: "text",
      description: "The title text for the card",
    },
    titleHref: {
      control: "text",
      description: "The URL for the title link (leave empty for no link)",
    },
    descriptionText: {
      control: "text",
      description: "The description text for the card",
    },
    imageSrc: {
      control: "text",
      description: "The image source URL",
    },
    imageAlt: {
      control: "text",
      description: "The image alt text",
    },
    iconName: {
      control: "select",
      options: [
        "",
        ...iconCatalog.map((icon) => `${icon.category}--${icon.name}`),
      ],
      description: "The icon to display (only for icon variants)",
    },
    // Hide the actual props since they're ReactNode and can't be controlled directly
    title: {
      control: false,
    },
    description: {
      control: false,
    },
    image: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
  args: {
    variant: UqCardVariant.image,
    titleText: "How does ATAR work and what does it mean?",
    titleHref: "#",
    descriptionText:
      "The University of Queensland is honouring a learning scientist who is leading by example to inspire and teach future teachers.",
    imageSrc: "images/card/card-example-herston-campus.jpg",
    imageAlt: "",
    iconName: "agriculture-and-environment--ecology-leaf",
  },
  render: ({
    variant,
    titleText,
    titleHref,
    descriptionText,
    imageSrc,
    imageAlt,
    iconName,
  }) => {
    const title = titleHref ? (
      <a href={titleHref}>{titleText}</a>
    ) : (
      titleText
    );
    const description = descriptionText || undefined;
    const image = imageSrc ? <img src={imageSrc} alt={imageAlt} /> : undefined;
    const icon = iconName ? <UqIcon name={iconName} /> : undefined;

    return (
      <Component
        variant={variant}
        title={title}
        description={description}
        image={image}
        icon={icon}
      />
    );
  },
};

export const UqCard = {};
