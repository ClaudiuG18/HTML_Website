let index = 0;

function moveSlide(step) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  index += step;

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  slides.style.transform = `translateX(-${index * 100}%)`;
}
