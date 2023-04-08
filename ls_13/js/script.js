let burger = document.getElementsByClassName('burger')[0];
let menu = document.getElementsByClassName('main-menu')[0];

burger.addEventListener("click", function(e) {
  burger.classList.toggle('burger_active')
  menu.classList.toggle('main-menu_active')
}, false);