const clientsSlider = new Swiper('.clients__slider-conteiner', {
  loop : true,
  autoHeight : true,
  slidesPerGroup : 1,
  slidesPerView : 1,
  speed : 400,
  pagination : {
    el : '.clients__slider-pagination',
    clickable : true,
    type : 'bullets',
  },
});