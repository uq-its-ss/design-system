
export default {
  title: "Components/Body/Utilities",
  parameters: {
    layout: "padded",
  },
};

export const textColorUtils = {
  render: () => {
    return `
  <table>
    <thead>
    <tr>
      <th>Example</th>
      <th>Class</th>
      <th>usage</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><div class="uqds-body__text-utility text--black">Text black</div></td>
      <td><code>text--black</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility black text--reverse">Text reverse</div></td>
      <td><code>text--reverse</code></td>
      <td>Future students reverse brand colour</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility black text--white">Text white</div></td>
      <td><code>text--white</code></td>
      <td>For use on dark backgrounds</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--primary">Text primary</div></td>
      <td><code>text--primary</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--purple-light">Text purple light</div></td>
      <td><code>text--purple-light</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--error">Text error</div></td>
      <td><code>text--error</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    </tbody>
  </table>
    `;
  },

  name: "Text colours",
};

export const textSizeUtils = {
  render: () => {
    return `
  <table>
    <thead>
    <tr>
      <th>Example</th>
      <th>Class</th>
      <th>usage</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><div class="uqds-body__text-utility text--xxxxl">Text xxxxl</div></td>
      <td><code>text--xxxxl</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--xxxl">Text xxxl</div></td>
      <td><code>text--xxxl</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--xxl">Text xxl</div></td>
      <td><code>text--xxl</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--xl">Text xl</div></td>
      <td><code>text--xl</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--l">Text l</div></td>
      <td><code>text--l</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--m">Text m</div></td>
      <td><code>text--m</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--s">Text s</div></td>
      <td><code>text--s</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    <tr>
      <td><div class="uqds-body__text-utility text--xs">Text xs</div></td>
      <td><code>text--xs</code></td>
      <td>use cases or scenarios to be defined</td>
    </tr>
    </tbody>
  </table>
    `;
  },

  name: "Text size",
};

export const textWeightUtils = {
  render: () => {
    return `
  <table>
    <thead>
      <tr>
        <th>Example</th>
        <th>Class</th>
        <th>usage</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td><div class="uqds-body__text-utility text--weight-normal">text--weight-normal</div></td>
        <td><code>text--weight-normal</code></td>
        <td>use cases or scenarios to be defined</td>
      </tr>
      <tr>
        <td><div class="uqds-body__text-utility text--weight-bold">text--weight-bold</div></td>
        <td><code>text--weight-bold</code></td>
        <td>use cases or scenarios to be defined</td>
      </tr>
      <tr>
        <td><div class="uqds-body__text-utility text--weight-medium">text--weight-medium</div></td>
        <td><code>text--weight-medium</code></td>
        <td>(same as bold) use cases or scenarios to be defined</td>
      </tr>
    </tbody>
  </table>
    `;
  },

  name: "Text weight",
};

export const textAlignUtils = {
  render: () => {
    return `
      <div class="uqds-body__text-utility__container uqds-body__text-utility__container--flex-left">
        <div class="uqds-body__text-utility uqds-body__text-utility--align text--left"><b>.text--left&nbsp;&nbsp;</b><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
        <div class="uqds-body__text-utility uqds-body__text-utility--align text--right"><b>.text--right&nbsp;&nbsp;</b><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
        <div class="uqds-body__text-utility uqds-body__text-utility--align text--center"><b>.text--center&nbsp;&nbsp;</b><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
      </div>
    `;
  },

  name: "Text alignment",
};

export const textPrettyUtils = {
  render: () => {
    return `
      <div class="uqds-body__text-utility__container text--xl">
        <div class="uqds-body__text-utility"><span class="text--uppercase">Uppercase</span> &nbsp;(.text--uppercase)</div>
        <div class="uqds-body__text-utility text--accent">.text--accent</div>
        <div class="uqds-body__text-utility text--shadow">.text--shadow</div>
      </div>
    `;
  },

  name: "Text prettiers",
};

export const backgroundColourUtils = {
  render: () => {
    return `
      <div class="uqds-body__bg-color-utility__container">
        <div class="uqds-body__bg-color-utility purple text--reverse">.purple</div>
        <div class="uqds-body__bg-color-utility white">.white</div>
        <div class="uqds-body__bg-color-utility black text--reverse">.black</div>
        <div class="uqds-body__bg-color-utility link text--reverse">.link</div>
      </div>
    `;
  },

  name: "Background colour",
};

export const visibilityUtils = {
  render: () => `
    <div class="text--xl">
      <div>.hidden <span class="hidden">🕺</span></div>
      <div>.hidden--mobile-only <span class="hidden--mobile-only">🕺</span></div>
      <div>.hidden--md (or .hidden--tablet) <span class="hidden--md">🕺</span></div>
      <div>.hidden--xl (or .hidden--desktop) <span class="hidden--xl">🕺</span></div>
      <div>.visually-hidden <span class="visually-hidden">🕺 There's a person dancing in secret. Shhhhhhhh.</span></div>
    </div>
  `,

  name: "Visibility",
};
