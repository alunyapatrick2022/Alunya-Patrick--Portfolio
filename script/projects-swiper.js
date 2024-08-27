var swiperNodes = "";
 var pagination = '<div class=swiper-pagination></div>';
 var next_prev_buttons = '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>'; 
 var scrollbar = '<div class="swiper-scrollbar"></div>';
 var swiperNodes = swiperNodes.concat(pagination, next_prev_buttons, scrollbar);
 /* loop throw all swipers on the page */
 $('.swiper').each(function( index ) {
   $( this ).append(swiperNodes);
 });

  var swiper = new Swiper ('.mySwiper /*update to the one used*/', {
    // Optional parameters, remove if not needed
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
    },
    keyboard: {
      enabled: true,
    },
    // Swiper Nodes modules
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    // Breakpoints
    breakpoints: {
      0: { /* Webflow mobile landscape/portriat */
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: { /* Webflow tablet */
        slidesPerView: 2,
        spaceBetween: 15,
      },
      988: { /* Webflow desktop */
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
  })