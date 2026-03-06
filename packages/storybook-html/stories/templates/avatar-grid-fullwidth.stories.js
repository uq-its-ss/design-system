import classNames from "classnames";
import { storyRenderer } from "../../lib/storyRenderer";
import * as HeaderStories from "../components/header/header.stories";
import * as FooterStories from "../components/footer/footer.stories";
import * as BreadcrumbStories from "../components/breadcrumb/breadcrumb.stories";
import * as ProfileStories from "../components/profile/profile.stories";
import "@uqds/layout/src/scss/main.scss";

const { Header } = storyRenderer(HeaderStories);
const { Breadcrumb } = storyRenderer(BreadcrumbStories);
const { footer } = storyRenderer(FooterStories);

// Helper to render a profile
const renderProfile = (name) => {
  return ProfileStories.default.render({
    titleElement: "h2",
    honorificPrefix: "Professor",
    name: name,
    position: "Head of School",
    bio: "",
    hasContact: true,
    email: "jane.doe@uq.edu.au",
    Phone: "+61 7 3000 0000",
    ctaUrl: "https://about.uq.edu.au/experts/1371",
    hasImage: true,
    image: "images/profile/profile.png",
  });
};

export default {
  title: "Templates/Avatar Grid Examples/Full Width Page",
  tags: ["!autodocs"],
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

export const FullWidthPage = {
  render: ({ showGrid }) => `
<div class="${classNames({ "uqds-layout-preview": showGrid })}">
  <a href="#uq-header" class="visually-hidden focusable">Skip to header</a>
  <a href="#uq-main" class="visually-hidden focusable">Skip to content</a>
  <a href="#uq-footer" class="visually-hidden focusable">Skip to footer</a>  
  ${Header()}
  <main id="uq-main">
    ${Breadcrumb({ showLevels: 0, currentPage: "Avatar Grid - Full Width" })}
    <div class="uq-container">
        <div class="uq-section">
          <h1>Avatar Grid Examples - Full Width Page</h1>
          <p>Test avatars in different grid configurations on a full-width page. At 1024px and above, avatars should be 144px.</p>
        </div>
        
        <div class="uq-section">
          <h2>Single Column Grid</h2>
          <p>Avatar size: 80px below 1024px, 144px at 1024px and above</p>
          <div class="uq-grid uq-grid--1-column">
            ${renderProfile("Jane Doe")}
          </div>
        </div>
        
        <div class="uq-section">
          <h2>Two Column Grid</h2>
          <p>Avatar size: 80px below 1024px, 144px at 1024px and above</p>
          <div class="uq-grid uq-grid--2-column">
            ${renderProfile("Jane Doe")}
            ${renderProfile("John Smith")}
          </div>
        </div>
        
        <div class="uq-section">
          <h2>Three Column Grid</h2>
          <p>Avatar size: 80px below 1024px, 144px at 1024px and above</p>
          <div class="uq-grid uq-grid--3-column">
            ${renderProfile("Jane Doe")}
            ${renderProfile("John Smith")}
            ${renderProfile("Alice Johnson")}
          </div>
        </div>
    </div>
  </main>
  ${footer()}
</div>`,
};
