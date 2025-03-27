const burger = document.querySelector(".burger");
const nav = document.querySelector(".navMenu");
const burgerBtn = document.querySelector(".burger i");
const navLinks = document.querySelectorAll(".navMenu li a"); 

burger.addEventListener("click", () => {
  toggleMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      toggleMenu();
    }
  });
});

function toggleMenu() {
  nav.classList.toggle("open");
  burgerBtn.classList.toggle("bi-list");
  burgerBtn.classList.toggle("bi-x");

  document.body.style.overflow = nav.classList.contains("open")
    ? "hidden"
    : "auto";
}

AOS.init();
