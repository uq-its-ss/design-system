import { reactStoryCardDecorator } from "../../../lib/decorators";
import { UqStoryCard as Component } from "@uqds/react/src/jsx/main";
import { UqStoryCardVariant } from "@uqds/react/src/jsx/components/UqStoryCard/UqStoryCard";

export default {
  title: "Components/UqStoryCard",
  component: Component,
  decorators: [reactStoryCardDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(UqStoryCardVariant),
    },
  },
  args: {
    variant: UqStoryCardVariant.feature,
    title: <a href="#">How does ATAR work and what does it mean?</a>,
    description:
      "The University of Queensland is honouring a learning scientist who is leading by example to inspire and teach future teachers.",
    image: <img src="images/card/card-example-herston-campus.jpg" alt="" />,
    topLabel: "News",
    bottomLabel: "20 September 2023",
  },
};

export const UqStoryCard = {};
