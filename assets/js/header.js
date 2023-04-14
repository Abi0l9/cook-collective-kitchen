const headerIcon = document.querySelector(".header-icon");
const toggle = document.querySelector(".toggle");
const headerMenu = document.querySelector(".header-menu");
const menuItems = document.getElementsByClassName("menu-item");

let display = false;

const toggleMenu = () => {
  if (!display) {
    display = true;

    headerMenu.style.left = "0";
    headerMenu.style.transition =
      "transform 0.5s cubic-bezier(0.8, 0, 0.16, 1)";
  } else if (display) {
    display = false;

    headerMenu.style.left = "100%";
    headerMenu.style.transition =
      "transform 0.5s cubic-bezier(0.8, 0, 0.16, 1)";
  }
};

headerIcon.addEventListener("click", toggleMenu);
