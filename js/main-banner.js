$(function(){
	let current = 0;//현재 보이는 이미지의 인덱스(0부터)
	let setIntervalId;
	$("#btns > li").click(function(){
	  let i = $(this).index(); 
	  //console.log(i)
	  move(i); //해당되는 버튼의 번호를 매개변수로 보냄
	});
  
  
	//자동실행 함수 호출
	// setInterval(실행문,시간)
	timer();
  
	//자동실행 함수
  
	function timer(){
		setIntervalId = setInterval(function(){
		let n = current + 1; // 0 1 2 3
		if(n == 5){
		  n = 0;
		}
		move(n);
  
	  },5000)
	  
	};

	//자동실행되는 함수를 제어
    $(".main-banner").on({
        mouseover:function(){
            clearInterval(setIntervalId)//중지함수
        },
        mouseout:function(){
            timer();//실행함수
        }
    });
  
  
	//애니메이션 함수
	function move(n){
		if(current == n) return; //같은 숫자 눌렀을때 헛돌지 않도록 하기
	  
	  let currentEl = $(".main-banner li").eq(current);
	  let nextEl = $(".main-banner li").eq(n); 
  
	  currentEl.css({left:"0px"}).animate({left:"-1920px"})
	  nextEl.css({left:"1920px"}).animate({left:"0px"})
	  current = n; //번호를 누르면 눌린 번호가 current가 된다.
	};
});