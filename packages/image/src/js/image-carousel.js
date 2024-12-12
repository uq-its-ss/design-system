import Swiper from "swiper";
import { Navigation, Pagination, A11y } from "swiper/modules";

export const imageCarousel = (element) => {
  if (element) {
    const swiper = new Swiper(element, {
      modules: [Navigation, Pagination, A11y],
      pagination: {
        el: ".uq-image-carousel__pagination",
        bulletActiveClass: "is-active",
        bulletClass: "uq-image-carousel__pagination-item",
      },
      navigation: {
        nextEl: ".uq-image-carousel__next",
        prevEl: ".uq-image-carousel__previous",
      },
    });

    // Add count/index to each slide.
    swiper.slides.forEach((slide, index) => {
      const caption = slide.querySelector(".uq-image__caption");
      if (caption) {
        const counter = document.createElement("p");
        counter.classList.add("uq-image-carousel__slide-counter");
        counter.textContent = `${index + 1}/${swiper.slides.length}`;
        caption.prepend(counter);
      }
    });
  }
};
