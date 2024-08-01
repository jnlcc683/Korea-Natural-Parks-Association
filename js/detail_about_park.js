$(function(){

    let scrTop = 0
    $(window).scroll(function(){
        scrTop++
        scrTop = $(window).scrollTop()
        if(scrTop<200){
            $(".page1_title").addClass("on")
        }
        if(scrTop<500){
            $(".page1_desc").addClass("on")
        }
    })

        //팝업 열기
        $(".btn_open").click(function(){
            $(".parkList1").addClass("on")
        })
        //팝업 닫기
        $(".btn_close").click(function(){
            $(".parkList1").removeClass("on")
        })

})