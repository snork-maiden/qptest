"use strict";

function toggleNavigation() {
  document
    .querySelector(".page-header__popup")
    .classList.toggle("page-header__popup--open");
}

let currentSlide = 1;
showSlide(currentSlide);
function slideBannerForward() {
  showSlide(currentSlide + 1);
}

function slideBannerBackward() {
  showSlide(currentSlide - 1);
}

function showSlide(index) {
  let slides = document.getElementsByClassName("banner-slide");

  if (index > slides.length) {
    index = 1;
  } else if (index < 1) {
    index = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("banner-slide--active");
  }
  slides[index - 1].classList.add("banner-slide--active");
  currentSlide = index;
}
