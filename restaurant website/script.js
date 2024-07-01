// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-lines");
  const menuItems = document.querySelector(".menu-items");

  hamburger.addEventListener("click", () => {
    menuItems.classList.toggle("open");
  });
});
