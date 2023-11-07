let menuButton = document.querySelector(".burger-button");
let nav = document.querySelector(".site-nav");
let windowWidth = document.documentElement.clientWidth;


menuButton.onclick = function () {
  if (windowWidth < 992) {
    menuButton.classList.toggle("burger-button--opened");
    nav.classList.toggle("site-nav--opened");
  };
};

let visuallyImpairedClose = document.querySelector(".visually-impaired__btn");
let visuallyImpaired = document.querySelector(".visually-impaired");
let visuallyImpairedHeader = document.querySelector(".site-nav .visually-impaired__wrap");

visuallyImpairedClose.onclick = function () {
  visuallyImpaired.classList.toggle("visually-impaired--closed");
  visuallyImpairedHeader.classList.toggle("visually-impaired__wrap--opened");
};

let cookiesClose = document.querySelector(".use-of-cookies__close-btn");
let cookiesAgree = document.querySelector(".use-of-cookies__agree-btn");
let cookiesWindow = document.querySelector(".use-of-cookies");

cookiesClose.onclick = function () {
  cookiesWindow.classList.add("use-of-cookies--closed");
};

cookiesAgree.onclick = function () {
  cookiesWindow.classList.add("use-of-cookies--closed");
};


let filterButton = document.querySelectorAll(".filters__set-btn");
let filter = document.querySelector(".filters__wrap");



if (filterButton.length > 0) {
  filterButton.onclick = function () {
      filterButton.classList.toggle("filters__set-btn--opened");
      filter.classList.toggle("filters__wrap--opened");

  };
};


// при нажатии на кнопку .btn-up
document.querySelector('.btn--up').onclick = () => {
  // переместим в начало страницы
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

var prevScrollpos = window.pageYOffset;
function scrollShowHeader() {

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.btn--up').style.transform = "translateX(0)";
  } else {
    document.querySelector('.btn--up').style.transform = "translateX(150%)";
  }

  prevScrollpos = currentScrollPos;

}

window.addEventListener('scroll', function() {
  scrollShowHeader();
});


