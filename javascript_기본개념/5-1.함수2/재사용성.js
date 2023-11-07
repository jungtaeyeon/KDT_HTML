let lastName = "나";
let firstName = "신입";
let fullName = `${lastName} ${firstName}`;
console.log(fullName);
// console.log(funName(firstName, lastName)); // arrow function을 사용했을 때는 순서가 중요하다
console.log(funName2("강", "감찬")); // arrow function이 아닌 function으로 시작되는 함수를 사용했을때는 선언이 아래 있어도 사용이 가능하다...

lastName = "야";
firstName = "너두";
fullName = `${lastName} ${firstName}`;
console.log(fullName);
// 문제 제기 - 만일 firstName과 lastName의 순서를 바꿔야 한다면 어떻게 해야 될까??
// 반복되는 일을 줄이기 위해 함수로 만들 수 있다.
// 결론 : 한 곳에서만 수정하면 된다ㅓ??

// 관전포인트 하나 더
// arrow function과 아닌 경우 차이점은??
// function으로 시작한 함수는 위치에 대한 이슈가 없지만
// arrow function은 접근이 불가능하다.

// 함수 - 리턴타입과 파라미터
funName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}
function funName2(firstName, lastName) {
  return `${firstName} ${lastName}`
}

// 아래에 함수의 표현식 정리를 해보자 !!