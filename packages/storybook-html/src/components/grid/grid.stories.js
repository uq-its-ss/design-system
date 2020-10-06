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

export const twelveEightSix = () => `
  <div class="uqds-example-grid uqds-example-grid--wrap-content">
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--4 uq-grid__col--md-5 uq-grid__col--xl-8">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </div>
      <div class="uq-grid__col uq-grid__col--2 uq-grid__col--md-3 uq-grid__col--xl-4">
        <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </div>
    </div>
  </div>
`;

twelveEightSix.storyName = "6-8-12";

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
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--xl-4"><span>uq-grid__col--xl-4</span></div>
      <div class="uq-grid__col uq-grid__col--xl-4"><span>uq-grid__col--xl-4</span></div>
      <div class="uq-grid__col uq-grid__col--xl-4"><span>uq-grid__col--xl-4</span></div>
    </div>
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--xl-3"><span>uq-grid__col--xl-3</span></div>
      <div class="uq-grid__col uq-grid__col--xl-3"><span>uq-grid__col--xl-3</span></div>
      <div class="uq-grid__col uq-grid__col--xl-3"><span>uq-grid__col--xl-3</span></div>
      <div class="uq-grid__col uq-grid__col--xl-3"><span>uq-grid__col--xl-3</span></div>
    </div>
  </div>
`;

twelveEightSixDesktop.storyName = "6-8-12 (desktop)";

export const twelveEightSixNested = () => `
  <div class="uqds-example-grid">
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--4 uq-grid__col--md-6">
        <span>
          Content<br/><br/>
          <div class="uqds-example-grid__highlight">
            <div class="uq-grid">
              <div class="uq-grid__col uq-grid__col--3 uq-grid__col--xl-7"><span>Nested</span></div>
              <div class="uq-grid__col uq-grid__col--3 uq-grid__col--xl-5"><span>Nested</span></div>
            </div>
          </div>
        </span>
      </div>
      <div class="uq-grid__col uq-grid__col--2 uq-grid__col--md-2"><span>Content</span></div>
    </div>
  </div>
`;

twelveEightSixNested.storyName = "6-8-12 nested";

export const twelveEightSixFullWidth = () => `
  <div class="uqds-example-grid">
    <div class="uqds-example-grid__highlight">
      <div class="uq-grid uq-grid--full-width">
        <div class="uq-grid__col uq-grid__col--3">
          <span>Content</span>
        </div>
        <div class="uq-grid__col uq-grid__col--3"><span>Content</span></div>
      </div>
    </div>
  </div>
`;

twelveEightSixFullWidth.storyName = "6-8-12 full width";

export const flexible = () => `
  <div>Placeholder</div>
`;

flexible.storyName = "Flexible grid";

export const halves = () => `
  <div>Placeholder</div>
`;

halves.storyName = "Halves";

export const thirds = () => `
  <div>Placeholder</div>
`;

thirds.storyName = "Thirds";
