// import stylesheet
import './grid.scss';

import docs from './grid.docs.mdx';

export default {
  title: 'Layout/Grid',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "fullscreen"
  }
};

export const twelveEightSixMobile = () => `
  <div class="uqds-example-grid">
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6"><span>uq-grid__col--6</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--5"><span>uq-grid__col--5</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--4"><span>uq-grid__col--4</span></div>
      <div class="uq-grid__col uq-grid__col--2"><span>uq-grid__col--2</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--3"><span>uq-grid__col--3</span></div>
      <div class="uq-grid__col uq-grid__col--3"><span>uq-grid__col--3</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--2"><span>uq-grid__col--2</span></div>
      <div class="uq-grid__col uq-grid__col--2"><span>uq-grid__col--2</span></div>
      <div class="uq-grid__col uq-grid__col--2"><span>uq-grid__col--2</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--2"><span>uq-grid__col--2</span></div>
      <div class="uq-grid__col uq-grid__col--3"><span>uq-grid__col--3</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--2"><span>uq-grid__col--2</span></div>
      <div class="uq-grid__col uq-grid__col--2"><span>uq-grid__col--2</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--2"><span>uq-grid__col--2</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
      <div class="uq-grid__col uq-grid__col--1"><span>uq-grid__col--1</span></div>
    </div>
  </div>
`;

twelveEightSixMobile.storyName = "6-8-12 (mobile)";

export const twelveEightSixTablet = () => `
  <div class="uqds-example-grid">
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--md-8"><span>uq-grid__col--md-8</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--md-7"><span>uq-grid__col--md-7</span></div>
      <div class="uq-grid__col uq-grid__col--md-1"><span>uq-grid__col--md-1</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--md-6"><span>uq-grid__col--md-6</span></div>
      <div class="uq-grid__col uq-grid__col--md-2"><span>uq-grid__col--md-2</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--md-5"><span>uq-grid__col--md-5</span></div>
      <div class="uq-grid__col uq-grid__col--md-3"><span>uq-grid__col--md-3</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--md-4"><span>uq-grid__col--md-4</span></div>
      <div class="uq-grid__col uq-grid__col--md-4"><span>uq-grid__col--md-4</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--md-2"><span>uq-grid__col--md-2</span></div>
      <div class="uq-grid__col uq-grid__col--md-2"><span>uq-grid__col--md-2</span></div>
      <div class="uq-grid__col uq-grid__col--md-2"><span>uq-grid__col--md-2</span></div>
      <div class="uq-grid__col uq-grid__col--md-2"><span>uq-grid__col--md-2</span></div>
    </div>
  </div>
`;

twelveEightSixTablet.storyName = "6-8-12 (tablet)";

export const twelveEightSixDesktop = () => `
  <div class="uqds-example-grid">
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--xl-12"><span>uq-grid__col--xl-12</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--xl-11"><span>uq-grid__col--xl-11</span></div>
      <div class="uq-grid__col uq-grid__col--xl-1"><span>uq-grid__col--xl-1</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--xl-10"><span>uq-grid__col--xl-10</span></div>
      <div class="uq-grid__col uq-grid__col--xl-2"><span>uq-grid__col--xl-2</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--xl-9"><span>uq-grid__col--xl-9</span></div>
      <div class="uq-grid__col uq-grid__col--xl-3"><span>uq-grid__col--xl-3</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--xl-8"><span>uq-grid__col--xl-8</span></div>
      <div class="uq-grid__col uq-grid__col--xl-4"><span>uq-grid__col--xl-4</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--xl-7"><span>uq-grid__col--xl-7</span></div>
      <div class="uq-grid__col uq-grid__col--xl-5"><span>uq-grid__col--xl-5</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--xl-6"><span>uq-grid__col--xl-6</span></div>
      <div class="uq-grid__col uq-grid__col--xl-6"><span>uq-grid__col--xl-6</span></div>
    </div>
  </div>
`;

twelveEightSixDesktop.storyName = "6-8-12 (desktop)";

export const twelveEightSixNested = () => `
  <div class="uqds-example-grid">
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--5">
        <span>Content</span>
        <div class="uqds-example-grid--highlight">
          <div class="uq-grid">
            <div class="uq-grid__col uq-grid__col--3"><span>Nested</span></div>
            <div class="uq-grid__col uq-grid__col--3"><span>Nested</span></div>
          </div>
        </div>
      </div>
      <div class="uq-grid__col uq-grid__col--1"><span>Content</span></div>
    </div>
  </div>
`;

twelveEightSixNested.storyName = "6-8-12 nested";

export const twelveEightSixFullWidth = () => `
  <div class="uqds-example-grid">
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--7"><span>7 columns</span></div>
      <div class="uq-grid__col uq-grid__col--5"><span>5 columns</span></div>
    </div>
  </div>
`;

twelveEightSixFullWidth.storyName = "6-8-12 full width";

export const flexible = () => ``;

flexible.storyName = "Flexible grid";

export const halves = () => ``;

halves.storyName = "Halves";

export const thirds = () => ``;

thirds.storyName = "Thirds";
