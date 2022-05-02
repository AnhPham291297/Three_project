// // Progress Bar top
function showProgressBar() {
  window.addEventListener("scroll", () => {
    let heightWindow = window.innerHeight;
    let heightBody = document.querySelector("body").clientHeight;
    let progressBarTop = document.querySelector("#progressbar-top");
    let scrollY = window.pageYOffset;
    let percent = Number(scrollY / (heightBody - heightWindow)) * 100;

    progressBarTop.style.width = `${percent}%`;
  });
}
showProgressBar();

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Toggle Menu
const navMoibleList = document.querySelector(".nav-moible-list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  navMoibleList.classList.toggle("active");
  hamburger.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const navMobile = this.document.querySelector(".navmobile");
  header.classList.toggle("sticky", window.scrollY > 0);
  navMobile.classList.toggle("sticky", window.scrollY > 0);

  navMoibleList.classList.remove("active");
  hamburger.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("is-active");
  } else {
    document.querySelector("#scroll-top").classList.remove("is-active");
  }
});

// FANCY BOX

Fancybox.bind("[data-fancybox]", {
  Infinity: true,
  Keyboard: {
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "next",
    ArrowDown: "prev",
    ArrowRight: "next",
    ArrowLeft: "prev",
  },
});

// Slider Featured
let $carousel = $(".featured__slider");
$carousel.flickity({
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  freeScroll: false,
  pageDots: false,
  prevNextButtons: false,
});

$(".featured-btn .next").on("click", function () {
  $carousel.flickity("previous");
});
$(".featured-btn .prev").on("click", function () {
  $carousel.flickity("next");
});

// Slider Team
let team = document.querySelector(".team__item");
let flickity2 = new Flickity(team, {
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  // freeScroll: true,
  pageDots: false,
  prevNextButtons: false,
});

document.querySelector(".team-btn .next").onclick = (e) => {
  e.preventDefault();
  flickity2.next();
};
document.querySelector(".team-btn .prev").onclick = (e) => {
  e.preventDefault();
  flickity2.previous();
};

// AOS
AOS.init({
  duration: 1200,
});
