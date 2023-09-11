$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=10){
            $("#menu-none").slideUp(500);
        }
        else{
            $("#menu-none").slideDown(200);
        }
        $(".div-search").slideUp(500);
    });
    $("#navbar-show").hover(function(){
        $("#menu-none").slideDown(200);
    }, function(){});
    $(".txt-search").focus(function(){
        $(".div-search").slideDown(200);
    });
    $(".photo-title").hover(function(){
        $(this).prev().css("opacity","0.5");
    }, function(){
        $(this).prev().css("opacity","0");
    });
    $(".photo-full").hover(function(){
        $(this).css("opacity","0.5");
    }, function(){
        $(this).css("opacity","0");
    });
});