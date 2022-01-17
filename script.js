const primaryNav = document.querySelector(".primary-nav");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  primaryNav.style.display = "flex";
  primaryNav.style.top = "0";
}

function close() {
  primaryNav.style.top = "-100%";
}
