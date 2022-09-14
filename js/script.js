$(function() {
    /* ленивая загрузка */
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    /* переключение бургер меню */
    $('.header__burger-btn').on('click',function(){
        $('.burger').addClass('active')
    })
    $('.burger__close-brg').on('click',function(){
        $('.burger').removeClass('active')
    })
    /* main slider */
    document.querySelectorAll('.main-slider').forEach(n => {
      const topSlider = new Swiper(n.querySelector('.swiper'), {
          slidesPerView: 1,
          loop:true,
          delay: 15000,
          spaceBetween: 20,
          preloadImages: true,
          lazy: true,
          navigation: {
              nextEl: n.querySelector('.main-slider__navigation-buttons  .swiper-button-next'),
              prevEl: n.querySelector('.main-slider__navigation-buttons  .swiper-button-prev'),
          },
          
          pagination: {
              el: n.querySelector('  .swiper-pagination'),
              type: "fraction",
          },

      });


    });
    /* Маска телефон */
    $(".form__phone").mask("+7 (999) 999-99-99");

    /* слайдер отзывов */
    document.querySelectorAll('.reviews').forEach(n => {
        const topSlider = new Swiper(n.querySelector('.swiper'), {
            slidesPerView: 3,
            loop:true,
            spaceBetween: 20,
            preloadImages: true,
            lazy: true,
            navigation: {
                nextEl: n.querySelector('  .swiper-button-next'),
                prevEl: n.querySelector('  .swiper-button-prev'),
            },
            
            pagination: {
                el: n.querySelector('  .swiper-pagination'),
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                // when window width is >= 480px
                990: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }
        });
  
  
      });
});