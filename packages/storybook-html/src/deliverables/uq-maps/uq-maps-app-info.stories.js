import './uq-maps.scss';
import docs from './uq-maps-app-info.docs.mdx';

export default {
  title: 'Deliverables/UQ Maps/App info drawer',
  parameters: {
    layout: 'fullscreen',
    //viewMode: 'story',
    previewTabs: {
      canvas: {hidden: false}
    },
    backgrounds: {
      values: [
        { name: 'Static map', value: '#D7D1CC url("\/images\/app-maps\/map-sample-bg.jpg") center top / 1920px 969px repeat'},
        { name: 'Diagonal stripes', value: 'repeating-linear-gradient(45deg, #efedeb, #efedeb 10px, #f7f6f5 10px, #f7f6f5 20px)' }
      ],
      default: 'Static map'
    },
    docs: {
      page: docs,
      inlineStories: false
    }
  }
};

export const closed = () => `
  <!-- Demo height of 400px -->
  <div style="height:400px; position:relative">
    <!-- Position the badge -->
    <div style="position:absolute; bottom:0; left:0">
      <button class="uq-maps__badge">See app info</button>
    </div>
  </div>
`;

export const open = () => `
  <!-- Demo height of 400px -->
  <div style="height:400px">
    <div class="uq-maps__drawer">
      <div class="uq-maps__drawer__menu-bar">
        <button class="uq-maps__drawer__menu-bar__close">Close</button>
      </div>
      <div class="uq-maps__drawer__main">
        UQMaps
        <div class="uq-maps__drawer__main__details-block">
          Version: XX.XX.XX<br/>
          Mobile app version: XX.XX.XX
        </div>
        <div class="uq-maps__drawer__main__details-block">
          <a href="https://www.uq.edu.au/terms-of-use/">Privacy & Terms of use</a>
        </div>
      </div>
    </div>
  </div>
`;
