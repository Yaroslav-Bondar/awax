const slideshowImages = document.querySelectorAll(".header__slideshow img");
const dotsItem = document.querySelectorAll(".dots__item");
const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

slideshowImages[currentImageCounter].classList.add("header__img-active");
dotsItem[currentImageCounter].classList.add("dots__item-active");
// setInterval(nextImage, nextImageDelay); // off/on autoplay
function nextImage() {
  slideshowImages[currentImageCounter].classList.remove("header__img-active");
  dotsItem[currentImageCounter].classList.remove("dots__item-active");


  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  slideshowImages[currentImageCounter].classList.add("header__img-active");
  dotsItem[currentImageCounter].classList.add("dots__item-active");
}

dotsItem.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.dots__item.dots__item-active').classList.remove('dots__item-active');
    document.querySelector('.header__slideshow img.header__img-active').classList.remove('header__img-active');
    indicator.classList.add('dots__item-active');
    slideshowImages[i].classList.add("header__img-active"); 
    currentImageCounter = i;
  });
});
