import { reactCardDecorator } from "../../../lib/decorators";
import { UqCard as Component, UqIcon } from "@uqds/react/src/jsx/main";
import { UqCardVariant } from "@uqds/react/src/jsx/components/UqCard/UqCard";

export default {
  title: "Components/UqCard",
  component: Component,
  decorators: [reactCardDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(UqCardVariant),
    },
  },
  args: {
    variant: UqCardVariant.image,
    title: <a href="#">How does ATAR work and what does it mean?</a>,
    description:
      "The University of Queensland is honouring a learning scientist who is leading by example to inspire and teach future teachers.",
    image: <img src="images/card/card-example-herston-campus.jpg" alt="" />,
    icon: <UqIcon name="agriculture-and-environment--ecology-leaf" />,
  },
};

export const UqCard = {};
