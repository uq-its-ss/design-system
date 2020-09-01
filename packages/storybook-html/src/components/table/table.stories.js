import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './table.scss';

// documentation
// import docs from './button.docs.mdx';

export default {
  title: 'Components/Table',
  parameters: {
    // docs: {
    //   page: docs
    // },
  }
};

/**
 * Stories constructed using 'template literals'.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */

export const tableSimple = () => {
  return `
  <div class="uq-table__wrapper">
    <table class="uq-table uq-table--striped">
        <caption class="uq-table__caption">Population of Australian states, September 2020</caption>
        <thead class="uq-table__head">
            <tr class="uq-table__row">
                <th scope="col" class="uq-table__header uq-table__header--width-33">Location</th>
                <th scope="col" class="uq-table__header uq-table__header--width-33 uq-table__header--numeric">Population</th>
                <th scope="col" class="uq-table__header uq-table__header--width-33 uq-table__header--numeric">Change over previous year %</th>
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

tableSimple.story = {
  name: 'Table Simple'
}
