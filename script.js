var slides = document.querySelectorAll(".home_slider");
var card = document.querySelectorAll(".nav_card");
var progress = document.querySelectorAll(".progress_bar");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var search = document.querySelector(".search_button");
var searchBar = document.querySelector(".search_bar");
var menu = document.querySelector(".nav_items");
var openMenu = document.getElementById("open_menu");
var closeMenu = document.getElementById("close_menu");

let currentSlide = 0;
let timer;

slides[currentSlide].classList.add("active");
card[currentSlide].classList.add("active");
progress[currentSlide].classList.add("active");

// event listeners for opening and closing search bar and navigation menu
search.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});

openMenu.addEventListener("click", () => {
  menu.classList.add("active");
  searchBar.classList.remove("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});

// event for next slide
next.addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  card[currentSlide].classList.remove("active");
  progress[currentSlide].classList.remove("active");

  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
  card[currentSlide].classList.add("active");
  progress[currentSlide].classList.add("active");
});

// event for previous slide
prev.addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  card[currentSlide].classList.remove("active");
  progress[currentSlide].classList.remove("active");

  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  slides[currentSlide].classList.add("active");
  card[currentSlide].classList.add("active");
  progress[currentSlide].classList.add("active");
});

// function for manual navigation with nav cards
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  progress.forEach((prog) => {
    prog.classList.remove("active");
  });

  card.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides[manual].classList.add("active");
  card[manual].classList.add("active");
  progress[manual].classList.add("active");
  currentSlide = manual;

  clearInterval(timer);
  repeat();
};

card.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
  });
});

// function for automatic slides every 10s
var repeat = function () {
  timer = setInterval(function () {
    slides[currentSlide].classList.remove("active");
    card[currentSlide].classList.remove("active");
    progress[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
    card[currentSlide].classList.add("active");
    progress[currentSlide].classList.add("active");
  }, 10000);
};

repeat();
