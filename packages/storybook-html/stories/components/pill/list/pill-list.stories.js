import { storyRenderer } from "../../../../lib/storyRenderer";
import * as PillStories from "../pill/pill.stories";
import "@uqds/pill/src/scss/main.scss";
import { title } from "../../body/body-elements.stories";

const { Link: Pill } = storyRenderer(PillStories);

export default {
  title: "Components/Pill/List",
  argTypes: {
    title: "text",
  },
};

export const List = {
  args: {
    title: "",
  },
  render: ({ title }) => {
    return `<div class="uq-pill-list">
  ${title ? `<h3 class="uq-pill-list__title">${title}</h3>` : ""}
  <div class="uq-pill-list__content">
    ${Pill()}
    ${Pill({ label: "Environment and sustainability" })}
    ${Pill({ label: "Science and technology" })}
    ${Pill({ label: "Business and economics" })}
    ${Pill({ label: "Arts and culture" })}
    ${Pill({ label: "Law and society" })}
    ${Pill({ label: "Indigenous Australia" })}
    ${Pill({ label: "University news" })}
  </div>
</div>`;
  },
};

export const Title = {
  args: {
    title: "Topics",
  },
  render: ({ title }) => {
    return `<div class="uq-pill-list">
  ${title ? `<h3 class="uq-pill-list__title">${title}</h3>` : ""}
  <div class="uq-pill-list__content">
    ${Pill({ label: "Environment and sustainability" })}
    ${Pill({ label: "Science and technology" })}
  </div>
</div>`;
  },
};
