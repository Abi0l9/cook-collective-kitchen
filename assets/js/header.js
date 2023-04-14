const headerIcon = document.querySelector(".header-icon");
const toggle = document.querySelector(".toggle");
const headerMenu = document.querySelector(".header-menu");
let display = false;

const toggleMenu = () => {
  if (!display) {
    display = true;
    headerMenu.style.left = "0";
  } else if (display) {
    display = false;
    headerMenu.style.left = "100%";
  }
};

headerIcon.addEventListener("click", toggleMenu);
