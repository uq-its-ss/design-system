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
<div class="uq-collapsible-text ${variantClass}" data-component="collapsible-text">
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum diam eget magna pretium, non lacinia orci feugiat. Proin luctus volutpat quam, id varius nibh ultricies at. Mauris tempus sodales mauris quis consectetur. Aenean lorem orci, cursus ac vestibulum bibendum, efficitur ut tellus. Praesent faucibus lorem in odio convallis, eget porttitor tellus luctus. Integer dignissim sit amet nisi vitae tempus. In faucibus turpis elementum metus finibus blandit. Nam luctus mauris ac nisl iaculis tempor id quis ipsum.</p>
    <p>Cras et orci mollis, vulputate est sed, posuere nulla. Curabitur blandit lacinia varius. Praesent tincidunt laoreet sagittis. Etiam libero lorem, dapibus ac dignissim vitae, dictum eu magna. Nunc convallis posuere nisi, id luctus tellus tristique ut. Ut vehicula posuere orci eu euismod. Nam auctor odio quis erat gravida molestie. Maecenas elementum, tortor ut dignissim vehicula, mi magna feugiat nunc, sit amet tempus neque mauris in dui. Duis tristique, tellus ut mattis pulvinar, odio tortor maximus dolor, at interdum mi ex nec felis. Sed eu pretium metus, a lacinia nisl. In urna metus, dictum vitae accumsan non, dapibus at urna.</p>
    <p>Sed volutpat, elit at feugiat viverra, massa magna volutpat est, a pharetra nisl ante ut leo. Nunc porta vestibulum lorem sed suscipit. Duis cursus accumsan consequat. Mauris aliquet dictum sapien facilisis tempus. Nullam non sapien suscipit, porttitor nibh id, euismod mauris. Vestibulum ornare purus ante, a varius erat imperdiet in. Ut lobortis lorem a massa placerat, nec elementum sem mattis. Fusce sed interdum leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc bibendum purus vel odio facilisis sagittis. Nam ullamcorper porttitor augue eget efficitur. In id lorem id mauris imperdiet molestie.</p>
    <p>Phasellus non felis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at libero nec nulla fermentum tincidunt. Curabitur ac eros ac libero tincidunt tincidunt. Integer sit amet sapien non justo facilisis tincidunt. Donec vel sapien ut libero venenatis tincidunt. Suspendisse potenti. Aliquam erat volutpat. Proin ac libero nec nulla fermentum tincidunt. Curabitur ac eros ac libero tincidunt tincidunt.</p>
    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit.</p>
  </div>
  
  <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
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
      <div class="uq-pane" style="border-bottom: 1px solid #e8e8e8; padding: 1.5rem; ">
        <div class="uq-collapsible-text" data-component="collapsible-text">
          <div class="uq-collapsible-text__content" data-collapsible-content>
            <p>
              This doesnt have enough content to trigger the collapsible behavior. Each collapsible component operates independently. Expanding one doesn't affect the others.
              This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
        </div>
      </div>
      <div class="uq-pane" style="border-bottom: 1px solid #e8e8e8; padding: 1.5rem;">
        <div class="uq-collapsible-text" data-component="collapsible-text">
          <div class="uq-collapsible-text__content" data-collapsible-content>
            <p>
              Each collapsible component operates independently. Expanding one doesn't affect the others.
              This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur luptate velit esse cint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum sint occaecat cupidatat non proident.
            </p>
            <p>
              Each collapsible component operates independently. Expanding one doesn't affect the others.
              This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
        </div>
      </div>
      <div class="uq-pane" style="border-bottom: 1px solid #e8e8e8; padding: 1.5rem;">
        <div class="uq-collapsible-text" data-component="collapsible-text">
          <div class="uq-collapsible-text__content" data-collapsible-content>
            <p>
              Each collapsible component operates independently. Expanding one doesn't affect the others.
              This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Each collapsible component operates independently. Expanding one doesn't affect the others.
              This is perfect for FAQs, article previews, or any content that needs progressive disclosure.
              
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
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
        <div class="uq-collapsible-text" data-component="collapsible-text">
          <div class="uq-collapsible-text__content" data-collapsible-content>
            <p>
              This component uses the default 16rem threshold. The button will only appear if 
              the content height exceeds 16rem. Since this content is relatively short, the button 
              should be hidden and the content displayed in full.
            </p>


          </div>
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h3>Low Threshold (5rem)</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapse-threshold="10" - Button appears if content exceeds 5rem</em></p>
        <div class="uq-collapsible-text" data-component="collapsible-text" data-collapse-threshold="10">
          <div class="uq-collapsible-text__content" data-collapsible-content>
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
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h3>Medium Threshold (10rem)</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapse-threshold="10" - Button appears if content exceeds 10rem</em></p>
        <div class="uq-collapsible-text" data-component="collapsible-text" data-collapse-threshold="10">
          <div class="uq-collapsible-text__content" data-collapsible-content>
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
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
        </div>
      </div>

      <div>
        <h3>High Threshold (25rem)</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapse-threshold="25" - Button appears if content exceeds 25rem</em></p>
        <div class="uq-collapsible-text" data-component="collapsible-text" data-collapse-threshold="25">
          <div class="uq-collapsible-text__content" data-collapsible-content>
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
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
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
        <div class="uq-collapsible-text" data-component="collapsible-text" data-collapse-threshold="5">
          <div class="uq-collapsible-text__content" data-collapsible-content>
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
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h3>Collapsed Height: 3rem</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapsed-height="3" - Shows less content when collapsed</em></p>
        <div class="uq-collapsible-text" data-component="collapsible-text" data-collapsed-height="3" data-collapse-threshold="5">
          <div class="uq-collapsible-text__content" data-collapsible-content>
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
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h3>Collapsed Height: 10rem</h3>
        <p style="margin-bottom: 1rem;"><em>data-collapsed-height="10" - Shows less content when collapsed</em></p>
        <div class="uq-collapsible-text" data-component="collapsible-text" data-collapsed-height="10" data-collapse-threshold="5">
          <div class="uq-collapsible-text__content" data-collapsible-content>
            <p>
              This component has a collapsed height of 10rem, showing less content in the teaser.
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
          <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
        </div>
      </div>
      
    </div>
`;
  },
};
