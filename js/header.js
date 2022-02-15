$(document).ready(function(){



  // 대메뉴 ul에 마우스 올릴때
  // 메뉴배경 보이게
  $(".header-m").mouseenter(function(){
    $(".main-navbg").stop().css({height:"0px"}).animate({height:"400px"},1000)
  });

  //대메뉴 ul의 li에 마우스 올릴때 다른 소메뉴뜨게하기

  $('.header-m > li').mouseenter(function(){
    $('.header-m > li').removeClass('on'); 
    $('.main-nav').css({height:"0px"});
     
    $(this).addClass('on');
    var i = $(this).index();
    $('.main-nav').eq(i).css({height:"0px"}).animate({height:'400px'});
   
  });
  

  $('.main-nav').mouseleave(function(){
     
   $('.header-m > li').removeClass('on');
   $(this).css({height:"400px"}).animate({height:'0px'});       
  
  });


  // 메뉴배경 사라지게
  $(".main-nav").mouseleave(function(){
    $(".main-navbg").css({height:"400px"}).animate({height:"0px"})
  });
  
 //헤더 언어 토글링
 $("#kr").on("click",function(){
   $("#leng").toggleClass('show')
 })




 
});