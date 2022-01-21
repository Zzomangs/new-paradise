$(document).ready(function(){

 /* 객실 */
const label = document.querySelector('.label');
const options = document.querySelectorAll('.optionList.room >.optionItem');
// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect = function(item) {
  label.innerHTML = item.textContent;
  label.parentNode.classList.remove('active');
}
// 옵션 클릭시 클릭한 옵션을 넘김
options.forEach(function(option){
  option.addEventListener('click', function(){handleSelect(option)})
})
// 라벨을 클릭시 옵션 목록이 열림/닫힘
label.addEventListener('click', function(){
  if(label.parentNode.classList.contains('active')) {
    label.parentNode.classList.remove('active');
  } else {
    label.parentNode.classList.add('active');
  }
});

/* 전망 */
const labelview = document.querySelector('.labelview');
const options2 = document.querySelectorAll('.optionList.view > .optionItem');
// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect2 = function(item) {
  labelview.innerHTML = item.textContent;
  labelview.parentNode.classList.remove('active');
}
// 옵션 클릭시 클릭한 옵션을 넘김
options2.forEach(function(option){
  option.addEventListener('click', function(){handleSelect2(option)})
})
// 라벨을 클릭시 옵션 목록이 열림/닫힘
labelview.addEventListener('click', function(){
  if(labelview.parentNode.classList.contains('active')) {
    labelview.parentNode.classList.remove('active');
  } else {
    labelview.parentNode.classList.add('active');
  }
});

});