/* 
hoisting이란
블록 안에서 선언된 지역변수가 코드블록 밖으로 끌어올려지면서
강제로 전역변수화 되는 현상 이다.
*/
const btns = document.querySelectorAll("ul li");
console.log(typeof btns); // Array 이다.
console.log(btns.length); // .length가 되나까
// ES5 까지는 변수 선언var -> 호이스팅 이슈
// 그래서 ES6부터 - let사용하면 호이스팅 이슈를 피할 수 있다.
// 다른 방법으로는 즉시 실행함수를 사용해서 
// 괄호로 함수 실행을 가두고 파라미터로는 i를 받지만 가두어진 파라미터 자리에는 index변수를 사용해서
// 호이스팅이 발동하는 변수 i값이 아니라 오염되지 않는 index를 사용해 문제를 해결해 보았다.
// 즉시 실행함수 -> 자기 자신을 정의하자마자 즉시 실행되는 함수를 말한다.
/* 
let 대신에 var를 사용하면 0,1,2까지 간 다음 마지막에 3이 전역에 등록되면서
0번째 버튼 1번째 버튼 2번째 버튼에도 3이 출력됨
*/

for(let i = 0; i<btns.length; i++){ // let을 var로 바꿔서 테스트 해보자!
  btns[i].addEventListener("click", (event) => {
    console.log(event.target); // -> event.target 은 li
    console.log(i);
  })
}