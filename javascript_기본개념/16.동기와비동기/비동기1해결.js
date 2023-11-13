// 자바스크립트는 동기적이다. (순서대로 간다)
// 순서대로 간다면 cback이 없는데 왜 안터지는지???
// 함수도 호이스팅이다. 
const hap = (a, b, cback) => { // 콜백 추가
  setTimeout(() => {
    // return, 실행문-제어문
    cback(a + b);
    console.log(`hqp ${cback(a+b)}`);
  }, 1000); // 1초동안 지연이 발생함
};
// 함수 hap 세 번째 인자에 들어갈 콜백 함수를 선언하였다.
const first = (z) => {
  console.log(`first x: ${z}`);
  return z+1;
};

const x = hap(1, 2, first);
console.log(`x: ${x}`); 
const y = x;
console.log(`y: ${y}`); 

/* 
x: undefined
y: undefined
--- 1초 후 ---
first x: 3
first x: 3
hqp 4
*/
