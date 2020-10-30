// import styles
import './button.scss';

export default {
  title: 'Components/Button',
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#000000' },
        { name: 'UQ purple', value: '#51247a' }
      ]
    },
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const primary = () => {
  return `
    <button class="uq-button">Button</button>
    <button class="uq-button uq-button--outline">Button</button>
    <button class="uq-button uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--tiny">Button</button>
    <button class="uq-button uq-button--tiny uq-button--outline">Button</button>
    <button class="uq-button uq-button--tiny uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--small">Button</button>
    <button class="uq-button uq-button--small uq-button--outline">Button</button>
    <button class="uq-button uq-button--small uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--large">Button</button>
    <button class="uq-button uq-button--large uq-button--outline">Button</button>
    <button class="uq-button uq-button--large uq-button--text">Button</button>
  `;
};

primary.storyName = 'Primary (base)';

export const secondary = () => {
  return `
    <button class="uq-button uq-button--secondary">Button</button>
    <button class="uq-button uq-button--secondary uq-button--outline">Button</button>
    <button class="uq-button uq-button--secondary uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--secondary uq-button--tiny">Button</button>
    <button class="uq-button uq-button--secondary uq-button--tiny uq-button--outline">Button</button>
    <button class="uq-button uq-button--secondary uq-button--tiny uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--secondary uq-button--small">Button</button>
    <button class="uq-button uq-button--secondary uq-button--small uq-button--outline">Button</button>
    <button class="uq-button uq-button--secondary uq-button--small uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--secondary uq-button--large">Button</button>
    <button class="uq-button uq-button--secondary uq-button--large uq-button--outline">Button</button>
    <button class="uq-button uq-button--secondary uq-button--large uq-button--text">Button</button>
  `;
};

export const secondaryLight = () => {
  return `
    <button class="uq-button uq-button--secondary uq-button--outline uq-button--light">Button</button>
    <button class="uq-button uq-button--secondary uq-button--text uq-button--light">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--secondary uq-button--tiny uq-button--outline uq-button--light">Button</button>
    <button class="uq-button uq-button--secondary uq-button--tiny uq-button--text uq-button--light">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--secondary uq-button--small uq-button--outline uq-button--light">Button</button>
    <button class="uq-button uq-button--secondary uq-button--small uq-button--text uq-button--light">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--secondary uq-button--large uq-button--outline uq-button--light">Button</button>
    <button class="uq-button uq-button--secondary uq-button--large uq-button--text uq-button--light">Button</button>
  `;
};

secondaryLight.storyName = "Secondary --light";
secondaryLight.parameters = {
  backgrounds: {
    default: 'Dark',
    values: [
      { name: 'Dark', value: '#000000' },
      { name: 'UQ purple', value: '#51247a' }
    ]
  } 
};

export const expanded = () => {
  return `
    <button class="uq-button uq-button--expand">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--expand uq-button--outline">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--expand uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--secondary uq-button--expand">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--secondary uq-button--expand uq-button--outline">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--secondary uq-button--expand uq-button--text">Button</button>
  `;
};

expanded.parameters = { layout: "padded" };
