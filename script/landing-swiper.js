const swiper = new Swiper('.swiper-container', {
  loop: true,               // Enable looping of slides
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 10000,          // 5 seconds delay between slides
      disableOnInteraction: false,
  },
});