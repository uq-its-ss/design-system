import { reactCardDecorator } from "../../../lib/decorators";
import { UqPane as Component, UqPaneVariant, UqIcon } from "@uqds/react";
import iconCatalog from "@uqds/icon";

export default {
  title: "Components/UqPane",
  component: Component,
  decorators: [reactCardDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(UqPaneVariant),
    },
    title: {
      control: "text",
      description: "The title text for the pane",
    },
    descriptionText: {
      control: "text",
      description: "The description text for the pane",
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
    linkText: {
      control: "text",
      description: "The link text",
    },
    linkHref: {
      control: "text",
      description: "The link URL",
    },
    videoUrl: {
      control: "text",
      description: "The YouTube video URL or embed URL",
    },
    // Hide ReactNode props since they can't be controlled directly
    description: {
      control: false,
    },
    image: {
      control: false,
    },
    icon: {
      control: false,
    },
    links: {
      control: false,
    },
    video: {
      control: false,
    },
  },
  args: {
    variant: UqPaneVariant.image,
    title: "Settling in",
    descriptionText:
      "Settle in to uni life quicker with guides on everything from Orientation to campus safety.",
    imageSrc: "images/card/card-example-herston-campus.jpg",
    imageAlt: "",
    iconName: "agriculture-and-environment--ecology-leaf",
    linkText: "This is a link",
    linkHref: "#",
    videoUrl: "https://www.youtube.com/embed/ViMYZ8PRAjQ?si=MjVUL2on656-WESr",
  },
  render: ({
    variant,
    title,
    descriptionText,
    imageSrc,
    imageAlt,
    iconName,
    linkText,
    linkHref,
    videoUrl,
  }) => {
    const description = descriptionText || undefined;
    const image = imageSrc ? <img src={imageSrc} alt={imageAlt} /> : undefined;
    const icon = iconName ? <UqIcon name={iconName} /> : undefined;
    const links =
      linkText && linkHref ? <a href={linkHref}>{linkText}</a> : undefined;
    const video = videoUrl ? (
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        allowFullScreen
      ></iframe>
    ) : undefined;

    return (
      <Component
        variant={variant}
        title={title}
        description={description}
        image={image}
        icon={icon}
        links={links}
        video={video}
      />
    );
  },
};

export const UqPane = {};
