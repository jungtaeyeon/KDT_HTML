// 콜백함수 - 실습
// 함수도 객체가 될 수 있다. - 일급객체라고 말하기도 한다.

const hap = (a,b) => a+b;
const minus = (a,b) => a-b;
// 파라미터 자리는 외부에서 결정된다.
// 3번째는 함수이다. - 이렇게 외부로 주어지는 함수를 콜백함수라 한다.
function account(a,b, action){
  if(a<0 || b<0){ // 둘 중 하나라도 0보다 작으면 return함
    return; // action은 영원히 호출될 기회가 없다.
  }
  let result = action(a,b)
  return result;
}
// 전달된 action은 콜백함수다. - 언제 호출될지 모르는 경우도 콜백함수다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는게 아니라
// 함수를 가리키고 있는 함수의 참조값이 전달된다.
// 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 된다.
console.log(account(1,2,hap)) // 3
console.log(account(1,2,minus)) // -1

/* 
일급객체 -> first-class object
  일반객체 처럼 모든 연산이 가능한 것
  - 함수의 매개변수로 전달 가능함.
  - 함수의 반환값으로 쓸 수 있음
  - 할당 명령문 사용 가능
  - 동일비교대상

  일급함수 -> first-class function - 코트린이나 파이썬에서도 지원. 자바도 8부터
  함수가 일반객체 처럼 모든 연산이 가능한 것
  - 함수의 매개변수로 전달 가능함.
  - 함수의 반환값으로 쓸 수 있음
  - 할당 명령문 사용 가능
  - 동일비교대상

  고차함수 - Higher-order function
  - 인자로 함수를 받거나(콜백함수)
  - 함수를 반환하는 함수를 고차함수라고 한다.
*/