let burger = document.querySelector(".burger");
let burgerLineConteiner = document.querySelector(".burger__line-conteiner");
let burgerArrow = document.querySelector(".burger__arrow");
let headerMobileMenu = document.querySelector(".header__mobile-menu");
let navigationConteiner = document.querySelector(".navigation__conteiner");
let headerNav = document.querySelector('.header-nav');
let headerPhone = document.querySelector('.header__phone'); 
let body = document.querySelector("body");

if (window.innerWidth <= 1104) {
    burger.classList.add('burger_active');
    headerNav.classList.add('header-nav_inactive');
    headerPhone.classList.add('header__phone_active');
}
else {
    burger.classList.remove('burger_active');
    headerNav.classList.remove('header-nav_inactive');
    headerPhone.classList.remove('header__phone_active');
}
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1104) {
        burger.classList.add('burger_active');
        headerNav.classList.add('header-nav_inactive');
        headerPhone.classList.add('header__phone_active');
        if (burgerLineConteiner.classList.contains('active__burger-line')) {
            headerMobileMenu.classList.add('header__mobile-menu_active');
        }

    }
    else {
        burger.classList.remove('burger_active');
        headerNav.classList.remove('header-nav_inactive');
        headerPhone.classList.remove('header__phone_active');
        headerMobileMenu.classList.remove('header__mobile-menu_active');
    }
});
burger.addEventListener("click",()=> {
    burgerLineConteiner.classList.toggle("active__burger-line");
    burgerArrow.classList.toggle("active__burger-line");
    headerMobileMenu.classList.toggle('header__mobile-menu_active');
});