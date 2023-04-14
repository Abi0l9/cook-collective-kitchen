const headerIcon = document.querySelector(".header-icon");
const headerMenu = document.querySelector(".header-menu");
const [...navLinks] = document.querySelectorAll("a.nav-links");

let display = false;

const closeMenu = () => {
  display = false;
  headerMenu.style.left = "100%";
  headerMenu.style.transition = "transform 0.5s cubic-bezier(0.8, 0, 0.16, 1)";
};

const toggleMenu = () => {
  if (!display) {
    display = true;

    headerMenu.style.left = "0";
    headerMenu.style.transition =
      "transform 0.5s cubic-bezier(0.8, 0, 0.16, 1)";
  } else if (display) {
    closeMenu();
  }
};

headerIcon.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
