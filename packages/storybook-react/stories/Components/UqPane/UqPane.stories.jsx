import { reactCardDecorator } from "../../../lib/decorators";
import { UqPane as Component, UqIcon } from "@uqds/react/src/jsx/main";
import { UqPaneVariant } from "@uqds/react/src/jsx/components/UqPane/UqPane";

export default {
  title: "Components/UqPane",
  component: Component,
  decorators: [reactCardDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(UqPaneVariant),
    },
  },
  args: {
    variant: UqPaneVariant.image,
    title: "Settling in",
    description:
      "Settle in to uni life quicker with guides on everything from Orientation to campus safety.",
    image: <img src="images/card/card-example-herston-campus.jpg" alt="" />,
    icon: <UqIcon name="agriculture-and-environment--ecology-leaf" />,
    links: <a href="#">This is a link</a>,
    video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ViMYZ8PRAjQ?si=MjVUL2on656-WESr"
        allowfullscreen
      ></iframe>
    ),
  },
};

export const UqPane = {};
