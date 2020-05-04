import { useEffect } from '@storybook/client-api';

// import styles
import '@uq-uidf/accordion/src/scss/_component.scss';

// import scripts
import accordion from '@uq-uidf/accordion/src/js/accordion.es6';

// documentation
// import docs from './accordion.docs.mdx';

export default {
  title: 'Components/Accordion',
  // parameters: {
  //   docs: {
  //     page: docs
  //   }
  // }
};

export const all = () => {
  useEffect(() => {
    new accordion();  
  });
  return `
    <div class="accordion" aria-label="Accordion button group" role="presentation">
      <div class="accordion__item">
        <button class="accordion__toggle" aria-controls="content-1" aria-expanded="false" id="accordion-title-1">Step 1</button>
        <div class="accordion__content" aria-hidden="true" id="content-1" aria-labelledby="accordion-title-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.</p>
        </div>
      </div>
      <div class="accordion__item">
        <button class="accordion__toggle" aria-controls="content-2" aria-expanded="false" id="accordion-title-2">Step 2</button>
        <div class="accordion__content" role="region" aria-hidden="true" id="content-2" aria-labelledby="accordion-title-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.</p>
        </div>
      </div>
      <div class="accordion__item">
        <button class="accordion__toggle" aria-controls="content-3" aria-expanded="false" id="accordion-title-3">Step 3</button>
        <div class="accordion__content" role="region" aria-hidden="true" id="content-3" aria-labelledby="accordion-title-3">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.</p>

          <p>Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.</p>

          <p>Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.</p>

          <p>Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        </div>
      </div>
    </div>
  `;
};
