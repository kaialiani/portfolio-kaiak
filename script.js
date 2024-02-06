const carouselInner = document.querySelector(".carousel-inner");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const itemWidth = carouselInner.querySelector(".carousel-item").offsetWidth;
let currentTranslate = 0;

const slide = (direction) => {
  currentTranslate += itemWidth * 3 * direction;
  carouselInner.style.transform = `translateX(${currentTranslate}px)`;
};

prevArrow.addEventListener("click", () => {
  slide(-1);
});

nextArrow.addEventListener("click", () => {
  slide(1);
});
