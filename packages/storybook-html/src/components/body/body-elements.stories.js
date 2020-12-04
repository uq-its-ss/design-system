// import stylesheet
import './body.scss';

import docs from './body-elements.docs.mdx';

export default {
  title: 'Components/Body/Elements',
  parameters: {
    docs: {
      page: docs
    },
    layout: 'padded',
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const textBlock = () => {
  return `
    <div class="uqds-body__container">
      <h1>Heading level 1 (h1)</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla vitae consectetur interdum. Quisque sed nibh in lorem malesuada egestas. Integer varius orci in ligula mollis sodales. Sed dapibus rutrum finibus. Vestibulum tellus velit, dictum eu cursus at, luctus condimentum leo. Vestibulum malesuada consectetur sem, nec fermentum nibh molestie at. Pellentesque posuere enim leo, in blandit sem interdum ut. Duis lobortis lectus vitae mi pellentesque sagittis. Fusce eget eros sit amet enim placerat commodo quis id nisl.</p>
      <h2>Heading level 2 (h2)</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla vitae consectetur interdum. Quisque sed nibh in lorem malesuada egestas. Integer varius orci in ligula mollis sodales. Sed dapibus rutrum finibus. Vestibulum tellus velit, dictum eu cursus at, luctus condimentum leo. Vestibulum malesuada consectetur sem, nec fermentum nibh molestie at. Pellentesque posuere enim leo, in blandit sem interdum ut. Duis lobortis lectus vitae mi pellentesque sagittis. Fusce eget eros sit amet enim placerat commodo quis id nisl.</p>
      <blockquote>Fusce vitae tortor consequat, consectetur metus id, ultricies risus. Nulla pharetra ornare sem, at placerat nisi sollicitudin bibendum. Nulla in pulvinar augue. Etiam tincidunt leo egestas congue congue. Phasellus feugiat mattis finibus. Duis bibendum pharetra risus, non aliquet augue consequat sit amet. Vestibulum sit amet enim fermentum, fringilla massa nec, facilisis augue.</blockquote>
      <h3>Heading level 3 (h3)</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla vitae consectetur interdum. Quisque sed nibh in lorem malesuada egestas. Integer varius orci in ligula mollis sodales. Sed dapibus rutrum finibus. Vestibulum tellus velit, dictum eu cursus at, luctus condimentum leo. Vestibulum malesuada consectetur sem, nec fermentum nibh molestie at. Pellentesque posuere enim leo, in blandit sem interdum ut. Duis lobortis lectus vitae mi pellentesque sagittis. Fusce eget eros sit amet enim placerat commodo quis id nisl.</p>
      <h4>Heading level 4 (h4)</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla vitae consectetur interdum. Quisque sed nibh in lorem malesuada egestas. Integer varius orci in ligula mollis sodales. Sed dapibus rutrum finibus. Vestibulum tellus velit, dictum eu cursus at, luctus condimentum leo. Vestibulum malesuada consectetur sem, nec fermentum nibh molestie at. Pellentesque posuere enim leo, in blandit sem interdum ut. Duis lobortis lectus vitae mi pellentesque sagittis. Fusce eget eros sit amet enim placerat commodo quis id nisl.</p>
      <h5>Heading level 5 (h5)</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla vitae consectetur interdum. Quisque sed nibh in lorem malesuada egestas. Integer varius orci in ligula mollis sodales. Sed dapibus rutrum finibus. Vestibulum tellus velit, dictum eu cursus at, luctus condimentum leo. Vestibulum malesuada consectetur sem, nec fermentum nibh molestie at. Pellentesque posuere enim leo, in blandit sem interdum ut. Duis lobortis lectus vitae mi pellentesque sagittis. Fusce eget eros sit amet enim placerat commodo quis id nisl.</p>
      <h6>Heading level 6 (h6)</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla vitae consectetur interdum. Quisque sed nibh in lorem malesuada egestas. Integer varius orci in ligula mollis sodales. Sed dapibus rutrum finibus. Vestibulum tellus velit, dictum eu cursus at, luctus condimentum leo. Vestibulum malesuada consectetur sem, nec fermentum nibh molestie at. Pellentesque posuere enim leo, in blandit sem interdum ut. Duis lobortis lectus vitae mi pellentesque sagittis. Fusce eget eros sit amet enim placerat commodo quis id nisl.</p>
      <blockquote>Fusce vitae tortor consequat, consectetur metus id, ultricies risus. Nulla pharetra ornare sem, at placerat nisi sollicitudin bibendum. Nulla in pulvinar augue. Etiam tincidunt leo egestas congue congue. Phasellus feugiat mattis finibus. Duis bibendum pharetra risus, non aliquet augue consequat sit amet. Vestibulum sit amet enim fermentum, fringilla massa nec, facilisis augue.</blockquote>
      <p>Praesent risus libero, viverra eu libero ultricies, tincidunt posuere sem. Phasellus eros mauris, commodo at orci ut, dictum consectetur sem. Sed urna elit, faucibus et feugiat tincidunt, ultrices at dui. Nulla facilisi. Praesent eget urna eget odio ullamcorper ornare et ut arcu. Integer mollis risus sit amet gravida congue. Praesent eget efficitur erat, ut sodales magna. Nulla at ullamcorper tortor. Aenean et porta nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam aliquet augue eu elementum pretium. Etiam ac feugiat orci, ac molestie tortor. In ac suscipit sapien. Donec tempus mauris id ex tristique convallis nec sit amet ex. Integer semper porttitor sapien ut interdum.</p>
    </div>
  `;
};

textBlock.storyName = 'Text block';

export const unorderedList = () => {
  return `
    <div class="uqds-body__container">
      <ul>
        <li>Shoes</li>
        <li>Hair tie</li>
        <li>Car</li>
        <li>Window</li>
        <li>Rubber band</li>
        <li>Thermstat</li>
      </ul>
    </div>
  `;
}

unorderedList.storyName = 'Unordered list';

export const orderedList = () => {
  return `
    <div class="uqds-body__container">
      <ol>
        <li>Shoes</li>
        <li>Hair tie</li>
        <li>Car</li>
        <li>Window</li>
        <li>Rubber band</li>
        <li>Thermstat</li>
      </ol>
    </div>
  `;
}

orderedList.storyName = 'Ordered list';

export const definitionList = () => {
  return `
    <div class="uqds-body__container">
      <dl>
        <dt>Location</dt>
        <dd>St Lucia</dd>
        <dt>Duration</dt>
        <dd>4 years full time</dd>
        <dt>Start Semester</dt>
        <dd>Semester 1 (24 Feb, 2020)</dd>
        <dt>QTAC Code</dt>
        <dd>709101</dd>
        <dt>Program Code</dt>
        <dd>2424</dd>
        <dt>AQF</dt>
        <dd>Level 8</dd>
      </dl>
    </div>
  `;
}

definitionList.storyName = 'Definition list';

export const horizontalRule = () => {
  return `
    <div class="uqds-body__container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla vitae consectetur interdum. Quisque sed nibh in lorem malesuada egestas. Integer varius orci in ligula mollis sodales. Sed dapibus rutrum finibus. Vestibulum tellus velit, dictum eu cursus at, luctus condimentum leo. Vestibulum malesuada consectetur sem, nec fermentum nibh molestie at. Pellentesque posuere enim leo, in blandit sem interdum ut. Duis lobortis lectus vitae mi pellentesque sagittis. Fusce eget eros sit amet enim placerat commodo quis id nisl.</p>
      <hr />
      <p>Praesent risus libero, viverra eu libero ultricies, tincidunt posuere sem. Phasellus eros mauris, commodo at orci ut, dictum consectetur sem. Sed urna elit, faucibus et feugiat tincidunt, ultrices at dui. Nulla facilisi. Praesent eget urna eget odio ullamcorper ornare et ut arcu. Integer mollis risus sit amet gravida congue. Praesent eget efficitur erat, ut sodales magna. Nulla at ullamcorper tortor. Aenean et porta nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam aliquet augue eu elementum pretium. Etiam ac feugiat orci, ac molestie tortor. In ac suscipit sapien. Donec tempus mauris id ex tristique convallis nec sit amet ex. Integer semper porttitor sapien ut interdum.</p>
    </div>
  `;
};

horizontalRule.storyName = 'Horizontal rule';

export const table = () => {
  return `
    <div class="scroll-container">
        <table class="uq-table">
            <caption>Types of food and ratings</caption>
            <thead>
                <tr>
                    <th>Type of Food</th>
                    <th>Calories</th>
                    <th>Tasty Factor</th>
                    <th>Average Price</th>
                    <th>Rarity</th>
                    <th>Average Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Slice of Pizza</th>
                    <td>450</td>
                    <td>95%</td>
                    <td>$5.00</td>
                    <td>Common</td>
                    <td>8/10</td>
                </tr>
                <tr>
                    <td>Hamburger</th>
                    <td>350</td>
                    <td>87%</td>
                    <td>$3.50</td>
                    <td>Common</td>
                    <td>7.5/10</td>
                </tr>
            </tbody>
        </table>
    </div>
  `;
};
