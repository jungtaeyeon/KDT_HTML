// 함수 선언문 function name(){}
// 함수 표현식 const name = function(){} - 익명 함수(자바-익명클래스)

let hap = function (a,b) {
  return a+b;
}

hap = (a,b) => a+b // return을 생략할 수 있다. - 리액트 자주 출몰

console.log(hap(1,2)); // 3

// IIFE(Immedcately-Incoked Function Expressions) - 정의되자마자 즉시 실행되는 함수 !
(function run(){
  console.log("run"); // run
}) ();
