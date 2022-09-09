let windowWidth = document.documentElement.clientWidth;

new Swiper('.main-slider.swiper',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});



let projectsSwiper;
let projectsSwiperBlock = document.querySelector(".projects__swiper");
var projectsList = document.querySelector('.projects__list');
var projectsItem = document.querySelectorAll('.projects__item');

function removeClassesSwiper() {
  if (windowWidth < 768) {
    projectsSwiperBlock.classList.remove("swiper");
    projectsList.classList.remove("swiper-wrapper");
    projectsItem.classList.remove("swiper-slide");
  }
};

removeClassesSwiper();

function checkScreen() {
  if (windowWidth >= 768) {
    projectsSwiper = new Swiper('.projects__swiper.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        992: {
          slidesPerView: 3,
          spaceBetween: 35,
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
      },

    });
  } else {
    projectsSwiper.destroy(); // или swiper.autoplay.stop();
  }
};

checkScreen();


