const features = new Swiper('.features__slide-conteiner', {
    loop : true,
    autoHeight : true,
    slidesPerGroup : 1,
    slidesPerView : 1,
    speed : 400,
    pagination : {
      el : '.features__slider-pagination',
      type : 'progressbar',
    },
  });