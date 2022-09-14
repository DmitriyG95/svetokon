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

    /* Липкое меню */
   

    var navbar = document.querySelector(".header__bottom");
    var headerTop = document.querySelector('.header__top')
    var navbarHeight = navbar.offsetHeight

    var sticky = navbar.offsetTop;

    function fixedHeader() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        headerTop.style.paddingBottom = navbarHeight + 'px'
      } else {
        navbar.classList.remove("sticky");
        headerTop.style.paddingBottom =  '40px'
      }
    }
    if (window.matchMedia("(min-width: 992px)").matches) {
        window.onscroll = function() {fixedHeader()};
    } 
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
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                
              }
        });
  
  
      });
});