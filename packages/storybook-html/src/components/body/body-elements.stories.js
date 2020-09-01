// import stylesheet
import './body.scss';

import docs from './body-elements.docs.mdx';

export default {
  title: 'Base/Body/Elements',
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const textBlock = () => {
  return `
    <div class="uidf-body__container">
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

export const unorderedList = () => {
  return `
    <div class="uidf-body__container">
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

export const orderedList = () => {
  return `
    <div class="uidf-body__container">
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

export const definitionList = () => {
  return `
    <div class="uidf-body__container">
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

export const horizontalRule = () => {
  return `
    <div class="uidf-body__container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla vitae consectetur interdum. Quisque sed nibh in lorem malesuada egestas. Integer varius orci in ligula mollis sodales. Sed dapibus rutrum finibus. Vestibulum tellus velit, dictum eu cursus at, luctus condimentum leo. Vestibulum malesuada consectetur sem, nec fermentum nibh molestie at. Pellentesque posuere enim leo, in blandit sem interdum ut. Duis lobortis lectus vitae mi pellentesque sagittis. Fusce eget eros sit amet enim placerat commodo quis id nisl.</p>
      <hr />
      <p>Praesent risus libero, viverra eu libero ultricies, tincidunt posuere sem. Phasellus eros mauris, commodo at orci ut, dictum consectetur sem. Sed urna elit, faucibus et feugiat tincidunt, ultrices at dui. Nulla facilisi. Praesent eget urna eget odio ullamcorper ornare et ut arcu. Integer mollis risus sit amet gravida congue. Praesent eget efficitur erat, ut sodales magna. Nulla at ullamcorper tortor. Aenean et porta nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam aliquet augue eu elementum pretium. Etiam ac feugiat orci, ac molestie tortor. In ac suscipit sapien. Donec tempus mauris id ex tristique convallis nec sit amet ex. Integer semper porttitor sapien ut interdum.</p>
    </div>
  `;
};

export const table = () => {
  return `
    <!--
    Row header:  <th class="uq-table__header" scope="row">
    Column header:  <th class="uq-table__header" scope="col">
    -->

    <!--
    Width 10%:  <th class="uq-table__header uq-table__header--width-10">
    Width 20%:  <th class="uq-table__header uq-table__header--width-20">
    Width 25%:  <th class="uq-table__header uq-table__header--width-25">
    Width 33%:  <th class="uq-table__header uq-table__header--width-33">
    Width 50%:  <th class="uq-table__header uq-table__header--width-50">
    Width 75%:  <th class="uq-table__header uq-table__header--width-75">
    -->

    <div class="uq-table__wrapper">
      <table class="uq-table uq-table--striped">
          <caption class="uq-table__caption">Population of Australian states and territories, September 2020</caption>
          <thead class="uq-table__head">
              <tr class="uq-table__row">
                  <th scope="col" class="uq-table__header uq-table__header--width-50">Location</th>
                  <th scope="col" class="uq-table__header uq-table__header--width-25 uq-table__header--numeric">Population</th>
                  <th scope="col" class="uq-table__header uq-table__header--width-25 uq-table__header--numeric">Change over previous year %</th>
              </tr>
          </thead>
          <tbody class="uq-table__body">
              <tr class="uq-table__row">
                  <td class="uq-table__cell">New South Wales</td>
                  <td class="uq-table__cell uq-table__cell--numeric">7,670,700</td>
                  <td class="uq-table__cell uq-table__cell--numeric">3.1%</td>
              </tr>
              <tr class="uq-table__row">
                  <td class="uq-table__cell">Victoria</td>
                  <td class="uq-table__cell uq-table__cell--numeric">5,996,400</td>
                  <td class="uq-table__cell uq-table__cell--numeric">2.5%</td>
              </tr>
              <tr class="uq-table__row">
                  <td class="uq-table__cell">Queensland</td>
                  <td class="uq-table__cell uq-table__cell--numeric">517,400</td>
                  <td class="uq-table__cell uq-table__cell--numeric">4.0%</td>
              </tr>
          </tbody>
      </table>
    </div>
  `;
};
