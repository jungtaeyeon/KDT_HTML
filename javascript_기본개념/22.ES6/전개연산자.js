// Spread syntax - 주소에 참조값만 복사해 온다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax

let emp = {key: "empno"}
let dept = {key: "deptno"}
let member = {key: "memno"}

const array = [emp, dept];
console.log(array);
const array1 = [emp.key, dept.key];
console.log(array1);

// array copy - 얕은복사인가 깊은복사인가?
const arrayCopy = [...array]; // 얕은 복사 이다. - 증명해봐
console.log(arrayCopy);
console.log(array);
arrayCopy.push(member)
console.log(arrayCopy);
console.log(array);

const arrayCopy2 = [...arrayCopy, {key: "bookno"}]
console.log(arrayCopy2);

// Object merge
let emp1 = {key1: "empno"}
let dept1 = {key2: "deptno"}
const obj1 = {emp1, dept1}
console.log(obj1);
const obj2 = {...emp1, ...dept1}
console.log(obj2);

/* 
  1. 얕은 복사(Shallow Copy)
  : 복사된 객체의 인스턴스 변수는 원본 객체의 인스턴스 변수와 같은 메모리 주소를 참조한다.
  : 어느 한쪽을 변경하면 나머지도 같이 변경된 결과 확인 가능.

  2. 깊은복사(Deep Copy
    : 참조를 공요하지 않는다.
*/