//import './uq-maps.scss';
import docs from "./uq-maps-1-live-data-indicator.mdx";

export default {
  title: "Deliverables/UQ Maps/1 Live data indicator",
  parameters: {
    layout: "centered",
    previewTabs: {
      canvas: { hidden: false },
    },
    docs: {
      page: docs,
    },
  },
};

export const liveDataIndicator = () => {
  return `
    <div>
      <small><span class="uq-maps__live-data-dot"></span> by default it is same colour as the text colour</small>
    </div>
    <div style="color: #2EA836">
      <small><span class="uq-maps__live-data-dot"></span> so you can do this</small>
    </div>
    <div style="color: #E62645">
      <small><span class="uq-maps__live-data-dot"></span> and this</small>
    </div>
  `;
};

liveDataIndicator.storyName = "Default";

export const liveDataIndicatorVariants = () => {
  return `
    <div>
      <small><span class="uq-maps__live-data-dot uq-maps__live-data-dot--blue"></span> blue</small>
    </div>
    <div>
      <small><span class="uq-maps__live-data-dot uq-maps__live-data-dot--green"></span> green</small>
    </div>
    <div>
      <small><span class="uq-maps__live-data-dot uq-maps__live-data-dot--yellow"></span> yellow</small>
    </div>
    <div>
      <small><span class="uq-maps__live-data-dot uq-maps__live-data-dot--orange"></span> orange</small>
    </div>
    <div>
      <small><span class="uq-maps__live-data-dot uq-maps__live-data-dot--red"></span> red</small>
    </div>
    <div>
      <small><span class="uq-maps__live-data-dot uq-maps__live-data-dot--grey"></span> grey</small>
    </div>
  `;
};

liveDataIndicatorVariants.storyName = "Preset color variants";
