const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const totalSlides = slides.length;
let index = 0;

function showSlide(slideIndex) {
    const offset = -slideIndex * 100;
    swiperWrapper.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    index = (index === totalSlides - 1) ? 0 : index + 1;
    showSlide(index);
}

prevButton.addEventListener('click', () => {
    index = (index === 0) ? totalSlides - 1 : index - 1;
    showSlide(index);
});

nextButton.addEventListener('click', () => {
    nextSlide();
});

// Auto swipe every 5 seconds
setInterval(nextSlide, 6000);
