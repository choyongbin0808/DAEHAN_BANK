//헤더 메뉴 영역
$(".main-menu>li").mouseenter(function(){
    $(this).children(".sub-menu").show();
})
$(".main-menu>li").mouseleave(function(){
    $(this).children(".sub-menu").hide();
})

//공지사항
$(".gallery").hide();

$(".btn-gallery").click(function(){
    $(".gallery").show();
    $(".news").hide();
})

$(".btn-gallery").click(function(){
    $(".btn-gallery").css("background-color", "#e66b27");
    $(".btn-news").css("background-color", "#777777");
})

$(".btn-news").click(function(){
    $(".news").show();
    $(".gallery").hide();
})

$(".btn-news").click(function(){
    $(".btn-news").css("background-color", "#e66b27");
    $(".btn-gallery").css("background-color", "#777777");
})


// 팝업창
$(".open-modal").click(function(){
    $(".modal").show();
})
$(".close-modal").click(function(){
    $(".modal").hide();
})