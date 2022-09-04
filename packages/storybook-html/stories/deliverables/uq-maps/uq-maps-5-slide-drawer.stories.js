// import './uq-maps.scss';
import docs from "./uq-maps-5-slide-drawer.docs.mdx";

export default {
  title: "Deliverables/UQ Maps/5 Slide drawer",
  parameters: {
    layout: "fullscreen",
    //viewMode: 'story',
    previewTabs: {
      canvas: { hidden: false },
    },
    docs: {
      page: docs,
      inlineStories: false,
    },
    backgrounds: {
      default: "Diagonal stripes",
    },
  },
};

export const expanded = () => `
  <!-- Demo height of 600px -->
  <div style="height:600px">
    <div class="uq-maps__drawer">
      <div class="uq-maps__drawer__menu-bar">
        <button class="uq-maps__drawer__menu-bar__close">Close</button>
      </div>
      <div class="uq-maps__drawer__main">
        Emergency Call Points
        <div class="uq-maps__drawer__main__details-block">
          More Information: FOR EMERGENCIES PHONE (07) 3365 3333. Location Bldg 42, Level 2, (access via the orange entrance).<br/>
          Phone: (07) 3365 1234<br/>
          Email: security@pf.uq.edu.au
        </div>
        <div class="uq-maps__drawer__main__details-block">
          <a href="https://www.pf.uq.edu.au/emergency-contacts/">Website</a>
        </div>
      </div>
      <div class="uq-maps__drawer__actions">
        <!-- Actions here: requires "@uqds/button" component scss/css -->
        <button class="uq-button">Navigate</button>
      </div>
    </div>
  </div>
`;

expanded.storyName = "5A Expanded";
