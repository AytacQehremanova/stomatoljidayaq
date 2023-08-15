const bannerSwiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  const partnersSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      700:{
        slidesPerView:3,
        spaceBetween:30,
      },

      1024:{
        slidesPerView:5,
        spaceBetween:30,
      }
    }
  });



  const workerSwiper = new Swiper(".workers-swiper", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      700:{
        slidesPerView:3,
        spaceBetween:30,
      },

      1024:{
        slidesPerView:6,
        spaceBetween:30,
      }
    }
  });

  