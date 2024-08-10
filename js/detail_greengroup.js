$(function(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
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

      $(".tab_menu>dt").click(function(){
        $(".tab_menu>dt").removeClass("on")
        $(this).addClass("on")
      })




    let scrTop = 0
    $(window).scroll(function(){
        scrTop++
        scrTop = $(window).scrollTop()
        if(scrTop<50){
            $(".page1_txt").addClass("on")
        }
        if(scrTop<50){
          $(".page2_txt").addClass("on")
      }
    })   
})
