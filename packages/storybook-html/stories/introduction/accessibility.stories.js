import { storyRenderer } from "../../lib/storyRenderer";
import * as HeroStories from "../components/hero/hero.stories";
import * as SectionStories from "../components/section/section.stories";
import * as CardStories from "../components/card/card.stories";
import * as PaneStories from "../components/pane/pane.stories";

const { Home: Hero } = storyRenderer(HeroStories);
const { Container: Section } = storyRenderer(SectionStories);
const { Image: Card } = storyRenderer(CardStories);
const { IconShaded: PaneIconShaded, Text: PaneText, Video: PaneVideo } = storyRenderer(PaneStories);



export default {
  title: "Core/Standards/Accessibility",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
  },
};

export const Accessibility = {
    render: () => `
    ${Hero({
      title: "Accessibility training",
      button: "",
      description: "Styles, components, patterns and standards.",
      image: "images/hero/hero-home.jpg",
      light: false,
    })}
    ${Section({
      title: "Introduction to web accessibility",
      description: `
      <h3>What is web accessibility?</h3>
  <p>Web accessibility means that websites, tools, and technologies are designed and developed so that as many people as possible can use them. This includes people with disabilities and special requirements. More specifically, people can:</p>
  <ul>
  <li>perceive, understand, navigate, and interact with the Web</li>
  <li>contribute to the Web</li>
  </ul>
  <p>Fundamentally, a website should be designed to work for all people, whatever their hardware, software, language, location, or ability.</p>
      ${PaneVideo({
      title: "Why we need web accessibility",
      description:
        "The Web is an increasingly important resource in many aspects of life: education, employment, government, commerce, health care, recreation, and more. It is essential that the web be accessible in order to provide equal access and equal opportunity to people with diverse abilities. Access to information and communications technologies, including the Web, is defined as a basic human right in the United Nations Convention on the Rights of Persons with Disabilities.",
      video: "https://www.youtube-nocookie.com/embed/20SHvU2PKsM",
      links: ``,
    })}
    `,
    })}
    ${Section({
      title: "Web accessibility at UQ and in our roles",
      description: ``,
      content: `
      <h3>Governance of disability and inclusion at UQ</h3>
  <p>UQ as an education provider, employer and provider of other services is required by law to ensure people with disabilities have equal access to information and services.</p>
  <p><a href="https://ppl.app.uq.edu.au/content/1.70.08-disability">UQ's Disability Policy</a> covers UQ's "commitments and responsibilities under legislation and its aim to ensure an inclusive environment for people with a disability participating in work and study at the University.</p>
  <div class="uq-card-grid uq-card-grid--target-3x">
    ${Card({
      title: "Community updates",
      href: "https://www.yammer.com/uq.edu.au/#/threads/inGroup?type=in_group&feedId=35286523904",
      description: "Join the Design System community on UQ Yammer for updates.",
      image: "images/general/purple-hands.png",
    })}
    ${Card({
      title: "View recent changes",
      href: "https://github.com/uq-its-ss/design-system/pulls?q=is%3Apr+is%3Aclosed",
      description:
        "Review potential changes with collaborators or view recently pushed commits.",
      image: "images/general/purple-rocket.png",
    })}
    ${Card({
      title: "View open issues",
      href: "https://github.com/uq-its-ss/design-system/issues",
      description: "Build awareness of feature requests and bugs.",
      image: "images/general/purple-bug.png",
    })}
  </div>
  `,
    })}
    ${Section({
      title: "Contribute",
      description: `
  <p>If UQ development teams work together, we can save time and build better.</p>
  <p>Our <a href="https://github.com/uq-its-ss/design-system">GitHub repository</a> contains all the code and content which make up the design system.</p>
  <p>Contact <a href="mailto:webservices@uq.edu.au">ADS-UI</a> if you'd like to contribute to the design system.</p>`,
    })}
    ${Section({
      title: "Why have a design system?",
      description: "",
      content: `
  <div class="uq-card-grid uq-card-grid--target-3x">
    ${PaneIconShaded({
      title: "Efficiency",
      description:
        "Stop reinventing the wheel and create once, share for re-use with better upfront requirements.",
      icon: "other--time-clock-circle-1",
      links: ``,
    })}
    ${PaneIconShaded({
      title: "Quality",
      description: "Accessibility, browser and device compatibility, usability.",
      icon: "rankings--certified-ribbon-2",
      links: ``,
    })}
    ${PaneIconShaded({
      title: "Consistency",
      description:
        "Better customer experience and brand compliance whilst being easier to learn and maintain.",
      icon: "arts-humanities-and-social-sciences--brain-network",
      links: ``,
    })}
  </div>
  `,
    })}
  ${Section({
    title: "What are the main parts",
    description: "",
    content: `
  <div class="uq-card-grid uq-card-grid--target-2x">
    ${PaneText({
      title: "UI style guide",
      description: "Website where you can view examples, code and documentation.",
      links: ``,
    })}
    ${PaneText({
      title: "Core styles",
      description:
        'Foundations of "look and feel": typography, colour, spacing, imagery.',
      links: ``,
    })}
    ${PaneText({
      title: "Code",
      description:
        "A full set of code for user interfaces (HTML, CSS, javascript).",
      links: ``,
    })}
    ${PaneText({
      title: "Assets",
      description: "Supporting assets (icons, logo, font files).",
      links: ``,
    })}
    ${PaneText({
      title: "Components",
      description:
        "The pieces that make up a page in a website or web application: header, footer, form, table, menu, alert, tabs, accordions.",
      links: ``,
    })}
    ${PaneText({
      title: "Patterns",
      description:
        "How you combine and layout components and content in the interface.",
      links: ``,
    })}
    ${PaneText({
      title: "Standards",
      description:
        "Meet quality standards: accessibility, mobile optimisation, browser compatibility.",
      links: ``,
    })}
    ${PaneText({
      title: "Usage advice",
      description: "Include advice for when and how to use the component.",
      links: ``,
    })}
    ${PaneText({
      title: "Best Practice",
      description:
        "Best practice for a recurring task or process: enter an address, take a payment, display errors on a form, step users through a complex process, page not found error.",
      links: ``,
    })}
    ${PaneText({
      title: "Code repository",
      description:
        "Access a shared online code repository, e.g. github or similar (access controls).",
      links: ``,
    })}
    ${PaneText({
      title: "Package registry",
      description: "Published packages of html, CSS, javascript and images.",
      links: ``,
    })}
    ${PaneText({
      title: "Community",
      description:
        "BA community that uses and contributes to the design system, used by the teams who design and implement user interfaces.",
      links: ``,
    })}
    ${PaneText({
      title: "Feedback",
      description: "Ways to give feedback.",
      links: ``,
    })}
  </div>
  `,
  })}
    ${Section({
      title: "Expectations",
      description: "",
      content: `
  <div class="uq-card-grid uq-card-grid--target-2x">
    ${PaneIconShaded({
      title: "It's a starting point",
      description:
        "It's impossible for the design system to cover every use case or requirement across UQ. Our goal is to be a good starting point, covering 80% of use cases and requirements. Each project will need to address any requirements unique to the project. If your project will need a lot of additional components or support, contact us to plan for that.",
      icon: "student-services--maps-search",
      links: ``,
    })}
    ${PaneIconShaded({
      title: "It's not a straitjacket",
      description:
        "It's important to have consistent user interfaces across UQ, but it's not meant to stop innovation. Adapt and tweak if there's a justifiable reason to deviate from standard designs for a specific use case or scenario. Consult before moving too far from the standard designs.",
      icon: "other--fitness-weightlift",
      links: ``,
    })}
    ${PaneIconShaded({
      title: "It's a shoestring operation",
      description:
        "There's a very small operational team to manage and support the design system. We'll do our best to prioritise our work to meet your needs. If you plan to use the design system, allocate some time to contribute back so that the design system becomes more valuable to everyone.",
      icon: "education--family-home",
      links: ``,
    })}
  </div>
  `,
    })}
  `,
  };
  