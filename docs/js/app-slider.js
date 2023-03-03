new Swiper('.app__slider-container.swiper',{
  navigation: {
    nextEl: '.app-slider__btn-next',
    prevEl: '.app-slider__btn-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});
