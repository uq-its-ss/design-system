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
  <div class="uq-sections">
    ${Hero()}
    ${Section({
      title: "",
      description: "",
      content: `
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
      `,
    })}
    ${Section({
      title: "",
      description: "",
      content: `
<div class="uq-card-grid uq-card-grid--target-3x">
  ${CardImage({
    title: "Our campuses",
    description:
      "Our campuses boast world-class facilities, beautiful outdoor areas, and a range of sporting and cultural amenities.",
    image:
      "https://www.uq.edu.au/sites/default/files/styles/card_image/public/2023-12/st-lucia-campus.jpg",
  })}
  ${CardImage({
    title: "Apply now",
    description: "View the steps to apply and get started on your application.",
    image:
      "https://www.uq.edu.au/sites/default/files/styles/card_image/public/2023-12/brand-imagery-two-students-laptop.jpg",
  })}
  ${CardImage({
    title: "Scholarships",
    description:
      "Apply for financial support to enrich your time at UQ and help you to focus on your studies.",
    image:
      "https://www.uq.edu.au/sites/default/files/styles/card_image/public/2023-12/brand-imagery-two-students_0.jpg",
  })}
</div>
      `,
    })}
    ${Section({
      title: "News",
      description: `<a href="#">See more news</a>`,
      content: `
<div class="uq-card-grid uq-card-grid--target-3x">
  ${NewsCard({
    title: "Lifelike lab-grown skin developed from human stem cells",
    description: "",
    image:
      "https://www.uq.edu.au/sites/default/files/styles/card_image/public/2024-03/med-skin-organoid-stained-with-key-human-skin-markers%20OPTIMISED.jpg",
  })}
  ${NewsCard({
    title: "Zinc discovery holds promise for people with cystic fibrosis",
    description: "",
    image:
      "https://www.uq.edu.au/sites/default/files/styles/card_image/public/2024-03/zinc-discovery-for-people-living-with-cystic-fibrosis%20OPTIMISED.jpg",
  })}
  ${NewsCard({
    title: "A lightweight fish pen to move farms to deeper seas",
    description: "",
    image:
      "https://www.uq.edu.au/sites/default/files/styles/card_image/public/2024-03/seafisher-pen%20OPTIMISED.jpg",
  })}
</div>
      `,
    })}
  </div>
  ${footer()}
</div>`,
};
