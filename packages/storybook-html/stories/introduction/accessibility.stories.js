import { storyRenderer } from "../../lib/storyRenderer";
import * as HeroStories from "../components/hero/hero.stories";
import * as SectionStories from "../components/section/section.stories";
import * as CardStories from "../components/card/card.stories";
import * as PaneStories from "../components/pane/pane.stories";

const { Home: Hero } = storyRenderer(HeroStories);
const { Container: Section } = storyRenderer(SectionStories);
const { Image: Card, Text: CardText } = storyRenderer(CardStories);
const {
  IconShaded: PaneIconShaded,
  Text: PaneText,
  Video: PaneVideo,
  TextShaded: PaneShaded,
} = storyRenderer(PaneStories);

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
  <div class="uq-card-grid">
  <div class="uq-card-grid uq-card-grid--target-3x">
    ${CardText({
      title: "Read the policy.",
      description:
        "UQ's Disability Action Plan (PDF, 260KB) is where the Disability Policy gets turned into action.",
      links: `https://staff.uq.edu.au/files/17880/uq-disability-action-plan-2018-2021.pdf`,
    })}
  </div>
  
  <div class="uq-card-grid uq-card-grid--target-3x">
    ${PaneShaded({
      title: "Read sections 1-3",
      description:
        "<strong>Read sections 1-3 of the Disability Action Plan</strong> to learn about the vision, governance and implementation of the plan.",
      links: ``,
    })}
      ${PaneShaded({
        title: "Browse section 4",
        description:
          "Browse section 4 of the plan, and <strong>read items 1.1 and 3.1 to 3.10</strong> which apply to inclusion and accessibility in the digital environment.",
        links: ``,
      })}
      ${PaneShaded({
        title: "More detailed information",
        description:
          "More detailed information about the legislative framework and standards which apply to UQ can be found in Appendix 1 of UQ's Disability Action Plan.",
        links: ``,
      })}
  </div>
  </div>
  <h3>The Web Content Accessibility Guidelines (WCAG)</h3>
  <p>The <a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines (WCAG)</a> is the main global standard for web accessibility, developed by the <a href="https://www.w3.org/">World Wide Web Consortium (W3C)</a>.</p>
  <p>WCAG addresses accessibility in a way that is technology- and ability-neutral, so the guidelines apply to desktops, laptops, tablets, mobile devices, wearable devices and a range of assistive technologies, as well as to a wide range of abilities.</p>
  <p>The Australia<n Human Rights Commission provides <a href="https://www.humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver">Disability Discrimination Act Advisory Notes</a> which explain how to comply with the Disability Discrimination Act. They advise organisations to comply with WCAG 2.1 to Level AA. UQ accepts this recommendation and seeks to comply with it.</p>
  <h3>Applying and using WCAG</h3>
  <p>Because WCAG is a technology standard, it's very comprehensive and aims to cover a very wide range of technologies, abilities and circumstances. That also makes it too large and complex to apply on a day-to-day basis. Although you should be familiar with WCAG, you won't often use it directly. Instead, you'll be relying on more concise and tailored  tools, techniques, best practices and checklists relevant to what you're creating.</p>
  <p><a href="https://www.w3.org/TR/WCAG21/">Skim through WCAG 2.1</a> and familiarise yourself with the types of topics it covers. Pick a couple of specific accessibility topics you'd like to know more about (for example, colour contrast, navigation, or error handling) and see how WCAG addresses them.</p>
  <h3>WCAG 2.2?</h3>
  <p>In 2018, the Web Content Accessibility Guidelines went from version 2.1 to 2.2. WCAG 2.2 adds new criteria but does not change existing criteria.</p>
  <p>The requirements applicable to UQ generally refer to WCAG 2.0, including UQ's Disability Action Plan. WCAG 2.2 Level AA is thus the mandated requirement. However, in expectation of future updates to those requirements, we have made an internal decision to aim for WCAG version 2.2 Level AA.</p>
  <p>It is fine to use resources and tools based on WCAG 2.1 if a WCAG 2.2 version is not available yet.</p>
  <p>Read <a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/">What's new in WCAG 2.1</a></p>
  <h3>Our responsibility and how we meet it</h3>
  <p>The UQ Disability Policy and Disability Action Plan make everyone responsible for ensuring access and inclusion at UQ. Within ADS, <strong>each team is responsible</strong> for ensuring accessibility of the assets they contribute to or manage. The Web Standards Developer generally takes the lead on accessibility issues which involve multiple teams.</p>
  <p>The <strong>main way we meet our responsibility</strong> is by complying with WCAG 2.2 to level AA in the assets we contribute to or manage. To ensure this, we need to:</p>
  <ul>
  <li><strong>Plan for accessibility</strong> in our project planning, requirements, acceptance criteria and stakeholder briefings</li>
  <li><strong>Check our work</strong> as part of our standard QA processes before it goes live</li>
  <li><strong>Monitor and evaluate the accessibility</strong> of our digital assets on a regular basis</li>
  <li><strong>Incorporate continuous improvement</strong> of accessibility - our assets and our practices - into our work planning and delivery</li>
  <li><strong>Ensure our work records demonstrate</strong> that we considered accessibility and aimed to meet the standard (e.g. project documentation, JIRA tickets, email trails).</li>
  </ul>
  <p>User experience design is also important to ensure people with disabilities can use the assets we produce or manage. User experience research (e.g. user research, usability testing) should incorporate users with a disability wherever possible.</p>
  <p>From time to time we may do additional activities to improve accessibility, such as external reviews or accessibility testing.</p>
  <h3>Expectations of each role</h3>
  <h2>All team members are expected to:</h2>
  <ul>
  <li>Understand what web accessibility is and why it's important</li>
  <li>Identify accessibility requirements during planning and estimating steps</li>
  <li>Explain web accessibility requirements to clients and stakeholders</li>
  <li>Ensure the digital assets they create or contribute to will meet accessibility standards</li>
  <li>Test the digital assets they have created to identify any issues to be addressed<li>
  </ul>
  <h3>Team leaders are expected to:</h3>
  <ul>
  <li>Ensure position descriptions include accessibility responsibilities</li>
  <li>Ensure team members receive appropriate accessibly induction and training for their role, including this training</li>
  <li>Ensure our standard practices address accessibility requirements, including planning, QA, monitoring, continuous improvement</li>
  <li>Ensure work records demonstrate that we have aimed to meet the accessibility standards.</li>
  </ul>
  <h3>Web developers are expected to:</h3>
  <ul>
  <li>Develop components and applications that meet accessibility standards</li>
  <li>Implement Accessible Rich Internet Applications (ARIA) features in line with W3C authoring practices</li>
  </ul>
  <h3>Web designers are expected to:</h3>
  <ul>
  <li>Ensure interactive elements are accessible by all users</li>
  <li>Create accessibility tests for web components</li>
  <li>Document accessibility requirements and advice for components in the Design System</li>
  </ul>
  <h3>Web coordinators are expected to:</h3>
  <ul>
  <li>Persuasively explain the requirements and benefits of web accessibility to clients and stakeholders</li>
  <li>Support clients and stakeholders to play their part in ensuring accessibility</li>
  <li>Incorporate accessibility requirements into project and procurement documentation, UX research, and user stories</li>
  <li>Address project or stakeholder issues related to accessibility</li>
  <li>Incorporate accessibility testing into pre-go-live checks</li>
  </ul>
  <ul>
  <h3>Web content writers are expected to:</h3>
  <li>Incorporate accessibility needs into the content design process</li>
  <li>Write web content that meets accessibility standards</li>
  <li>Routinely check SiteImprove for accessibility problems in central website content</li>
  <li>Ensure multimedia and documents meet accessibility standards and communicate to clients about their role in meeting the standards.</li>
  </ul>
  `,
    })}
    ${Section({
      title: "The Web Content Accessibility Guidelines (WCAG)",
      description: `
  <p>The <a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines (WCAG)</a> is the main global standard for web accessibility, developed by the <a href="https://www.w3.org/">World Wide Web Consortium (W3C)</a>.</p>
  <p>WCAG addresses accessibility in a way that is technology- and ability-neutral, so the guidelines apply to desktops, laptops, tablets, mobile devices, wearable devices and a range of assistive technologies, as well as to a wide range of abilities.</p>
  <p>The Australian Human Rights Commission provides <a href="https://www.humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver">Disability Discrimination Act Advisory Notes</a> which explain how to comply with the Disability Discrimination Act. They advise organisations to comply with WCAG 2.1 to Level AA. UQ accepts this recommendation and seeks to comply with it.</p>
  <p>https://www.humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver</p>`,
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
      description:
        "Accessibility, browser and device compatibility, usability.",
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
      description:
        "Website where you can view examples, code and documentation.",
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
