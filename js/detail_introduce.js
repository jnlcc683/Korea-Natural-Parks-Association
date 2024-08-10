$(function(){
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        mousewheel: true,
      });



      let scrTop = 0
    $(window).scroll(function(){
        scrTop = $(window).scrollTop()
        let building_top = $(".building").offset().top
        let building_height = $(".building").height()
        let elv_height = $(".elv").height()
        let ani_length = building_height - elv_height //10000px - elv_height
        let distance = scrTop-building_top
        let ani_per = distance / ani_length * 100 //백분율이 계산되는거임
        // ani_per는 0 ~ 100까지의 숫자
        let num = ani_per/(100/5) //5는 슬라이드의 개수
        let idx = Math.floor(num) // 0 1 2 3 4
        let iPer = num - idx



        //도달하지 못한 상황
        if(distance<0){
            $(".elv").removeClass("fixed")
            $(".elv").removeClass("bottom")
        }
        
        //엘리베이터 진행 중인 상황
        if(distance>=0 && distance<ani_length){
            $(".elv").addClass("fixed")
            $(".elv").removeClass("bottom")
            console.log(ani_per+"% 진행되었습니다")

            
            $(".cur_bar").css("width",ani_per+"%")
            $(".per").html(Math.round(ani_per))
            console.log(`현재 ${idx}번째 슬라이드가 ${iPer}% 진행 중에 있습니다.`)
            $(".train").css("transform",`translateX(${-ani_per*0.8}%)`)
            //0.8곱한건 진행률이 80%까지 갔을 때 멈추게 하려고 곱한거임

            // $(".train>li").eq(idx).css("font-size",(iPer*40)+"px")
            //순번에 맞는 리스트의 글씨크기가 각각 바뀌게됨

            $(".train>li").eq(idx).children(".floating_box").css("transform",`translateX(${iPer*100}%) scale(${1+iPer*0.5})`)
        }
        //엘리베이터를 지나친 상황
        if(distance>ani_length){
            $(".elv").removeClass("fixed")
            $(".elv").addClass("bottom")
        }

    })
})