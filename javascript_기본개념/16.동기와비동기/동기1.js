// Javascript is synchronous
// 동기코드가 무엇인가?
// 자바스크립트에서는 반환타입을 선언하는 자리가 없다

const func = (x) => { // x=98 copy by value
  return x+2;
}

const x = func(98);
const y = x;
console.log(y);
// 위 코드는 동기인가 비동기 인가??
// 동기코드는 순차적으로 실행될 수 밖에 없다.