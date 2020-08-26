import docs from './body-utilities.docs.mdx';

export default {
  title: 'Base/Body/Utilities',
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const textColorUtils = () => {
  return `
    <div class="uidf-body__text-utility__container">
      <div class="uidf-body__text-utility black text--reverse">.text--reverse</div>
      <div class="uidf-body__text-utility black text--white">.text--white</div>
      <div class="uidf-body__text-utility text--primary">.text--primary</div>
      <div class="uidf-body__text-utility text--primary-light">.text--primary-light</div>
      <div class="uidf-body__text-utility text--purple-50">.text--purple-50</div>
      <div class="uidf-body__text-utility text--grey-25">.text--grey-25</div>
      <div class="uidf-body__text-utility text--grey-60">.text--grey-60</div>
      <div class="uidf-body__text-utility text--grey-80">.text--grey-80</div>
      <div class="uidf-body__text-utility text--grey-90">.text--grey-90</div>
      <div class="uidf-body__text-utility text--black">.text--black</div>
      <div class="uidf-body__text-utility text--red">.text--red</div>
    </div>
  `;
}

textColorUtils.story = {
  name: 'Text colour'
};

export const textSizeUtils = () => {
  return `
    <div class="uidf-body__text-utility__container">
      <div class="uidf-body__text-utility text--xxxxl">.text--xxxxl</div>
      <div class="uidf-body__text-utility text--xxxl">.text--xxxl</div>
      <div class="uidf-body__text-utility text--xxl">.text--xxl</div>
      <div class="uidf-body__text-utility text--xl">.text--xl</div>
      <div class="uidf-body__text-utility text--l">.text--l</div>
      <div class="uidf-body__text-utility text--m">.text--m</div>
      <div class="uidf-body__text-utility text--s">.text--s</div>
      <div class="uidf-body__text-utility text--xs">.text--xs</div>
    </div>
  `;
};

textSizeUtils.story = {
  name: 'Text size'
};

export const textWeightUtils = () => {
  return `
    <div class="uidf-body__text-utility__container">
      <div class="uidf-body__text-utility text--weight-normal">.text--weight-normal</div>
      <div class="uidf-body__text-utility text--weight-bold">.text--weight-bold</div>
      <div class="uidf-body__text-utility text--weight-medium">.text--weight-medium (same as bold)</div>
    </div>
  `;
};

textWeightUtils.story = {
  name: 'Text (font) weight'
};

export const textAlignUtils = () => {
  return `
    <div class="uidf-body__text-utility__container uidf-body__text-utility__container--flex-left">
      <div class="uidf-body__text-utility uidf-body__text-utility--align text--left"><b>.text--left&nbsp;&nbsp;</b><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
      <div class="uidf-body__text-utility uidf-body__text-utility--align text--right"><b>.text--right&nbsp;&nbsp;</b><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
      <div class="uidf-body__text-utility uidf-body__text-utility--align text--center"><b>.text--center&nbsp;&nbsp;</b><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
    </div>
  `;
};

textAlignUtils.story = {
  name: 'Text alignment'
};

export const textPrettyUtils = () => {
  return `
    <div class="uidf-body__text-utility__container text--xl">
      <div class="uidf-body__text-utility"><span class="text--uppercase">Uppercase</span> &nbsp;(.text--uppercase)</div>
      <div class="uidf-body__text-utility text--accent">.text--accent</div>
      <div class="uidf-body__text-utility text--shadow">.text--shadow</div>
    </div>
  `;
};

textPrettyUtils.story = {
  name: 'Text prettiers'
};

export const backgroundColourUtils = () => {
  return `
    <div class="uidf-body__bg-color-utility__container">
      <div class="uidf-body__bg-color-utility purple text--reverse">.purple</div>
      <div class="uidf-body__bg-color-utility white">.white</div>
      <div class="uidf-body__bg-color-utility grey-05">.grey-05</div>
      <div class="uidf-body__bg-color-utility grey-10">.grey-10</div>
      <div class="uidf-body__bg-color-utility grey-25">.grey-25</div>
      <div class="uidf-body__bg-color-utility grey-50 text--reverse">.grey-50</div>
      <div class="uidf-body__bg-color-utility grey-80 text--reverse">.grey-80</div>
      <div class="uidf-body__bg-color-utility black text--reverse">.black</div>
      <div class="uidf-body__bg-color-utility blue text--reverse">.blue</div>
    </div>
  `;
};

backgroundColourUtils.story = {
  name: 'Background colour'
};
