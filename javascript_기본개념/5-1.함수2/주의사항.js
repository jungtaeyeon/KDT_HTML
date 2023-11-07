// 함수를 설계할 때 주의사항
// 불변성 Immutability
// 파라미터로 참조형을 받을 수 있다.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사(메모리복제됨 - 불변성 - 원본도 바뀐다) - 부수효과 - side effect
// 자바스크립트 에서는 타입을 쓰지 않음 - 선언 시 - 언제 타입이 결정되나 ?? - 런타입 시 결정됨
function funcA(num){
  num = 5;
  console.log(num); // 5
}
// 원시형인 경우 함수 내부에서 상태를 변경하더라도 외부에 영향이 없다.
const value = 3;
funcA(value)
console.log(value) // 3

// 대조군 -> 아래 코드처럼 안쓰는게 좋다!
const fruit = { name : "🍎"};

function funcB(obj){
  obj.name = "💙";
  console.log(obj);
}

funcB(fruit)
console.log(fruit);