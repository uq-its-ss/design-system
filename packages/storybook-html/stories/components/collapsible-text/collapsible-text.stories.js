import classNames from "classnames";
import { initJs } from "../../../lib/initJs";

// import styles
import "./collapsible-text.scss";
import { collapsibleText } from "@uqds/collapsible-text/src/js/main";

export default {
  title: "Components/CollapsibleText",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "compact", "tall"],
      description: "Choose a variant of the collapsible text",
    },
  },
  args: {
    variant: "default",
  },
  decorators: [
    (storyFn) =>
      initJs(storyFn, (component) => {
        // Initialize JavaScript enhancement
        new collapsibleText();
      }),
  ],
  render: ({ variant }) => {
    const variantClass =
      variant !== "default" ? `uq-collapsible-text--${variant}` : "";

    return `
    <div>
<div class="uq-collapsible-text ${variantClass}">
  <h3>JavaScript-Enhanced Collapsible Text</h3>
  
  <div class="uq-collapsible-text__content">
    <p>
      This is a JavaScript-enhanced collapsible text component with smooth transitions. 
      The content is initially collapsed with a fade-to-transparent effect at the bottom. 
      Click the "Read more" button below to expand and view the full content.
      
      The JavaScript enhancement measures the actual content height and provides 
      consistent animation timing for both opening and closing transitions. This eliminates 
      the timing issues that occur with CSS-only max-height transitions.
      
      The component is fully accessible with proper ARIA attributes and keyboard navigation. 
      You can customize the collapsed height, fade gradient, button styles, and transition 
      duration using CSS variables.
    </p>
  </div>
  
  <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
</div>
</div>
`;
  },
};

export const Default = {};

export const Compact = {
  args: {
    variant: "compact",
  },
};

export const Tall = {
  args: {
    variant: "tall",
  },
};

export const MultipleInstances = {
  render: () => {
    return `
    <div>
      <div class="uq-collapsible-text" style="margin-bottom: 2rem;">
        <h3>First Instance</h3>
        
        <div class="uq-collapsible-text__content">
          <div>
            This example demonstrates multiple independent collapsible text components on the same page. 
            Each instance operates independently without requiring unique IDs.
            
          </div>
          <div>
            This example demonstrates multiple independent collapsible text 
            </div>
            <div>
            This example demonstrates multiple independent collapsible text  sd asdf asdf asdf
            </div>
             <div>
            This example demonstrates multiple independent collapsible text 
            </div>
            <div>
            This example demonstrates multiple independent collapsible text  sd asdf asdf asdf
            </div>

          
        </div>
        
        <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
      </div>

      <div class="uq-collapsible-text" style="margin-bottom: 2rem;">
        <h3>Second Instance</h3>
        
        <div class="uq-collapsible-text__content">
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>

        </div>
        
        <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
      </div>

      <div class="uq-collapsible-text">
        <h3>Third Instance</h3>
        
        <div class="uq-collapsible-text__content">
          <p>
            The JavaScript enhancement ensures excellent performance even with many instances on the page. 
            Height measurements are cached and transitions are smooth and consistent.
            
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        
        <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
      </div>
    </div>
`;
  },
};

export const CustomThreshold = {
  render: () => {
    return `
    <div>
      <div style="margin-bottom: 3rem;">
        <h3>Default Threshold (16rem)</h3>
        <p style="margin-bottom: 1rem;"><em>Button appears only if content exceeds 16rem</em></p>
        <div class="uq-collapsible-text">
          <div class="uq-collapsible-text__content">
            <p>
              This component uses the default 16rem threshold. The button will only appear if 
              the content height exceeds 16rem. Since this content is relatively short, the button 
              should be hidden and the content displayed in full.
            </p>


          </div>
          <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h3>Low Threshold (5rem)</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapse-threshold="10" - Button appears if content exceeds 5rem</em></p>
        <div class="uq-collapsible-text" data-collapse-threshold="10">
          <div class="uq-collapsible-text__content">
            <p>
              This component has a low threshold of 5rem. Even this short paragraph should trigger 
              the collapsible behavior because it exceeds 5rem in height. You should see the 
              fade effect and "Read more" button.
            </p>
            <p>
              This component uses the default 16rem threshold. The button will only appear if 
              the content height exceeds 16rem. Since this content is relatively short, the button 
              should be hidden and the content displayed in full.
            </p>
            <p>
              This component uses the default 16rem threshold. The button will only appear if 
              the content height exceeds 16rem. Since this content is relatively short, the button 
              should be hidden and the content displayed in full.
            </p>
            <p>
              This component uses the default 16rem threshold. The button will only appear if 
              the content height exceeds 16rem. Since this content is relatively short, the button 
              should be hidden and the content displayed in full.
            </p>

          </div>
          <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h3>Medium Threshold (10rem)</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapse-threshold="10" - Button appears if content exceeds 10rem</em></p>
        <div class="uq-collapsible-text" data-collapse-threshold="10">
          <div class="uq-collapsible-text__content">
            <p>
              This component uses a 10rem threshold. The content needs to be moderately long 
              to trigger the collapsible behavior.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              This component uses a 10rem threshold. The content needs to be moderately long 
              to trigger the collapsible behavior.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              This component uses a 10rem threshold. The content needs to be moderately long 
              to trigger the collapsible behavior.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              This component uses a 10rem threshold. The content needs to be moderately long 
              to trigger the collapsible behavior.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              This component uses a 10rem threshold. The content needs to be moderately long 
              to trigger the collapsible behavior.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              This component uses a 10rem threshold. The content needs to be moderately long 
              to trigger the collapsible behavior.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              This component uses a 10rem threshold. The content needs to be moderately long 
              to trigger the collapsible behavior.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

          </div>
          <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
        </div>
      </div>

      <div>
        <h3>High Threshold (25rem)</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapse-threshold="25" - Button appears if content exceeds 25rem</em></p>
        <div class="uq-collapsible-text" data-collapse-threshold="25">
          <div class="uq-collapsible-text__content">
            <p>
              This component has a high threshold of 25rem. Even though this content is fairly long,
              it might not reach the threshold. The button will only appear if the content height 
              exceeds 25rem.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              This component has a high threshold of 25rem. Even though this content is fairly long,
              it might not reach the threshold. The button will only appear if the content height 
              exceeds 25rem.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              This component has a high threshold of 25rem. Even though this content is fairly long,
              it might not reach the threshold. The button will only appear if the content height 
              exceeds 25rem.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>



          </div>
          <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
        </div>
      </div>
    </div>
`;
  },
};

export const CustomCollapsedHeight = {
  render: () => {
    return `
    <div>
      <div style="margin-bottom: 3rem;">
        <h3>Default Collapsed Height (6rem)</h3>
        <p style="margin-bottom: 1rem;"><em>No data-collapsed-height attribute - uses default 6rem</em></p>
        <div class="uq-collapsible-text" data-collapse-threshold="5">
          <div class="uq-collapsible-text__content">
            <p>
              This component uses the default collapsed height of 6rem. You'll see about 6rem 
              worth of content before the fade effect begins.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur.
            </p>
          </div>
          <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h3>Collapsed Height: 3rem</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapsed-height="3rem" - Shows less content when collapsed</em></p>
        <div class="uq-collapsible-text" data-collapsed-height="3rem" data-collapse-threshold="5">
          <div class="uq-collapsible-text__content">
            <p>
              This component has a collapsed height of 3rem, showing less content in the teaser.
              Perfect for shorter previews or tight layouts.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur.
            </p>
            <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h3>Collapsed Height: 10rem</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapsed-height="10rem" - Shows more content when collapsed</em></p>
        <div class="uq-collapsible-text" data-collapsed-height="10rem" data-collapse-threshold="12">
          <div class="uq-collapsible-text__content">
            <p>
              This component has a collapsed height of 10rem, showing more content in the teaser.
              This is useful when you want to give readers more context before they decide to expand.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
              
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam.
            </p>
            <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Each collapsible component operates independently. Expanding one doesn't affect the others.
            This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
            
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
        </div>
      </div>

      <div>
        <h3>Collapsed Height: 200px</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapsed-height="200px" - You can use any CSS height unit</em></p>
        <div class="uq-collapsible-text" data-collapsed-height="200px" data-collapse-threshold="5">
          <div class="uq-collapsible-text__content">
            <p>
              This component demonstrates that you can use any CSS height unit for the 
              data-collapsed-height attribute, not just rem. Here we're using pixels (200px).
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <button class="uq-collapsible-text__button" aria-expanded="false">Read more</button>
        </div>
      </div>
    </div>
`;
  },
};
