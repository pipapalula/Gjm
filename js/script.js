$(".sub").hide()

$(".menu>li").mouseover(function(){
    $(this).children(".sub").stop().show();
    $(".header").addClass("hover");
    
    
})

$(".menu>li").mouseout(function(){
    $(this).children(".sub").stop().hide();
    $(".header").removeClass("hover");
    
})
/* m_menu,m_sub */
$(".m_sub").hide()
$(".m_menu>li").click(function(){
    $(this).toggleClass("m_active")
    $(this).siblings().removeClass("m_active")
    $(this).children(".m_sub").slideToggle(500)
    $(this).siblings().children(".m_sub").slideUp(100)
})

/* m_nav */
$(".m_nav").hide()
$(".m_btn").click(function(){
    $(".m_nav").fadeIn();
    $(".m_nav_wrap").animate({right:"0"},500)
})


$(".m_close").click(function(){
    $(".m_nav").fadeOut();
    $(".m_nav_wrap").animate({right:"-310px"},500)
})

const slider1=new Swiper('.con1box2 .swiper',{
    loop:true,
    navigation:{
        prevEl:'.prev_btn',
        nextEl:'.next_btn'
    },
    pagination:{el:'.con1box2 .swiper-pagination',type:'fraction'}
})  

/* footer */
$(".site_pause").click(function(){
   $(".site_pause").hide()
   $(".site_play").show()
   site.autoplay.stop();
})

$(".site_play").click(function(){
    $(".site_pause").show()
    $(".site_play").hide()
    site.autoplay.start();
 })


const site=new Swiper('.wrap .swiper',{
    loop:true,
    slidesPerView:"auto",
    navigation:{
        prevEl:'.site_prev',
        nextEl:'.site_next'
    },
    autoplay:{delay:2500,disableOnInteraction:false,}
})