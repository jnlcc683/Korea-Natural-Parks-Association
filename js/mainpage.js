$(document).ready(function(){
    
    //메인 슬라이드배너
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateX(${count*-33.333}%)`)
    },2500)

    //4페이지 탭메뉴
    $(".content_group>dl>dt").click(function(){
        $(".content_group>dl>dt").removeClass("on")
        $(this).addClass("on")
    })


    let scrTop = 0
    $(window).scroll(function(){
        scrTop++
        scrTop = $(window).scrollTop()
        if(scrTop<50){
            $(".main_sub_text").addClass("on")
        }
        if(scrTop<50){
            $(".main_text").addClass("on")
        }
    }) 
})