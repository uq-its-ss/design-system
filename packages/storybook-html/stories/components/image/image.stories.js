import "@uqds/image/src/scss/main.scss";

export default {
  title: "Components/Image",
  argTypes: {
    image: "text",
    alt: "text",
    caption: "text",
    credit: "text",
  },
  args: {
    image: "images/example-1.jpg",
    alt: "Alt text",
    caption: "<p>Dr Wenger diving in Queensland / Image: Jane Smith</p>",
  },
  render: ({ image, alt, caption }) => {
    return `
<figure class="uq-image">
  <div class="uq-image__image">
    <img src="${image}" alt="${alt}" />
  </div>
  ${caption ? `<figcaption class="uq-image__caption">${caption}</figcaption>` : ""}
</figure>`;
  },
};

export const Image = {};
