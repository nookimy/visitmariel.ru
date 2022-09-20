let windowWidth = document.documentElement.clientWidth;

new Swiper('.main-slider.swiper',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});

new Swiper('.team__swiper.swiper',{
  navigation: {
    nextEl: '.team__btn-next',
    prevEl: '.team__btn-prev'
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

    1200: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
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



function checkScreen() {
  if (windowWidth >= 768) {
    projectsSwiper = new Swiper('.projects__swiper.swiper', {
      navigation: {
        nextEl: '.projects__btn-next',
        prevEl: '.projects__btn-prev'
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

removeClassesSwiper();

checkScreen();


