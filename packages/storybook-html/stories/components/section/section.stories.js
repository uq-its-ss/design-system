import docs from "./section.docs.mdx";
import "../../../../sections/src/scss/main.scss";

export default {
  title: "Components/Section",
  parameters: {
    docs: {
      page: docs,
    },
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text"
    },
  },
};

export const Section = {
  args: {
    title: 'Title',
    description: 'Description',
    content: '',
  },
  render:  ({ title, description, content }) => `
<section class="uq-section">
  <div class="uq-section__header">
    ${title ? `<h2 class="uq-section__title">${title}</h2>` : ''}
    ${description ? `
    <div class="uq-section__description">
      <p>${description}</p>
    </div>`: ''}
  </div>
  ${content}
</section>`
}
