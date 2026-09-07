import { initJs } from "../../../lib/initJs";

// import styles
import "./collapsible-text.scss";
import { collapsibleText } from "@uqds/collapsible-text/src/js/main";

export default {
  title: "Components/CollapsibleText",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "tall", "custom"],
      description: "Choose a variant of the collapsible text",
    },
    collapsedHeight: {
      control: { type: "number", min: 0 },
      description: "Override default with a custom rem value for the collapsed height",
      if: { arg: "variant", eq: "custom" },
    }
  },
  args: {
    variant: "default",
    collapsedHeight: null,

  },
  decorators: [
    (storyFn) => {


      return initJs(storyFn, (component) => {
        // Initialize JavaScript enhancement
        new collapsibleText();
      });
    },
  ],
  render: ({ variant, collapsedHeight }) => {
    const variantClass =
      variant !== "default" ? `uq-collapsible-text--${variant}` : "";

    return `
    <div>
<div class="uq-collapsible-text ${variantClass}" data-component="collapsible-text" ${collapsedHeight ? `data-collapsed-height="${collapsedHeight}"` : ""}>
  <div class="uq-collapsible-text__content" data-collapsible-content>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent  diam eget magna pretium, non lacinia orci feugiat. Proin luctus volutpat quam, id varius nibh ultricies at. Mauris tempus sodales mauris quis consectetur. Aenean lorem orci, cursus ac vestibulum bibendum, efficitur ut tellus. Praesent faucibus lorem in odio convallis, eget porttitor tellus luctus. Integer dignissim sit amet nisi vitae tempus. In faucibus turpis elementum metus finibus blandit. Nam luctus mauris ac nisl iaculis tempor id quis ipsum.</p>
    <p>Nulla non luctus urna. Etiam gravida elit sit amet hendrerit molestie. Donec dapibus eleifend dictum. Suspendisse at justo vel lacus molestie hendrerit. Proin tortor est, lacinia at pulvinar facilisis, rhoncus vitae ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet lorem velit. Proin interdum ornare lacinia.</p>
    <p>Mauris a mauris a ipsum dictum sodales eu a nulla. Suspendisse ut risus vulputate, laoreet massa in, sollicitudin diam. Sed eleifend nisi leo, ac egestas lorem egestas at. Proin lobortis convallis facilisis. Quisque et imperdiet purus. Quisque pharetra, leo quis pulvinar gravida, sem lacus maximus eros, semper ornare velit libero at dolor. Pellentesque enim metus, auctor quis venenatis vel, vulputate vel mi. Proin tempus, leo sit amet laoreet laoreet, magna massa sollicitudin magna, vitae congue sem lectus viverra augue. Donec finibus nisi quis augue interdum, sit amet tincidunt nibh euismod. Sed eu enim posuere, tempus nisl vitae, mollis magna.</p>
  </div>
  <button class="uq-collapsible-text__button uq-button uq-button--link uq-icon uq-icon--standard--chevron-down-sml uq-icon--right" data-collapsible-button aria-expanded="false">Read more</button>
</div>
</div>
`;
  },
};

export const Default = {};
 
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

