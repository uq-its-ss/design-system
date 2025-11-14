import "@uqds/image/src/scss/main.scss";
import { imageCarousel } from "@uqds/image/src/js/main";

export default {
  title: "Components/Image Carousel",
  argTypes: {
    caption: {
      control: "text",
    },
    credit: {
      control: "text",
    },
    image: {
      control: "select",
      options: [
        "images/example-1.jpg",
        "images/example-2.jpg",
        "images/example-3.jpg",
        "images/example-4.jpg",
      ],
    },
  },
  args: {
    caption: "Dr Wenger diving in Queensland.",
    credit: "Jane Smith",
    image: "images/example-2.jpg",
  },
  play: ({ canvasElement }) => {
    const carousel = canvasElement.querySelector(".uq-image-carousel");
    imageCarousel(carousel);
  },
  render: ({ caption, credit, image }) => {
    return `
<div class="uq-image-carousel swiper">
  <div class="uq-image-carousel__slides swiper-wrapper">
    <figure class="uq-image swiper-slide">
      <div class="uq-image__image">
        <img src="${image}" alt="Example alt text 1" />
      </div>
      <figcaption class="uq-image__caption">
        <p>${caption}</p>
        <p>(Photo credit: ${credit})</p>
      </figcaption>
    </figure>
    <figure class="uq-image swiper-slide">
      <div class="uq-image__image">
        <img src="images/example-3.jpg" alt="Example alt text 2" />
      </div>
      <figcaption class="uq-image__caption">
        <p>Dr Amelia Wenger conducting research during snorkelling in Myanmar.</p>
        <p>(Photo credit: Jake Smith)</p>
      </figcaption>
    </figure>
    <figure class="uq-image swiper-slide">
      <div class="uq-image__image">
        <img src="images/example-4.jpg" alt="Example alt text 3" />
      </div>
      <figcaption class="uq-image__caption">
        <p>Sunt labore aute occaecat proident veniam commodo do velit amet et. Eu laboris occaecat sint do. Lorem anim laboris amet proident elit. Officia pariatur magna sit voluptate Lorem exercitation exercitation.</p>
        <p>(Photo credit: Janet Smith)</p>
      </figcaption>
    </figure>
    <figure class="uq-image swiper-slide">
      <div class="uq-image__image">
        <img src="images/example-1.jpg" alt="Example alt text 4" />
      </div>
      <figcaption class="uq-image__caption">
        <p>Ad elit dolor fugiat Lorem.</p>
        <p>(Photo credit: John Smith)</p>
      </figcaption>
    </figure>  
  </div>
  <div class="uq-image-carousel__controls">
    <div class="uq-image-carousel__previous">
      <span class="uq-icon uq-icon--standard--chevron-left-sml"></span>
      <span class="visually-hidden">Previous</span> 
    </div>
    <div class="uq-image-carousel__next">
      <span class="uq-icon uq-icon--standard--chevron-right-sml"></span>
      <span class="visually-hidden">Next</span> 
    </div>
    <div class="uq-image-carousel__pagination"></div>
  </div>
</div>`;
  },
};

export const ImageCarousel = {};
