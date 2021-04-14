const teamSlider = new Swiper('.team__slider', {
  loop : true,
  autoHeight : true,
  speed : 400,
  breakpoints : {
    0: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    550: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween : 20,
    },
    880: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween : 30,
    },
  },
  pagination : {
    el : '.team__slider-pagination',
    clickable : true,
  },
  // Navigation arrows
  navigation : {
    nextEl : '.team__slider-but-next',
    prevEl : '.team__slider-but-prev',
  },
});