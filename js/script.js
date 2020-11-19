$(function(){

    // 새로고침시 처음으로 이동
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };
    
    //네비게이션 슬라이드
    $(function(){
        $(".menu-inner>li").mouseenter(function(){
            $(".nav-menu").addClass("slide-on");
            $(".underline").addClass("slide-on");
        });
        $(".nav-menu").mouseleave(function(){
            $(".nav-menu").removeClass("slide-on");
            $(".underline").removeClass("slide-on");
        });
    });


    //네비게이션 픽스드
    $(function(){
        $(window).scroll(function(){
            var sclTop = $(window).scrollTop();

            if(sclTop > 0){
                $(".nav-menu").addClass("scroll-on");
            }else{
                $(".nav-menu").removeClass("scroll-on");
            }
        });
    });


    //메뉴버튼 클릭온
    var $navBtn = $(".nav-btn"); // 네비버튼
    var $nav = $(".menu-inner"); //네비
    
    $navBtn.on("click",function(){
        var $has_on_nav = $nav.hasClass("click-on");
        
        if(!$has_on_nav) {
            $nav.slideDown().addClass("click-on");
        }else {
            $nav.slideUp().removeClass("click-on");
        }
        return false;
    });

    // $(window).resize(function(){
    //     if($(window).width() > 1199){
    //         $nav.slideUp().addClass("click-on");
    //     }
    // });

});



//메인 슬라이드
var swiperMain = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000
    },
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// 슬라이드 텍스트
// var $currentSlide = $(".swiper-slide").hasClass("swiper-slide-active");

// if($currentSlide) {
//     $(".main-txt").addClass("active");
// } else {
//     $(".main-txt").removeClass("active");
// }

//제품 슬라이드
 var swiperPd = new Swiper('.pd-slide', {
    spaceBetween: 500,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
