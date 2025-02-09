import {
  UqCardGrid as Component,
  UqCardGridTarget,
} from "@uqds/react/src/jsx/main";

export default {
  title: "Layout/UqCardGrid",
  component: Component,
  argTypes: {
    target: {
      control: "select",
      options: Object.values(UqCardGridTarget),
    },
  },
  args: {
    target: UqCardGridTarget.x3,
    children: (
      <>
        <div className="uqds-layout-demo-card"></div>
        <div className="uqds-layout-demo-card"></div>
        <div className="uqds-layout-demo-card"></div>
      </>
    ),
  },
};

export const UqCardGrid = {};
