// поведение "callback" and "go to top" кнопок при загрузке страницы, cкролле и resize окна
butToTop = document.querySelector(".but__to-top");
butPulse = document.querySelector(".but__pulse");
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) { 
  butToTop.style.display = "block"; // поведение go to top кнопки при cкролле окна
  butPulse.classList.add("but__callback-show");
} else {
  butToTop.style.display = "none";
  butPulse.classList.remove("but__callback-show");
}
window.onscroll = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) { 
    butToTop.style.display = "block"; // поведение go to top кнопки при cкролле окна
    butPulse.classList.add("but__callback-show");
  } else {
    butToTop.style.display = "none";
    butPulse.classList.remove("but__callback-show");
  }
}
butToTop.addEventListener("click",() => { // scroll to top when click on butToTop
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});