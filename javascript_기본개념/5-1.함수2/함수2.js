// 자바스크립트에서 함수는 객체이다.
// 자바스크립트에서는 리턴타입을 선언하는 자리가 없다.
// return을 쓰지 않으면 undefined가 반환됨 - 디폴트
add = (a,b) => {
  return a+b;
}

console.log(add) // [Function: add] 함수도 객체이다.
console.log(add(1,2)) // [Function: add] 함수도 객체이다.

// 함수도 객체이니까 치환이 가능한가??
// hap변수가 add의 주소번지와 같은 값을 가리키게 된다.
// 함수의 이름은 함수를 참조하고 있다.
// 그러니까 함수도 객체다. - 콜백함수에서 중요한 컨벤션
const hap = add;
console.log(hap) // [Function: add]
console.log(hap == add) // true
console.log(hap === add) // true
console.log(typeof add) // function
console.log(typeof hap) // function

// 확인하기 - 테스트
// 자바스크립트에서는 파라미터가 달라도 이름이 같으면 호출이 된다.
// 결론 - 같은 이름의 함수를 가질 수 없다. - 메소드 오버로딩 해당 없다.
console.log(hap()) // NaN (Not a Number)
console.log(hap(1,2)) // 3
console.log(hap(1,)) // NaN -> 빈자리에 null이 아닌 undefined가 들어간 것. 아래를 보면 알 수 있다.
console.log(hap(1,null)) // 1
console.log(hap(1,undefined)) // NaN -

console.log(hap(1,[])) // 1
console.log(hap(1,{})) // 1[object Object]


hap1 = () => {
  return undefined
}
console.log(hap1); 

// 왜?
// 원시형 - 부르면 값이 나온다.
// 참조형 - 부르면 주소번지가 나온다. - 사이즈를 정할 수 없다.
// 왜냐하면 변수(객체, 함수)는 주소값만 가지고 있고 실체는 다른 메모리에 저장되어 있다.
//