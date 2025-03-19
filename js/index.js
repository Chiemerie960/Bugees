const burger = document.querySelector(".burger");
const nav = document.querySelector(".navMenu");
const burgerBtn = document.querySelector(".burger i");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");

  burgerBtn.classList.toggle("bi-list");
  burgerBtn.classList.toggle("bi-x");

  if (nav.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});


AOS.init();