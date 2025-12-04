export default {
  title: "Components/Image",
  argTypes: {
    image: {
      control: "select",
      options: [
        "images/example-1.jpg",
        "images/example-2.jpg",
        "images/example-3.jpg",
        "images/example-4.jpg",
      ],
    },
    alt: "text",
    caption: "text",
    credit: "text",
  },
  args: {
    image: "images/example-1.jpg",
    alt: "Alt text",
    caption: "<p>Dr Wenger diving in Queensland.</p>",
    credit: "Jane Smith",
  },
  render: ({ image, alt, caption, credit }) => {
    return `
<figure class="uq-image">
  <div class="uq-image__image">
    <img src="${image}" alt="${alt}" />
  </div>
  ${
    caption || credit
      ? `<figcaption class="uq-image__caption">
    ${caption}
    ${credit ? `<p>(Photo credit: ${credit})</p>` : ""}
  </figcaption>`
      : ""
  }
</figure>`;
  },
};

export const Image = {};
