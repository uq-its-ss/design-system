// import stylesheet
import "./_colour.scss";

export default {
  title: "Core/Colour",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const brand = {
  render: () => {
    return `
        <table class="uqds-table uqds-table--card uqds-table--colour">
            <tbody class="uqds-table__body">
                <tr class="uqds-table__mobile-heading">
                <th class="uqds-table__heading">Example</th>
                <th class="uqds-table__heading">Variable</th>
                <th class="uqds-table__heading">HEX</th>
                <th class="uqds-table__heading">Usage</th>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--purple-500"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$purple-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#51247a</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Primary brand colour
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-purple-gradient"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$purple-gradient</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    -
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    UQ's purple gradient
                </td>
                </tr>
            </tbody>
        </table>
    `;
  },
  name: "Brand",
};

export const text = {
  render: () => {
    return `
        <table class="uqds-table uqds-table--card uqds-table--colour">
            <tbody class="uqds-table__body">
                <tr class="uqds-table__mobile-heading">
                <th class="uqds-table__heading">Example</th>
                <th class="uqds-table__heading">Variable</th>
                <th class="uqds-table__heading">HEX</th>
                <th class="uqds-table__heading">Usage</th>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--black"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$black</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#19151c</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Heading colour
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-900"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$grey-900</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#3b383e</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Body copy
                </td>
                </tr>
            </tbody>
        </table>
      `;
  },
  name: "Text",
};

export const link = {
  render: () => {
    return `
<table class="uqds-table uqds-table--card uqds-table--colour">
            <tbody class="uqds-table__body">
                <tr class="uqds-table__mobile-heading">
                <th class="uqds-table__heading">Example</th>
                <th class="uqds-table__heading">Variable</th>
                <th class="uqds-table__heading">HEX</th>
                <th class="uqds-table__heading">Usage</th>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--purple-500"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$purple-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#51247a</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Interactive elements like buttons and link text
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--utility-500"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$utility-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#0d6dcd</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Focus state
                </td>
                </tr>
            </tbody>
        </table>
      `;
  },
  name: "Link",
};

export const neutral = {
  render: () => {
    return `
        <table class="uqds-table uqds-table--card uqds-table--colour">
            <tbody class="uqds-table__body">
                <tr class="uqds-table__mobile-heading">
                <th class="uqds-table__heading">Example</th>
                <th class="uqds-table__heading">Variable</th>
                <th class="uqds-table__heading">HEX</th>
                <th class="uqds-table__heading">Usage</th>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-700"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$grey-700</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#757377</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    De-emphasised text eg. breadcrumbs, tags
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-300"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$grey-300</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#d1d0d2</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Disabled form text
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-200"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$grey-200</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#dcdcdd</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Border colour
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-50"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$grey-50</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#f3f3f4</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Background colour to highlight sections, cards or panes
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--white"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$white</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#ffffff</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Standard white
                </td>
                </tr>
            </tbody>
        </table>
      `;
  },
  name: "Neutral",
};

export const status = {
  render: () => {
    return `
        <table class="uqds-table uqds-table--card uqds-table--colour">
            <tbody class="uqds-table__body">
                <tr class="uqds-table__mobile-heading">
                <th class="uqds-table__heading">Example</th>
                <th class="uqds-table__heading">Variable</th>
                <th class="uqds-table__heading">HEX</th>
                <th class="uqds-table__heading">Usage</th>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--utility-500"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$utility-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#0d6dcd</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Background for global non-critical information alerts
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--utility-50"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$utility-50</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#e7f0fa</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Background for non-critical information alerts
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--error-500"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$error-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#d62929</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Background for global error alerts
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--error-50"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$error-50</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#fbeaea</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Background for error alerts
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--warning-500"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$warning-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#f7ba1e</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Background for global warning alerts
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--warning-50"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$warning-50</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#fef8e8</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Background for warning alerts
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--success-500"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$success-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#4aa74e</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Background for global success alerts
                </td>
                </tr>
                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--success-50"></div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$success-50</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#edf6ed</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Background for success alerts
                </td>
                </tr>
            </tbody>
        </table>
      `;
  },
  name: "Status",
};

export const purple = {
  render: () => {
    return `
        <div class="uqds-colour__swatches">
            <div class="uqds-colour__palette uqds-colour--purple-50">purple-50</div>
            <div class="uqds-colour__palette uqds-colour--purple-100">purple-100</div>
            <div class="uqds-colour__palette uqds-colour--purple-200">purple-200</div>
            <div class="uqds-colour__palette uqds-colour--purple-300">purple-300</div>
            <div class="uqds-colour__palette uqds-colour--purple-400">purple-400</div>
            <div class="uqds-colour__palette uqds-colour--purple-500">purple-500</div>
            <div class="uqds-colour__palette uqds-colour--purple-600">purple-600</div>
            <div class="uqds-colour__palette uqds-colour--purple-650">purple-650</div>
            <div class="uqds-colour__palette uqds-colour--purple-700">purple-700</div>
            <div class="uqds-colour__palette uqds-colour--purple-800">purple-800</div>
            <div class="uqds-colour__palette uqds-colour--purple-900">purple-900</div>
        </div>
      `;
  },
  name: "Purple",
};

export const grey = {
  render: () => {
    return `
        <div class="uqds-colour__swatches">
            <div class="uqds-colour__palette uqds-colour--grey-50">grey-50</div>
            <div class="uqds-colour__palette uqds-colour--grey-100">grey-100</div>
            <div class="uqds-colour__palette uqds-colour--grey-200">grey-200</div>
            <div class="uqds-colour__palette uqds-colour--grey-300">grey-300</div>
            <div class="uqds-colour__palette uqds-colour--grey-400">grey-400</div>
            <div class="uqds-colour__palette uqds-colour--grey-500">grey-500</div>
            <div class="uqds-colour__palette uqds-colour--grey-600">grey-600</div>
            <div class="uqds-colour__palette uqds-colour--grey-600">grey-650</div>
            <div class="uqds-colour__palette uqds-colour--grey-700">grey-700</div>
            <div class="uqds-colour__palette uqds-colour--grey-800">grey-800</div>
            <div class="uqds-colour__palette uqds-colour--grey-900">grey-900</div>
            <div class="uqds-colour__palette uqds-colour--grey-925">grey-925</div>
        </div>
      `;
  },
  name: "Grey",
};

export const blackandwhite = {
  render: () => {
    return `
        <div class="uqds-colour__swatches">
            <div class="uqds-colour__palette uqds-colour--black">black</div>
            <div class="uqds-colour__palette uqds-colour--white">white</div>
        </div>
      `;
  },
  name: "Black and white",
};

export const utility = {
  render: () => {
    return `
        <div class="uqds-colour__swatches">
            <div class="uqds-colour__palette uqds-colour--utility-50">utility-50</div>
            <div class="uqds-colour__palette uqds-colour--utility-100">utility-100</div>
            <div class="uqds-colour__palette uqds-colour--utility-200">utility-200</div>
            <div class="uqds-colour__palette uqds-colour--utility-300">utility-300</div>
            <div class="uqds-colour__palette uqds-colour--utility-400">utility-400</div>
            <div class="uqds-colour__palette uqds-colour--utility-500">utility-500</div>
            <div class="uqds-colour__palette uqds-colour--utility-600">utility-600</div>
            <div class="uqds-colour__palette uqds-colour--utility-700">utility-700</div>
            <div class="uqds-colour__palette uqds-colour--utility-800">utility-800</div>
            <div class="uqds-colour__palette uqds-colour--utility-900">utility-900</div>
        </div>
      `;
  },
  name: "Utility",
};

export const error = {
  render: () => {
    return `
        <div class="uqds-colour__swatches">
            <div class="uqds-colour__palette uqds-colour--error-50">error-50</div>
            <div class="uqds-colour__palette uqds-colour--error-100">error-100</div>
            <div class="uqds-colour__palette uqds-colour--error-200">error-200</div>
            <div class="uqds-colour__palette uqds-colour--error-300">error-300</div>
            <div class="uqds-colour__palette uqds-colour--error-400">error-400</div>
            <div class="uqds-colour__palette uqds-colour--error-500">error-500</div>
            <div class="uqds-colour__palette uqds-colour--error-600">error-600</div>
            <div class="uqds-colour__palette uqds-colour--error-700">error-700</div>
            <div class="uqds-colour__palette uqds-colour--error-800">error-800</div>
            <div class="uqds-colour__palette uqds-colour--error-900">error-900</div>
        </div>
      `;
  },
  name: "Error",
};

export const warning = {
  render: () => {
    return `
        <div class="uqds-colour__swatches">
            <div class="uqds-colour__palette uqds-colour--warning-50">warning-50</div>
            <div class="uqds-colour__palette uqds-colour--warning-100">warning-100</div>
            <div class="uqds-colour__palette uqds-colour--warning-200">warning-200</div>
            <div class="uqds-colour__palette uqds-colour--warning-300">warning-300</div>
            <div class="uqds-colour__palette uqds-colour--warning-400">warning-400</div>
            <div class="uqds-colour__palette uqds-colour--warning-500">warning-500</div>
            <div class="uqds-colour__palette uqds-colour--warning-600">warning-600</div>
            <div class="uqds-colour__palette uqds-colour--warning-700">warning-700</div>
            <div class="uqds-colour__palette uqds-colour--warning-800">warning-800</div>
            <div class="uqds-colour__palette uqds-colour--warning-900">warning-900</div>
        </div>
      `;
  },
  name: "Warning",
};

export const success = {
  render: () => {
    return `
        <div class="uqds-colour__swatches">
            <div class="uqds-colour__palette uqds-colour--success-50">success-50</div>
            <div class="uqds-colour__palette uqds-colour--success-100">success-100</div>
            <div class="uqds-colour__palette uqds-colour--success-200">success-200</div>
            <div class="uqds-colour__palette uqds-colour--success-300">success-300</div>
            <div class="uqds-colour__palette uqds-colour--success-400">success-400</div>
            <div class="uqds-colour__palette uqds-colour--success-500">success-500</div>
            <div class="uqds-colour__palette uqds-colour--success-600">success-600</div>
            <div class="uqds-colour__palette uqds-colour--success-700">success-700</div>
            <div class="uqds-colour__palette uqds-colour--success-800">success-800</div>
            <div class="uqds-colour__palette uqds-colour--success-900">success-900</div>
        </div>
      `;
  },
  name: "Sucess",
};
