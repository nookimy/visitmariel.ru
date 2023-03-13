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


let filterButton = document.querySelector(".filters__set-btn");
let filter = document.querySelector(".filters__wrap");

filterButton.onclick = function () {
  filterButton.classList.toggle("filters__set-btn--opened");
  filter.classList.toggle("filters__wrap--opened");
};



