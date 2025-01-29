import './_vendor';
// import './_functions';
// import './_components';


if (Swiper) {
  new Swiper(".cases-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: "auto",
      }
    },
    navigation: {
      nextEl: ".cases-navigation__button--next",
      prevEl: ".cases-navigation__button--prev",
    }
  })
}

