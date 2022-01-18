$(document).ready(function(){



  // 대메뉴 ul에 마우스 올릴때
  // 메뉴배경 보이게
  $(".header-m").mouseenter(function(){
    $(".main-navbg").stop().css({height:"0px"}).animate({height:"400px"},1000)
  });

  //대메뉴 ul의 li에 마우스 올릴때 다른 소메뉴뜨게하기
  $(".header-m > li").mouseenter(function(){
    $(this).next(".main-nav").addClass("active")
  });
  // li 의 형제로 마우스를 올렸을때 기존의 .main-nav의 active를 제거하고 
  //새롭게 보이게 할 수 는 없을까요? 
  // 마우스가 올리는 li 마다 다른 내용의 main-nav가 active되어야합니다ㅠ
  // $(".header-m > li").mouseleave(function(){
  //   $(this).siblings(".main-nav").removeClass("active")
  // });

  // 메뉴배경 사라지게
  $(".header-m > .main-nav").mouseleave(function(){
    $(".main-nav").removeClass("active")
    $(".main-navbg").css({height:"400px"}).animate({height:"0px"},500)
  });
  




 
});