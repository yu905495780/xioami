/**
 * Created by lenovo on 2017/7/20.
 */
$(function () {
    $(".container .daohang ul li").hover(function(){
        $(this).find(".con").stop().slideDown(2000)
    },function(){
        $(this).find(".con").stop().slideUp(2000)
    })


    $(".container .ban ul li").hover(function () {
        $(this).find(".con1").css("display","block");
    },function () {
        $(this).find(".con1").css("display","none");
    })










})