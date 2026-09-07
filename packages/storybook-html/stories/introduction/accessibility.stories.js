import { storyRenderer } from "../../lib/storyRenderer";
import * as HeroStories from "../components/hero/hero.stories";
import * as SectionStories from "../components/section/section.stories";
import * as CardStories from "../components/card/card.stories";
import * as StoryCardStories from "../components/story-card/story-card.stories";
import * as PaneStories from "../components/pane/pane.stories";

const { Home: Hero } = storyRenderer(HeroStories);
const { Container: Section } = storyRenderer(SectionStories);
const { Image: Card, Text: CardText } = storyRenderer(CardStories);
const { NewsCard: NewsCard, EventCard: EventCard } =
  storyRenderer(StoryCardStories);
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
      image: "images/hero/accessibility-training.png",
      light: false,
    })}
    ${Section({
      title: "1. Introduction to web accessibility",
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
      title: "2. Web accessibility at UQ and in our roles",
      description: ``,
      content: `
      <h3>Governance of disability and inclusion at UQ</h3>
      <p>UQ as an education provider, employer and provider of other services is required by law to ensure people with disabilities have equal access to information and services.</p>
      <p><a href="https://ppl.app.uq.edu.au/content/1.70.08-disability">UQ's Disability Policy</a> covers UQ's "commitments and responsibilities under legislation and its aim to ensure an inclusive environment for people with a disability participating in work and study at the University.</p>
    
      <div class="uq-card-grid">
      <div class="uq-card-grid uq-card-grid--target-1x">
      ${CardText({
        title: "Read the policy.",
        description:
          "UQ's Disability Action Plan (PDF, 260KB) is where the Disability Policy gets turned into action.",
        variant: "text",
        href: `https://staff.uq.edu.au/files/110634/Disability%20Action%20Plan%20V8b.pdf`,
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
      </div>`,
    })}
    ${Section({
      title: "The Web Content Accessibility Guidelines (WCAG)",
      description: ``,
      content: `
      <p>The <a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines (WCAG)</a> is the main global standard for web accessibility, developed by the <a href="https://www.w3.org/">World Wide Web Consortium (W3C)</a>.</p>
      <p>WCAG addresses accessibility in a way that is technology- and ability-neutral, so the guidelines apply to desktops, laptops, tablets, mobile devices, wearable devices and a range of assistive technologies, as well as to a wide range of abilities.</p>
      <p>The Australian Human Rights Commission provides <a href="https://www.humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver">Disability Discrimination Act Advisory Notes</a> which explain how to comply with the Disability Discrimination Act. They advise organisations to comply with WCAG 2.1 to Level AA. UQ accepts this recommendation and seeks to comply with it.</p>
      <p>Federal and state digital standards also require compliance with WCAG 2.1 (or 2.2) to Level AA, meaning this is a very common standard in Australia.</p>`,
    })}
    ${Section({
      title: "Applying and using WCAG",
      description: ``,
      content: `
      <p>Because WCAG is a technology standard, it's very comprehensive and aims to cover a very wide range of technologies, abilities and circumstances. That also makes it too large and complex to apply on a day-to-day basis. Although you should be familiar with WCAG, you won't often use it directly. Instead, you'll be relying on more concise and tailored  tools, techniques, best practices and checklists relevant to what you're creating.</p>
      <p><a href="https://www.w3.org/TR/WCAG21/">Skim through WCAG 2.1</a> and familiarise yourself with the types of topics it covers. Pick a couple of specific accessibility topics you'd like to know more about (for example, colour contrast, navigation, or error handling) and see how WCAG addresses them.</p>
      `,
    })} 
    ${Section({
      title: "WCAG 2.2?",
      description: ``,
      content: `
      <p>In 2018, the Web Content Accessibility Guidelines went from version 2.1 to 2.2. WCAG 2.2 adds new criteria but does not change existing criteria.</p>
      <p>The requirements applicable to UQ generally refer to WCAG 2.0, including UQ's Disability Action Plan. WCAG 2.2 Level AA is thus the mandated requirement. However, in expectation of future updates to those requirements, we have made an internal decision to aim for WCAG version 2.2 Level AA.</p>
      <p>It is fine to use resources and tools based on WCAG 2.1 if a WCAG 2.2 version is not available yet.</p>
      <p>Read <a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/">What's new in WCAG 2.1</a></p>
      `,
    })} 
    ${Section({
      title: "Our responsibility and how we meet it",
      description: ``,
      content: `
      <p>The UQ Disability Policy and Disability Action Plan make everyone responsible for ensuring access and inclusion at UQ. Within ADS, <strong>each team is responsible</strong> for ensuring accessibility of the assets they contribute to or manage. The Web Standards Developer generally takes the lead on accessibility issues which involve multiple teams.</p>
      <p>The <strong>main way we meet our responsibility</strong> is by complying with WCAG 2.2 to level AA in the assets we contribute to or manage. To ensure this, we need to:</p>

      <div class="uq-card-grid">
      <div class="uq-card-grid uq-card-grid--target-2x">
        ${PaneShaded({
          title: "Plan for accessibility",
          description:
            "Plan in our project planning, requirements, acceptance criteria and stakeholder briefings",
          links: ``,
        })}
          ${PaneShaded({
            title: "Check our work",
            description:
              "Check as part of our standard QA processes before it goes live",
            links: ``,
          })}
          ${PaneShaded({
            title: "Monitor and evaluate the accessibility",
            description:
              "Digital assets should be monitored and evaluated for accessibility on a regular basis",
            links: ``,
          })}
          ${PaneShaded({
            title: "Incorporate continuous improvement",
            description:
              "Improvement of accessibility - our assets and our practices - into our work planning and delivery",
            links: ``,
          })}
          ${PaneShaded({
            title: "Ensure our work records demonstrate",
            description:
              "Ensure that we considered accessibility and aimed to meet the standard (e.g. project documentation, JIRA tickets, email trails).",
            links: ``,
          })}          
      </div>
      </div>

      <p>User experience design is also important to ensure people with disabilities can use the assets we produce or manage. User experience research (e.g. user research, usability testing) should incorporate users with a disability wherever possible.</p>
      <p>From time to time we may do additional activities to improve accessibility, such as external reviews or accessibility testing.</p>
      `,
    })}
    ${Section({
      title: "Expectations of each role",
      description: ``,
      content: `
      <div class="uq-card-grid">
      <div class="uq-card-grid uq-card-grid--target-1x">
      ${PaneShaded({
        title: "All team members are expected to",
        description: `
          <ul>
            <li>Understand what web accessibility is and why it's important</li>
            <li>Identify accessibility requirements during planning and estimating steps</li>
            <li>Explain web accessibility requirements to clients and stakeholders</li>
            <li>Ensure the digital assets they create or contribute to will meet accessibility standards</li>
            <li>Test the digital assets they have created to identify any issues to be addressed</li>
          </ul>
          `,
        links: ``,
      })}
      </div>
  
      <div class="uq-card-grid uq-card-grid--target-2x">
        ${PaneShaded({
          title: "Team leaders are expected to",
          description: `
          <ul>
          <li>Ensure position descriptions include accessibility responsibilities</li>
          <li>Ensure team members receive appropriate accessibly induction and training for their role, including this training</li>
          <li>Ensure our standard practices address accessibility requirements, including planning, QA, monitoring, continuous improvement</li>
          <li>Ensure work records demonstrate that we have aimed to meet the accessibility standards.</li>
          </ul>
          `,
          links: ``,
        })}
          ${PaneShaded({
            title: "Web developers are expected to",
            description: `
            <ul>
            <li>Develop components and applications that meet accessibility standards</li>
            <li>Implement Accessible Rich Internet Applications (ARIA) features in line with W3C authoring practices</li>
            </ul>
            `,
            links: ``,
          })}
          ${PaneShaded({
            title: "Web designers are expected to",
            description: `
            <ul>
            <li>Ensure interactive elements are accessible by all users</li>
            <li>Create accessibility tests for web components</li>
            <li>Document accessibility requirements and advice for components in the Design System</li>
            </ul>
            `,
            links: ``,
          })}
          ${PaneShaded({
            title: "Web coordinators are expected to",
            description: `
            <ul>
            <li>Persuasively explain the requirements and benefits of web accessibility to clients and stakeholders</li>
            <li>Support clients and stakeholders to play their part in ensuring accessibility</li>
            <li>Incorporate accessibility requirements into project and procurement documentation, UX research, and user stories</li>
            <li>Address project or stakeholder issues related to accessibility</li>
            <li>Incorporate accessibility testing into pre-go-live checks</li>
            </ul>
            `,
            links: ``,
          })}
          ${PaneShaded({
            title: "Web content writers are expected to",
            description: `
            <ul>
            <li>Incorporate accessibility needs into the content design process</li>
            <li>Write web content that meets accessibility standards</li>
            <li>Routinely check SiteImprove for accessibility problems in central website content</li>
            <li>Ensure multimedia and documents meet accessibility standards and communicate to clients about their role in meeting the standards.</li>
            </ul>
            `,
            links: ``,
          })}
      </div>
      </div>`,
    })}

  ${Section({
    title: "What if something doesn't meet the standard?",
    description: ``,
    content: `
      <p><strong>New assets</strong> should always meet the standard. Legacy assets may not.</p>
<p>For <strong>legacy assets within our control</strong>, accessibility defects should be added to our work backlog and regularly incorporated into our work. Accessibility improvements on legacy assets should be <strong>prioritised to maximise inclusion</strong> across all assets and users. Prioritisation of improvements should incorporate factors like:</p>
<ul>
    <li>the number of users impacted</li>
    <li>the severity of the accessibility problem</li>
    <li>the criticality of the process or system affected</li>
    <li>the time/effort/risk to address the issue.</li>
</ul>
<p><strong>We don't always have control</strong> of everything that impacts the accessibility of the assets we manage or work on. For instance:</p>
<ul>
    <li>a client wants to upload information in an inaccessible PDF</li>
    <li>a third-party system has accessibility defects</li>
    <li>a project we are contributing to has not planned for accessibility.</li>
</ul>
<p>We can't ensure the accessibility of digital assets that we didn't produce or don't control. We can only make stakeholders aware of accessibility issues and influence them to address them.</p>
<p>In these cases, follow three steps:</p>
<ol>
    <li>
        <strong>Raise the issue</strong> with the person who does have control (e.g. client, vendor, project manager)<br>
        <ul>
            <li>explain why we need to ensure accessibility (you can link to the Disability Policy and Disability Action Plan to explain this)</li>
            <li>give them actionable information about the problem</li>
            <li>make clear what action or response you would like to see.</li>
        </ul>
    </li>
    <li>
        <strong>Do your best to move forward</strong> with what you've got. That might mean:<br>
        <ul>
            <li>Providing a brief summary of the inaccessible PDF so a user knows if it contains information they need</li>
            <li>Ensuring there is contact information on a page with an inaccessible artefact, so that a user with a disability can easily request an accessible version</li>
            <li>Fixing the highest priority defects or the defects that are in your control</li>
            <li>Creating a ticket in the appropriate backlog to revisit the defect later (accessibility defects are bugs)</li>
        </ul>
    </li>
    <li>
        <strong>Make a record</strong> of the accessibility issue on the relevant work documentation (e.g. the JIRA issue, CRM ticket, or the system documentation)
        <ul>
            <li>include who, when and how you raised the issue</li>
            <li>include any workarounds you did</li>
            <li>include a link to any follow up work that has been logged.</li>
        </ul>
    </li>
</ol>
<p>When the above process has not worked and there are still serious accessibility defects which compromise UQ's commitment to equal access, we should escalate our concerns to our management.</p>
      `,
  })}

    ${Section({
      title: "3. Principles of web accessibility",
      description: ``,
      content: `
      <h3>What are the principles of accessibility?</h3>
<p>WCAG 2.1 is organised around the following four principles, which lay the foundation necessary for anyone to access and use web content. Anyone who wants to use the web must have content that is:</p>
<ol>
    <li>
        <strong>Perceivable</strong> - Information and user interface components must be presentable to users in ways they can perceive.
        <ul>
            <li>This means that users must be able to perceive the information being presented (it can't be invisible to all of their senses)</li>
        </ul>
    </li>
    <li>
        <strong>Operable</strong> - User interface components and navigation must be operable.
        <ul>
            <li>This means that users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)</li>
        </ul>
    </li>
    <li>
        <strong>Understandable</strong> - Information and the operation of user interface must be understandable.
        <ul>
            <li>This means that users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding)</li>
        </ul>
    </li>
    <li>
        <strong>Robust</strong> - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.
        <ul>
            <li>This means that users must be able to access the content as technologies advance (as technologies and user agents evolve, the content should remain accessible)</li>
        </ul>
    </li>
</ol>
<p>If any of these are not true, users with disabilities will not be able to use the web.</p>
<div class="uq-card-grid">
      <div class="uq-card-grid uq-card-grid--target-3x">
      ${CardText({
        title: "Constructing a POUR website",
        description: "All communication relies on the senses",
        variant: "text",
        href: `https://webaim.org/articles/pour/perceivable`,
      })}
      </div>
      </div>


<h3>What are the types of disabilities we need to consider?</h3>
<ol>
    <li>
        <strong>Visual impairments</strong> - Visual impairments including blindness, various common types of low vision and poor eyesight, various types of color blindness;
    </li>
    <li>
        <strong>Motor disabilities</strong> - Difficulty or inability to use the hands, including tremors, muscle slowness, loss of fine muscle control, etc., due to conditions such as Parkinson's disease, muscular dystrophy, cerebral palsy, stroke;
    </li>
    <li>
        <strong>Hearing impairments</strong> - Deafness or hearing impairments, including individuals who are hard of hearing;
    </li>
    <li>
        <strong style="text-align: left;">Cognitive and intellectual</strong> - Developmental disabilities, learning difficulties (dyslexia, dyscalculia, etc.), and cognitive disabilities of various origins, affecting memory, attention, developmental "maturity", problem-solving and logic skills.
    </li>
</ol>
<p>The core principle is to build inclusively for the benefit of all users, even those without disabilities:</p>
<ul>
    <li>People using alternative device types, sizes and input methods</li>
    <li>Older people (changing abilities)</li>
    <li>Temporary disabilities (broken arm, lost glasses)</li>
    <li>Situational limitations (bright sun, No audio "Quiet" public transport)</li>
    <li>Slow internet connection, or who have limited or expensive bandwidth</li>
</ul>
<div class="uq-card-grid">
      <div class="uq-card-grid uq-card-grid--target-3x">
      ${NewsCard({
        title: "Web Accessibility Perspectives.",
        description: "Compilation of 10 Topics/Videos",
        topLabel: "Optional",
        bottomLabel: ``,
        image: ``,
        href: "https://www.youtube.com/watch?v=3f31oufqFSM",
      })}
      </div>
      </div>
      `,
    })}

    ${Section({
      title: "4. Training applicable for all team members",
      description: ``,
      content: `
<p>All team members including coordinators, content producer, developers, and designers require a base level understanding of accessibility requirements of common web elements.</p>
<p><strong><a href="https://webaim.org/resources/quickref/"><span class="status-tag status-yellow">Required</span></a> Read the following:</strong></p>
<ul>
    <li><a href="https://www.accessibilityoz.com/factsheets/images/image-accessibility-principles/">Image accessibility principles</a></li>
    <li><a href="https://www.accessibilityoz.com/factsheets/content/accessibility-principles/">Content accessibility principles</a></li>
    <li><a href="https://a11yproject.com/posts/what-is-color-contrast/">What is colour contrast?</a></li>
    <li><a href="https://a11y-style-guide.com/style-guide/section-structure.html#kssref-structure-tables">Table accessibility</a></li>
</ul>
<p><span class="status-tag status-blue">Optional</span></p>
<ul>
    <li><a href="http://about.abc.net.au/wp-content/uploads/2019/06/a11y_Tips4Teams.pdf">Accessibility tips for teams (PDF, 427KB)</a></li>
</ul>
<p>Information on the Assistive Technology available to staff and students:</p>
<ul>
    <li><a href="http://www.uq.edu.au/student-services/disability/assistive-technology">Assistive technology and equipment</a></li>
    <li><a href="https://my.uq.edu.au/information-and-services/information-technology/software/software-catalogue#accessibility">Accessibility software</a></li>
</ul>
      `,
    })}

    ${Section({
      title: "5. Specific training",
      description: ``,
      content: `

      <div class="uq-card-grid">
      <div class="uq-card-grid uq-card-grid--target-1x">
        ${PaneShaded({
          title: "Web content accessibility",
          description: `
          <p>Content Producers are responsible for the day to day maintenance of accessible content. An understanding of WCAG 2.0 AA standards is part of the position description and should be achieved soon after a Content Producer's arrival if not brought with them from a previous role.</p>
        <p>Publication and maintenance of accessible text, images and documents are the responsibility of the Content Producer. Content Producers are also the public face of Team Champagne when it comes to getting stakeholders to understand, accept and comply with accessibility standards.</p>
        <p>In addition to the Web content accessibility training, Content Producers should have an understanding of what Web Coordinators must know and basic design principles (such as colour contrast ratios) in order to build accessible websites in Drupal. Content should use semantic tags (divs, headings, sections, etc) so assistive technology can process and present content the way the user decides. Tables should not be used for layout purposes. Use UQ Standard's built in responsive design elements to make content accessible on a wider range of devices.</p>

        <h4>Reading and watching</h4>
        <p>
            <span class="status-tag status-yellow">Required</span>
        </p>
        <ul>
            <li><a href="https://staff.uq.edu.au/information-and-services/information-technology/web-publishing/edit-website-content">Web Publishing at UQ</a></li>
            <li><a href="https://www.w3.org/WAI/tips/writing/">Writing for web accessibility</a></li>
            <li><a href="https://www.accessibilityoz.com/factsheets/video/video-factsheet/">Video accessibility principles</a></li>
            <li><a href="https://www.accessibilityoz.com/factsheets/pdf/pdf-accessibility-principles/">PDF accessibility principles</a>: Where possible, make available a more accessible alternative to a PDF, such as a Word document that uses the built in styles, has nested headings and implements other accessibility guidelines. Having a plain web content page equivalent is the best alternative. Document accessibility has not been heavily enforced at UQ but has been flagged as a non-compliance concern in external accessibility reviews.</li>
        </ul>

        <h4>Learn from your peers</h4>
        <p>
            <span class="status-tag status-yellow">Required</span>
        </p>
        <ul>
            <li>Ask a fellow Content Producer to show you examples of accessible content on UQ centralised websites.</li>
            <li>Arrange for a peer to introduce you to SiteImprove and show you how to review and action accessibility issues.</li>
            <li>Ask questions during your day to day work to improve your understanding of accessibility concepts.</li>
            <li>If working on a project, ask your Web Coordinator what is expected of you during content delivery.</li>
            <li>When you are asked to upload inaccessible content, ask a peer or manager to show you how they respond.</li>
        </ul>
        <p>
            <span class="status-tag status-blue">Optional</span>
        </p>
        <ul>
            <li><a href="https://4syllables.com.au/articles/wcag-summary-writers/">WCAG summary for web content writers</a></li>
        </ul>
          `,
          links: ``,
        })}
        ${PaneShaded({
          title: "Web development accessibility",
          description: `
           <p>Frontend and backend developers are responsible for delivering accessibility compliant code and components. The ability to apply accessibility standards, identify failure points and test for accessibility issues is an important aspect of daily workflow.</p>

        <h3>The World Wide Web Consortium (W3C)</h3>
        <p>
            <span class="status-tag status-yellow">Required</span>
        </p>
        <ul>
            <li><a href="https://www.w3.org/WAI/roles/developers/">W3C Web Accessibility Initiative (WAI): Resources for Developers</a>, know strategies, standards, and supporting resources to help you make the Web more accessible to people with disabilities.</li>
        </ul>

        <h3>As you code be mindful of</h3>
        <ul>
            <li>What technology you are using, what technology your users have, who your audience is!</li>
            <li>Focusing on the latest technologies and standards, this can limit users of older assistive technologies or browsers.</li>
            <li>Know the UQ web standards: <a href="https://docs.google.com/document/d/1jxOgCUKWJFHXDqu1FVU8IDTyN7Ct6aCSfML7F068_-w/edit?usp=sharing">Browser support</a>, <a href="https://git.its.uq.edu.au/its-drupal-tools/uq-cms-docs/blob/master/standards/code-standards.md">Code standards</a>, <a href="https://staff.uq.edu.au/information-and-services/information-technology/web-publishing/edit-website-content/web-accessibility">Web accessibility</a>.</li>
            <li>Broader accessibility requirements besides pure code. Designers, Content creators and clients typically do not have oversight or awareness of all the code and accessibility controls.
                <ul>
                    <li>make sure that button and link text labels are understandable and distinctive.</li>
                </ul>
            </li>
        </ul>

        <h3>What makes code and features accessible</h3>
        <p>“A great deal of web content can be made accessible just by making sure the correct Hypertext Markup Language elements are used for the correct purpose at all times.”</p>
        <p>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"><span class="status-tag status-yellow">Required</span> HTML: A good basis for accessibility</a>
        </p>
        <p>Semantic HTML, is the most important aspect of accessible code.</p>
        <ul>
            <li>Using the correct HTML elements for their intended purpose as much as possible.</li>
            <li>HTML elements typically have built-in keyboard accessibility</li>
            <li>Good content structure with headings, paragraphs, lists, etc will aid screen readers</li>
            <li>When Coding use clear language that is not overly complex, and doesn't use unnecessary jargon or slang terms.</li>
            <li>Layout, use appropriate sectioning elements to wrap your main navigation (&lt;nav&gt;), footer (&lt;footer&gt;), repeating content units (&lt;article&gt;), etc.</li>
        </ul>
        <p>Recommended reading</p>
        <p>
            <span class="status-tag status-blue">Optional</span>
        </p>
        <ul>
            <li><a href="https://www.w3.org/WAI/tips/developing/">Tips for Getting Started Developing for Web Accessibility</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility">MDN web docs Accessibility</a></li>
        </ul>

        <h3>Understanding ARIA</h3>
        <p>Aria can be used to</p>
        <ul>
            <li>Replicate the semantics of HTML5 elements</li>
            <li>Inform screenreader users when an area of content is updated</li>
            <li>Enhancing keyboard accessibility to allow other elements to receive focus</li>
            <li>improve accessibility of non-semantic controls</li>
        </ul>
        <p><strong>No ARIA is better than Bad ARIA</strong></p>
        <p>ARIA attributes can be misused, and this often leads to all sorts of problems for assistive technologies.</p>
        <p>
            <span class="status-tag status-yellow">Required</span>
        </p>
        <ul>
            <li>Follow the <a href="https://www.w3.org/TR/using-aria/">five rules</a> of ARIA</li>
            <li>Don’t add ARIA to content and elements that are already accessible. It creates repetition for the user.</li>
            <li>Don’t be Verbose, avoid overuse and excessive announcement.
                <ul>
                    <li>don't add roll of "button" to a button tag</li>
                    <li>mix native and aria attributes</li>
                </ul>
            </li>
            <li>Issues with Copy and Paste, don’t blindly copy code chunks as ARIA can have relationships between labels, text and IDs. </li>
        </ul>
        <p>Testing</p>
        <p>
            <span class="status-tag status-blue">Optional</span>
        </p>
        <ul>
            <li>One method is to use the <a href="http://www.w3.org/TR/html51/syntax.html#the-doctype">HTML5 DOCTYPE</a> with ARIA markup and validate using the <a href="http://validator.w3.org/nu/">W3C Nu Markup Checker</a>.</li>
            <li>Use common accessibility tools to make manual tests
                <ul>
                    <li>Screenreaders</li>
                    <li>Screen Magnifiers</li>
                    <li>Keyboard navigation</li>
                </ul>
            </li>
            <li>Automated testing <a href="https://www.w3.org/wiki/ARIA_1.1_Automated_Testing">https://www.w3.org/wiki/ARIA_1.1_Automated_Testing</a></li>
        </ul>
        <p>Three core concepts that make assistive technologies possible.</p>
        <p>
            <span class="status-tag status-blue">Optional</span>
        </p>
        <ul>
            <li><a href="https://www.w3.org/TR/accname-1.1/#dfn-accessibility-api">Accessibility API</a>: Platforms provide a set of interfaces that expose information</li>
            <li><a href="https://www.w3.org/TR/accname-1.1/#dfn-accessibility-tree">Accessibility Tree</a>: Tree of accessible objects that represents the structure of the user interface</li>
            <li><a href="https://www.w3.org/TR/accname-1.1/#dfn-accessible-object">Accessible objects</a>: A node in the accessibility tree</li>
        </ul>
        <p>Recommended Reading</p>
        <p>
            <span class="status-tag status-blue">Optional</span>
        </p>
        <ul>
            <li>MDN web docs - <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA basics</a></li>
            <li>W3C - <a href="https://www.w3.org/TR/using-aria/">Using ARIA W3C</a></li>
            <li>Google web fundamentals - <a href="https://developers.google.com/web/fundamentals/accessibility/semantics-aria/">Semantics and ARIA</a></li>
        </ul>

        <h3>Testing</h3>
        <p>A strong testing strategy should be developed to best suit your application, content and users.</p>
        <p>The types and things tested should be included in all core areas, as no single tool is able to fully cover all accessibility requirements.</p>

        <h4>Ways of testing</h4>
        <p>Manual evaluation (including direct user testing and feedback)</p>
        <ul>
            <li>Good for end to end testing</li>
            <li>Allows full coverage of issues</li>
            <li>Brings accuracy and realism to the testing</li>
            <li>Is time consuming</li>
        </ul>
        <p>Automated testing</p>
        <ul>
            <li>Reduces time and effort in the evaluation process</li>
            <li>Accommodates continuous monitoring</li>
            <li>Can create false positives</li>
            <li>Provides limited visibility of issues (i.e. Can report a missing alt text but not the relevance of the alt text)</li>
        </ul>
        <p>Automated testing is not substitute for manual tests and real user feedback.</p>

        <h4>Types of tests</h4>
        <ul>
            <li><strong>Manual:</strong> Catch typos and type errors as you write the code.</li>
            <li><strong>Unit: </strong>Verify that individual, isolated parts work as expected.</li>
            <li><strong>Integration:</strong> Verify that several units work together in harmony.</li>
            <li><strong>End to End</strong>: A helper robot that behaves like a user to click around the app and verify that it functions correctly. Sometimes called "functional testing" or e2e</li>
        </ul>

        <h4>Testing tools</h4>
        <p>We currently do not a list of specific tests tools.<br/>Modern computers come with accessibility tools built-in and we recommend starting with these.</p>
        <ul>
            <li>PC - NVDA</li>
            <li>OS X - VoiceOver</li>
        </ul>
        <p>Otherwise the following lists or search google for specific scenarios and testing tools</p>
        <ul>
            <li><a href="https://www.w3.org/WAI/ER/tools/">https://www.w3.org/WAI/ER/tools/</a></li>
            <li><a href="https://a11yproject.com/">https://a11yproject.com/</a></li>
            <li><a href="https://www.paciellogroup.com/toolkit/">https://www.paciellogroup.com/toolkit/</a></li>
        </ul>
        <p>
            <strong><a href="https://webaim.org/resources/quickref/"><span class="status-tag status-yellow">Required</span></a> Ask a colleague to show you how to use SiteImprove to test accessibility.</strong>
        </p>
          `,
          links: ``,
        })}
        ${PaneShaded({
          title: "Web design accessibility",
          description: `
          <p>If one half of the recipe for an accessible application/website is ease of use with assistive technologies (e.g. screen readers, magnifiers), then the other half should be thoughtful design that improves the user experience of people with different kinds disabilities. Designing for accessibility requires an understanding of the requirements of users with disabilities as well as the understanding that complying with accessibility guidelines benefits <em>all</em> users.</p>

        <h3>Web designers at UQ should be comfortable with WCAG documentation</h3>

        <p><span class="status-tag status-yellow">Required</span></p>
        <p>Web designers at UQ should be comfortable with WCAG documentation, as it provide a bridge between technical implementation of the standards and visual/interaction design.</p>
        <ol>
            <li>
                <a href="https://www.w3.org/WAI/tips/designing/">The basics</a>
                <blockquote>This page introduces some basic considerations to help you get started making your user interface design and visual design more accessible to people with disabilities.</blockquote>
            </li>
            <li>Get familiar with the <a href="https://www.w3.org/WAI/WCAG21/quickref/">How to Meet WCAG (Quick Reference)</a></li>
        </ol>

        <h3>Web Accessibility Perspectives for web design (▶️)</h3>

        <p><span class="status-tag status-blue">Optional</span></p>
        <p>If you're finding the official standards documents a bit unapproachable or verbose at first, it may be helpful to watch a few of the official videos released by the W3C WAI. You can first check out the <u><a href="https://www.w3.org/WAI/videos/standards-and-benefits/" style="color: rgb(0,0,255);">introduction video</a></u> (if you haven't already as part of the mandatory training). Then, watch these videos that are more specific to web design:</p>
        <ul>
            <li><a href="https://www.w3.org/WAI/perspective-videos/contrast/">Colours with good contrast</a></li>
            <li><a href="https://www.w3.org/WAI/perspective-videos/layout/">Clear layout and design</a></li>
            <li><a href="https://www.w3.org/WAI/perspective-videos/controls/">Large links, buttons, and controls</a></li>
            <li><a href="https://www.w3.org/WAI/perspective-videos/notifications/">Notifications and feedback</a></li>
        </ul>

        <h3>Recommended <a href="http://Lynda.com">Lynda.com</a> courses (▶️)</h3>

        <p><span class="status-tag status-blue">Optional</span></p>
        <ul>
            <li>
                <u><a href="https://www.lynda.com/Accessibility-tutorials/Foundations-UX-Accessibility/435008-2.html" style="color: rgb(0,0,255);">UX Foundations: Accessibility</a></u>, pay particular attention to:
                <ul>
                    <li><a href="https://www.lynda.com/Accessibility-tutorials/Accessibility-layout/435008/446203-4.html">Accessibility and layout</a></li>
                    <li><a href="https://www.lynda.com/Accessibility-tutorials/Accessibility-visual-design/435008/446204-4.html">Accessibility and visual design</a></li>
                    <li><a href="https://www.lynda.com/Accessibility-tutorials/Accessibility-interaction-design/435008/446205-4.html">Accessibility and interaction design</a></li>
                </ul>
            </li>
            <li>
                <u><a href="https://www.lynda.com/Web-Design-tutorials/Accessibility-Web-Design/606090-2.html" style="color: rgb(0,0,255);">Accessibility for Web Design</a></u>; this course gets more specific than the above course without getting too much into the implementation (technical) details. It's worth completing the whole course as part of your design training.
            </li>
        </ul>
        <div class="info-panel">
            <div class="info-panel-title">Lynda.com access</div>
            <p>As a UQ staff member, you should have access to <a href="http://Lynda.com">Lynda.com</a> courses (you can sign-in using your UQ single sign-on credentials).</p>
        </div>

        <h3>Bonus activity: listen to this interview with the creator of the above Lynda courses:</h3>

        <p><span class="status-tag status-blue">Optional</span></p>
        <p><em><a href="http://director.5by5.tv/d/bigwebshow/cdn.5by5.tv/audio/broadcasts/bigwebshow/2019/bigwebshow-184.mp3">Accessibility is not a “nice to have” – with Derek Featherstone</a></em></p>
        <p>You can skip the first 15 minutes.</p>

        <br>
        <audio id="player" src="http://director.5by5.tv/d/bigwebshow/cdn.5by5.tv/audio/broadcasts/bigwebshow/2019/bigwebshow-184.mp3" type="audio/mp3" controls=""></audio>

          `,
          links: ``,
        })}
        ${PaneShaded({
          title: "Web coordinator accessibility",
          description: `
          <p>As people who liaise between internal teams and clients/stakeholders, web coordinators need to be a "jack of all trades but master of none" when it comes to accessibility.</p>

        <h3>Planning</h3>
        <p>Coordinators play an important role in the planning which ensures accessible products are delivered. You need to aware of any elements which will require accessibility planning.</p>
        <p>
            <strong><a href="https://webaim.org/resources/quickref/"><span class="status-tag status-yellow">Required</span></a> Skim over the training for the other roles. If you are unfamiliar with any of their requirements, skim through their required reading to get an idea. You don't need to understand it fully or be able to apply it; you just need to be aware of what kind of accessibility work is required and know to include it in planning and estimating.</strong>
        </p>

        <h3>Stakeholder management</h3>
        <p>Coordinators have an important role ensuring clients and stakeholders are aware of accessibility requirements. Sometimes you may have to be persuasive or assertive to get them to play their part.</p>
        <p>
            <strong><a href="https://webaim.org/resources/quickref/"><span class="status-tag status-yellow">Required</span></a> Revisit the <a href="https://ppl.app.uq.edu.au/content/1.70.08-disability">UQ Disability Policy</a> and <a href="https://staff.uq.edu.au/files/17880/uq-disability-action-plan-2018-2021.pdf">Disability Action Plan (PDF, 260KB)</a> which you read part 2 of the training and think about how you can utilise them when discussing accessibility requirements with clients.</strong>
        </p>
        <p>
            <strong><a href="https://webaim.org/resources/quickref/"><span class="status-tag status-yellow">Required</span></a> Read <a href="https://www.w3.org/WAI/business-case/">Business case for accessibility</a> and <a href="http://www.accessibletemplate.com/about-accessibility/the-benefits-of-web-accessibility">Benefits of web accessibility</a> so that you can make a positive case for accessibility.</strong>
        </p>
        <p>
            <strong><span class="status-tag status-blue">Optional</span> Read <a href="https://www.dbswebsite.com/blog/accessibility-seo-a-perfect-fit/">Accessibility and SEO: a perfect fit</a></strong>
        </p>

        <h3>Site checks</h3>
        <p>Finally, web coordinators have a responsibility for checking new sites and major changes before they go live. This will include identifying any accessibility issues.</p>
        <p>
            <strong><a href="https://webaim.org/resources/quickref/"><span class="status-tag status-yellow">Required</span></a> Read the <a href="https://docs.google.com/document/d/1Q6Jizy0r-I1okmNrQDfqLVfl_scAElhIm4g13lTlllw/edit">UQ Drupal Go Live Checklist</a>. When you take a site live for the first time, ask a colleague to show you how to use SiteImprove with the checklist.</strong>
        </p>
          `,
          links: ``,
        })}
      </div>
      </div>
      `,
    })}

    ${Section({
      title: "6. Additional training",
      description: ``,
      content: `
<p>Team members may wish to further develop their understanding of web accessibility for professional development. A range of internal and external training options are outlined below. Discuss additional training requests with your team leader.</p>
<h3>Internal training</h3>
<ul>
    <li>
        <strong>UQ Staff Development</strong> - offers short-courses at St Lucia campus to help you understand disability and inclusion for students and staff at UQ:
        <ul>
            <li><a href="https://staffdevelopment.hr.uq.edu.au/course/index/UESSWD">Supporting Students with a disability</a></li>
            <li><a href="https://staffdevelopment.hr.uq.edu.au/course/index/UESDIW">Staff Disability Inclusion Workshop</a></li>
        </ul>
    </li>
</ul>
<h3>External training</h3>
<ul>
    <li>
        <strong>Vision Australia</strong> - offers regular training sessions in Brisbane relevant to all roles. Subscribe to their newsletter to be alerted to upcoming training sessions.
        <ul>
            <li><a href="https://www.visionaustralia.org/services/digital-access/training">Training</a></li>
        </ul>
    </li>
    <li>
        <strong>AccessibilityOz</strong> - offers online training and has a subscription for their OzWiki.
        <ul>
            <li><a href="https://www.accessibilityoz.com/training/">Training</a></li>
            <li><a href="https://www.accessibilityoz.com/ozwiki/">Wiki</a></li>
        </ul>
    </li>
    <li>
        <strong>Google</strong> - offers web fundamentals accessibility documentation.
        <ul>
            <li><a href="https://developers.google.com/web/fundamentals/accessibility/">Accessibility guide</a></li>
        </ul>
    </li>
    <li>
        <strong>Media Access Australia</strong> - offers an online Professional Certificate in Web Accessibility
        <ul>
            <li><a href="https://www.mediaaccess.org.au/digitalaccessibilityservices/services/education-and-training/pcwa/">Professional certification</a></li>
        </ul>
    </li>
</ul>
      `,
    })}

    ${Section({
      title: "Further reading",
      description: ``,
      content: `
      <ul>
        <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a></li>
        <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/">What's new in WCAG 2.1</a></li>
        <li><a href="https://www.humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver">Disability Discrimination Act Advisory Notes</a></li>
        <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/conformance/">WCAG conformance</a></li>
        <li><a href="https://www.w3.org/WAI/test-evaluate/">Testing and evaluation</a></li>
        <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/conformance/#requirements">WCAG conformance requirements</a></li>
        <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/conformance/#benefits">Benefits of WCAG conformance</a></li>
      </ul>
      `,
    })}

  `,
};
