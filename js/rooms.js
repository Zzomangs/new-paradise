$(function () {
  //1. 버튼의 각각의 인덱스 받아오기
  $(".banner-point.first > li").each(function (i) {
    let indexNum = i;
    //2. .room-info-blink(컨텐츠영역)의 각각의 인덱스 받아오기
    $(this).click(function () {
      //3. 버튼의 인덱스와 .room-info-blink 인덱스 비교
      $(".room-info.first >.room-info-blink").each(function (j) {
        if (indexNum == j) {
          //4. 기존의 class 삭제 후 추가
          $(".room-info.first >.room-info-blink").removeClass("active");
          $(this).addClass("active");
        }
      });
      //아래버튼 색상변경
      $(".banner-point.first > li").removeClass("active");
      $(this).addClass("active");
      //이미지 변경
      $(".room-slide.first > li").each(function (k) {
        if (indexNum == k){
          $(".room-slide.first > li").removeClass("active");
          $(this).addClass("active");
        }
      });
    });

  });
});

$(function () {
  //1. 버튼의 각각의 인덱스 받아오기
  $(".banner-point.second > li").each(function (i) {
    let indexNum = i;
    //2. .room-info-blink(컨텐츠영역)의 각각의 인덱스 받아오기
    $(this).click(function () {
      //3. 버튼의 인덱스와 .room-info-blink 인덱스 비교
      $(".room-info.second > .room-info-blink").each(function (j) {
        if (indexNum == j) {
          //4. 기존의 class 삭제 후 추가
          $(".room-info.second > .room-info-blink").removeClass("active");
          $(this).addClass("active");
        }
      });
      //아래버튼 색상변경
      $(".banner-point.second > li").removeClass("active");
      $(this).addClass("active");
      //이미지 변경
      $(".room-slide.second > li").each(function (k) {
        if (indexNum == k){
          $(".room-slide.second > li").removeClass("active");
          $(this).addClass("active");
        }
      });
    });
  });
});

$(function () {
  //1. 버튼의 각각의 인덱스 받아오기
  $(".banner-point.third > li").each(function (i) {
    let indexNum = i;
    //2. .room-info-blink(컨텐츠영역)의 각각의 인덱스 받아오기
    $(this).click(function () {
      //3. 버튼의 인덱스와 .room-info-blink 인덱스 비교
      $(".room-info.third > .room-info-blink").each(function (j) {
        if (indexNum == j) {
          //4. 기존의 class 삭제 후 추가
          $(".room-info.third > .room-info-blink").removeClass("active");
          $(this).addClass("active");
        }
      });
      //아래버튼 색상변경
      $(".banner-point.third > li").removeClass("active");
      $(this).addClass("active");
      //이미지 변경
      $(".room-slide.third > li").each(function (k) {
        if (indexNum == k){
          $(".room-slide.third > li").removeClass("active");
          $(this).addClass("active");
        }
      });
    });
  });
});

$(function () {
  //1. 버튼의 각각의 인덱스 받아오기
  $(".banner-point.fourth > li").each(function (i) {
    let indexNum = i;
    //2. .room-info-blink(컨텐츠영역)의 각각의 인덱스 받아오기
    $(this).click(function () {
      //3. 버튼의 인덱스와 .room-info-blink 인덱스 비교
      $(".room-info.fourth > .room-info-blink").each(function (j) {
        if (indexNum == j) {
          //4. 기존의 class 삭제 후 추가
          $(".room-info.fourth > .room-info-blink").removeClass("active");
          $(this).addClass("active");
        }
      });
      //아래버튼 색상변경
      $(".banner-point.fourth > li").removeClass("active");
      $(this).addClass("active");
      //이미지 변경
      $(".room-slide.fourth > li").each(function (k) {
        if (indexNum == k){
          $(".room-slide.fourth > li").removeClass("active");
          $(this).addClass("active");
        }
      });
    });
  });

});