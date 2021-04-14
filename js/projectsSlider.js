const projectsButtonMenu = document.querySelectorAll(".projects__button-menu");
const projectsRowImg = document.querySelectorAll(".projects__row-img");
const projectsButton = document.querySelectorAll(".projects__button");
const projectsColumnButton = document.querySelectorAll(".projects__column-button");
const projectsColumnImg = document.querySelectorAll(".projects__column-img"); 
const projectsSection = document.querySelector(".projects");
let projectsImgWrapper = document.querySelectorAll('.projects__img-wrapper');
let projectsSlideConteiner = document.querySelector('.projects__slide-conteiner');
let projectsModal = document.querySelector('.projects__modal');
let projectsModalClose = document.querySelector('.projects__modal-close');
let projectsModalSlideItem = document.querySelector('.projects__modal-slide-item');
const activeSlideDefault = 0;
// Отображение елементов при старте страницы (по умолчанию) start
for (let i = 0; i < projectsRowImg[activeSlideDefault].children.length-1; i++) {
  projectsRowImg[activeSlideDefault].children[i].classList.add("projects__img-active");
}
projectsButton[activeSlideDefault].classList.add("projects__button-active");
projectsColumnButton[activeSlideDefault+1].classList.add("projects__column-button-active");
projectsRowImg.forEach ((value)=> {
  value.insertAdjacentHTML("beforebegin",'<div class="projects__row-name font__mon300"></div>') // строк названиями из соответств. кнопок
});
const projectsRowName = document.querySelectorAll(".projects__row-name");
// Отображение елементов при старте страницы (по умолчанию) finish
// Добавление padding для <section class="projects"> start
let rowHeight = projectsRowImg[activeSlideDefault].clientHeight; // высота активного столбца
projectsSection.style.paddingBottom = "" + rowHeight + "px"; // добавление padding для <section class="projects">

window.addEventListener('resize',() => {   // добавление padding для <section class="projects"> при изменении размеров окна 
  rowHeight = projectsRowImg[activeSlideDefault].clientHeight;
  projectsSection.style.paddingBottom = "" + rowHeight + "px"; // добавление padding для <section class="projects">
});
// Добавление padding для <section class="projects"> finish
projectsButtonMenu.forEach((indicator, i) => {
  if (i!==0) {
    indicator.addEventListener('click', () => {
      projectsRowName.forEach((value) => {
        value.classList.remove("projects__row-name-active");
      });
      document.querySelector('.projects__button.projects__button-active').classList.remove('projects__button-active'); // снимаем активность предыдущей кнопки
      projectsButton[i-1].classList.add("projects__button-active"); // делаем активной кнопку в соответсвии с нажатым меню
      projectsRowImg.forEach((value) => {
        value.classList.remove("projects__row-img-active-all") // переводим строки в абсолют
      });
      for (let g = 0; g < projectsRowImg.length; g++) {
        for (let j = 0; j < projectsRowImg[g].children.length-1; j++) {   // убираем активность во всех строках
          projectsRowImg[g].children[j].classList.remove("projects__img-active");
        }
      }
      for (let j = 0; j < projectsRowImg[i-1].children.length-1; j++) {
        projectsRowImg[i-1].children[j].classList.add("projects__img-active"); // делаем активной строку в соответсвии с нажатой кнопкой 
      }
      projectsColumnButton.forEach((value) => {
        value.classList.remove("projects__column-button-active");  // убираем класс активности со всех кнопок
      });
      projectsColumnButton[i].classList.add("projects__column-button-active"); // добавляем класс активности на нажатую кнопку
          // Добавление padding для <section class="projects"> start
      rowHeight = projectsRowImg[i-1].clientHeight;
      projectsSection.style.paddingBottom = "" + rowHeight + "px"; // добавление padding для <section class="projects">
      window.addEventListener('resize',() => {   // добавление padding для <section class="projects"> при изменении размеров окна 
        rowHeight = projectsRowImg[i-1].clientHeight;
        projectsSection.style.paddingBottom = "" + rowHeight + "px"; // добавление padding для <section class="projects">
      });
          // Добавление padding для <section class="projects"> finish
    });
    indicator.addEventListener('mouseover', () => {
      projectsColumnButton[i].classList.add("projects__column-button-hover");  // кнопка при наведении
    });
    indicator.addEventListener('mouseout', () => {
      projectsColumnButton[i].classList.remove("projects__column-button-hover");  // кнопка при наведении
    });
  } else {
    indicator.addEventListener('click', () => {
      // Добавление padding для <section class="projects"> start
        rowHeight=0;
        projectsSection.style.paddingBottom = "" + rowHeight + "px"; // добавление padding для <section class="projects">
        window.addEventListener('resize',() => {   // добавление padding для <section class="projects"> при изменении размеров окна 
        rowHeight = 0;
        projectsSection.style.paddingBottom = "" + rowHeight + "px"; // добавление padding для <section class="projects">
      });
      // Добавление padding для <section class="projects"> finish
      projectsButtonMenu.forEach((value,index)=>{
        if(index!==0) {
          projectsRowName[index-1].innerHTML=value.innerHTML; // имена для строк
        }
      });
      projectsRowName.forEach((value) => {
        value.classList.add("projects__row-name-active");  
      });
      projectsColumnButton.forEach((value) => {
        value.classList.remove("projects__column-button-active");
      });
      projectsColumnButton[0].classList.add("projects__column-button-active");
      for (let j = 0; j < projectsRowImg[i].children.length-1; j++) {
        projectsRowImg[i].children[j].classList.remove("projects__img-active"); // удаляем активность с текущих столбцов строки
      }
      for (let g = 0; g < projectsRowImg.length; g++) {
        for (let j = 0; j < projectsRowImg[g].children.length-1; j++) {  // добавляем активность всем столбцам во всех строках
          projectsRowImg[g].children[j].classList.add("projects__img-active");
        }
      };
      projectsRowImg.forEach((value) => {
        value.classList.add("projects__row-img-active-all") // перевод из absolute в static всех строк
      });
      document.querySelector('.projects__button.projects__button-active').classList.remove('projects__button-active'); // снимаем активность предыдущей кнопки
      projectsButton[projectsButton.length-1].classList.add("projects__button-active"); // делаем активной кнопку в крайнем слайде (строке) 
    });
    indicator.addEventListener('mouseover', () => {
      projectsColumnButton[0].classList.add("projects__column-button-hover");
    });

    indicator.addEventListener('mouseout', () => {
      projectsColumnButton[0].classList.remove("projects__column-button-hover");
    });
  }  
});
