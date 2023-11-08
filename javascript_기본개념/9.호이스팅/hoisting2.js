/* 
ES5 시절에는 어떻게 호이스팅 이슈를 피해갔을까?
해결방법 - 즉시실행함수

({})();

(function(x){
  // 실행문
})(0);
*/
const btns = document.querySelectorAll("ul li");

for(var i = 0; i<btns.length; i++){ // let을 var로 바꿔서 테스트 해보자!
 ((index) => {
  btns[index].addEventListener("click", (event) => {
    console.log(index);
  })
})(i) // 즉시 실행함수 호출하는 자리
} ///// end of for