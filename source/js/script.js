let menuButton = document.querySelector(".burger-button");
let nav = document.querySelector(".site-nav");
let windowWidth = document.documentElement.clientWidth;


menuButton.onclick = function () {
  if (windowWidth < 992) {
    menuButton.classList.toggle("burger-button--opened");
    nav.classList.toggle("site-nav--opened");
  };
};


let filterButton = document.querySelector(".filters__set-btn");
let filter = document.querySelector(".filters__wrap");

filterButton.onclick = function () {
  filterButton.classList.toggle("filters__set-btn--opened");
  filter.classList.toggle("filters__wrap--opened");
};

