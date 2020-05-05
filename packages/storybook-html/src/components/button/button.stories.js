// import styles
import './button.scss';

// documentation
// import docs from './button.docs.mdx';

export default {
  title: 'Components/Button',
  parameters: {
    // docs: {
    //   page: docs
    // },
    backgrounds: [
      { name: 'Dark', value: '#000' },
      { name: 'UQ purple', value: '#51247a' }
    ]
  }
};

/**
 * Stories constructed using 'template literals'.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */

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

primary.story = {
  name: 'Primary (base)'
}

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

secondaryLight.story = {
  name: "Secondary --light",
  parameters: {
    backgrounds: [
      { name: 'Dark', value: '#000', default: true },
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
