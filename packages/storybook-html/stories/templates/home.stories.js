import classNames from "classnames";
import { storyRenderer } from "../../lib/storyRenderer";
import * as HeaderStories from "../components/header/header.stories";
import * as FooterStories from "../components/footer/footer.stories";
import * as BreadcrumbStories from "../components/breadcrumb/breadcrumb.stories";
import * as HeroStories from "../components/hero/hero.stories";
import * as SectionStories from "../components/section/section.stories";
import * as CardStories from "../components/card/card.stories";
import * as StoryCardStories from "../components/story-card/story-card.stories";
import "@uqds/layout/src/scss/main.scss";
import "@uqds/sections/src/scss/main.scss";

const { Header } = storyRenderer(HeaderStories);
const { footer } = storyRenderer(FooterStories);
const { Breadcrumb } = storyRenderer(BreadcrumbStories);
const { Home: Hero } = storyRenderer(HeroStories);
const { Container: Section } = storyRenderer(SectionStories);
const { IconNav: CardIconNav, Image: CardImage } = storyRenderer(CardStories);
const { NewsCard } = storyRenderer(StoryCardStories);

export default {
  title: "Templates/Home",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
  },
  argTypes: {
    showGrid: {
      control: "boolean",
    },
  },
  args: {
    showGrid: false,
  },
};

export const Home = {
  render: ({ showGrid }) => `
<div class="${classNames({ "uqds-layout-demo-bg": showGrid })}">
  ${Header()}
  ${Breadcrumb()}
    ${Hero()}
    ${Section({
      title: "",
      description: "",
      content: `
<div class="uq-section">
<div class="uq-card-grid uq-card-grid--target-4x">
  ${CardIconNav({
    title: "Study",
    description:
      "Find study options to match your interests and learn how to get the most out of your time at UQ.",
    icon: "arts-humanities-and-social-sciences--book-open-bookmark",
  })}
  ${CardIconNav({
    title: "Research",
    description:
      "Our research is creating change and making an impact on the world’s biggest challenges.",
    icon: "science-and-mathematics--science-molecule",
  })}
  ${CardIconNav({
    title: "Partners and community",
    description: "We collaborate locally and globally to drive innovation.",
    icon: "other--tool-box",
  })}
  ${CardIconNav({
    title: "About UQ",
    description:
      "We educate and work with outstanding people to build a better future.",
    icon: "architecture-and-planning--school-building",
  })}
</div>
</div>
      `,
    })}
    ${Section({
      title: "",
      description: "",
      content: `
<div class="uq-section">
<div class="uq-card-grid uq-card-grid--target-3x">
  ${CardImage({
    title: "Our campuses",
    description:
      "Our campuses boast world-class facilities, beautiful outdoor areas, and a range of sporting and cultural amenities.",
    image: "images/card/card-example-herston-campus.jpg",
  })}
  ${CardImage({
    title: "Apply now",
    description: "View the steps to apply and get started on your application.",
    image: "images/card/card-example-st-lucia-campus.jpg",
  })}
  ${CardImage({
    title: "Scholarships",
    description:
      "Apply for financial support to enrich your time at UQ and help you to focus on your studies.",
    image: "images/card/card-example-gatton-campus.jpg",
  })}
</div>
</div>
      `,
    })}
    ${Section({
      title: "News",
      description: `<a href="#">See more news</a>`,
      content: `
<div class="uq-section">
<div class="uq-card-grid uq-card-grid--target-3x">
  ${NewsCard({
    title: "Lifelike lab-grown skin developed from human stem cells",
    description: "",
    image: "images/card/card-example-gatton-campus.jpg",
  })}
  ${NewsCard({
    title: "Zinc discovery holds promise for people with cystic fibrosis",
    description: "",
    image: "images/card/card-example-herston-campus.jpg",
  })}
  ${NewsCard({
    title: "A lightweight fish pen to move farms to deeper seas",
    description: "",
    image: "images/card/card-example-st-lucia-campus.jpg",
  })}
</div>
</div>
      `,
    })}
  ${footer()}
</div>`,
};
