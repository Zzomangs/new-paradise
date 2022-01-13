console.clear()

const track = document.querySelector('.track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.btn-back');
const nextBtn = document.querySelector('.btn-next');
const navIndicator = document.querySelector('.nav-indicator');
const dots = Array.from(navIndicator.children)
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;



var tl = new TimelineMax();
// function blur(el, blur){
// 	tl.fromTo(el, 0.55, 
// 		{filter: `blur(${blur}px)`},
// 		{filter: 'blur(0px)'});//이미지가 넘어가는 사이에 블러처리된 화면이 같이 넘어가기
// }

const slidePosition = (slide, index) => {
	slide.style.left = `${slideWidth * index}px`;
}
slides.forEach(slidePosition)

//슬라이드가 오른쪽에서 왼쪽으로 가는 기본
const slideToMove = (track, currentSlide, targetSlide) => {
	track.style.transform = `translateX(-${targetSlide.style.left})`;//왼쪽으로 이동
	currentSlide.classList.remove('active');
	targetSlide.classList.add('active');
}
//슬라이드가 돌아가면서 함께 액티브가 들어감
function updateDots(current, target){
	current.classList.remove('active')
	target.classList.add('active')
}

function btnShowHide(targetIndex, prevBtn, nextBtn, slides){
	if(targetIndex == 0){//인덱스가 첫번째일때
		prevBtn.classList.add('hidden')
		nextBtn.classList.remove('hidden')
	}else if(targetIndex == slides.length - 1){
		prevBtn.classList.remove('hidden')
		nextBtn.classList.add('hidden')
	}else{
		prevBtn.classList.remove('hidden')
		nextBtn.classList.remove('hidden')
	}
}

nextBtn.addEventListener('click', (e) => {
	var currentSlide = track.querySelector('.active')
	var nextSlide = currentSlide.nextElementSibling;
	var currentDot = navIndicator.querySelector('.active');
	var nextDot = currentDot.nextElementSibling;
	var nextIndex = slides.findIndex(slide => slide === nextSlide)

	slideToMove(track, currentSlide, nextSlide);
	updateDots(currentDot, nextDot);
	btnShowHide(nextIndex, prevBtn, nextBtn, slides);
	if(e.detail > 1) return;
	// blur(track, 5)
});

prevBtn.addEventListener('click', (e) => {
	var currentSlide = track.querySelector('.active')
	var prevSlide = currentSlide.previousElementSibling;
	var currentDot = navIndicator.querySelector('.active');
	var prevDot = currentDot.previousElementSibling;
	var prevIndex = slides.findIndex(slide => slide === prevSlide)

	slideToMove(track, currentSlide, prevSlide);
	updateDots(currentDot, prevDot);
	btnShowHide(prevIndex, prevBtn, nextBtn, slides)
	if(e.detail > 1) return;
	// blur(track, 5)
});


//아래 점들 액티브
navIndicator.addEventListener('click', (e) => {
	var targetDot  = e.target.closest('.dot');
	if(!targetDot) return;

	var currentSlide = track.querySelector('.active');
	var currentDot = navIndicator.querySelector('.active');
	var targetIndex = dots.findIndex(dot => dot === targetDot)
	var targetSlide = slides[targetIndex];

	slideToMove(track, currentSlide, targetSlide)
	updateDots(currentDot, targetDot);
	btnShowHide(targetIndex, prevBtn, nextBtn, slides)
	if(e.detail > 1) return;
	// blur(track, 5)
})