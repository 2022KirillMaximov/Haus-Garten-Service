/* === Burger Menu === */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* === Hero Service Slider (index.html only) === */
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".slider-btn.next");
const prevBtn = document.querySelector(".slider-btn.prev");

if (track && slides.length && nextBtn && prevBtn) {
  let currentIndex = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });
}

// Active menu item for Leistungen
const path = window.location.pathname;

if (path.includes("/services/")) {
  const leistungenLink = document.querySelector(
    '.nav-links a[href*="#leistungen"]'
  );

  if (leistungenLink) {
    leistungenLink.classList.add("active");
  }
}
