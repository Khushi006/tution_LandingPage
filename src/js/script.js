new Swiper('.card-wrapper', {
    
    loop: true,
    spaceBetween: 30,
  
  
    navigation: {
      nextEl: '.glider-prev',
      prevEl: '.glider-next',
    },
// -----=================for responsiveness=================----
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
    }
    
  });