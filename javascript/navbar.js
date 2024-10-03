const navBtn = document.querySelector(".nav-toggler");
const menu = document.querySelector(".nav-wrap");
const closeBtn = document.querySelector(".btn-x");

navBtn.addEventListener("click", () => {
  menu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});