let menuButton = document.querySelector(".burger-button");
let nav = document.querySelector(".site-nav");
let windowWidth = document.documentElement.clientWidth;


menuButton.onclick = function () {
  if (windowWidth < 992) {
    menuButton.classList.toggle("burger-button--opened");
    nav.classList.toggle("site-nav--opened");
  };
};

new Swiper('.main-slider.swiper',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  // Автопрокрутка
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  loop: true,

  speed: 800,
  /*effect: 'fade',
  fadeEffect: {
    crossFade: true
  },*/
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

new Swiper('.partners__swiper.swiper',{
  navigation: {
    nextEl: '.partners__btn-next',
    prevEl: '.partners__btn-prev'
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
let projectsList = document.querySelector('.projects__list');
let projectsItem = document.querySelectorAll('.projects__item');

let guideSwiper;
let guideSwiperBlock = document.querySelector(".guide__swiper");
let guideList = document.querySelector('.guide__list');
let guideItem = document.querySelectorAll('.guide__item');

function removeClassesSwiper() {
  if (windowWidth < 768) {
    projectsSwiperBlock.classList.remove("swiper");
    projectsList.classList.remove("swiper-wrapper");
    projectsItem.classList.remove("swiper-slide");

    guideSwiperBlock.classList.remove("swiper");
    guideList.classList.remove("swiper-wrapper");
    guideItem.classList.remove("swiper-slide");
  }
};



function checkScreen() {
  if (windowWidth >= 768) {
    projectsSwiper = new Swiper('.swiper.projects__swiper', {
      navigation: {
        nextEl: '.projects__btn-next',
        prevEl: '.projects__btn-prev'
      },


      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
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
    guideSwiper = new Swiper('.guide__swiper.swiper', {
      navigation: {
        nextEl: '.guide__btn-next',
        prevEl: '.guide__btn-prev'
      },
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
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
    guideSwiper.destroy(); // или swiper.autoplay.stop();
  }
};

removeClassesSwiper();

checkScreen();



wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true,
  live: true
})
wow.init();

