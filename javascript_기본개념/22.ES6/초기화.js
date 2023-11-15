// Object Initializer
// key와 value가 동일한 경우 생략이 가능하다!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer

const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// Expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c }; // 아래와 같이 앞에오는 이름과 뒤에 오는 이름이 같을 때 생략해도 된다! (key와 value가 동일한 경우 생략이 가능하다!)
// const object2 = { a, b, c }; 

console.log(object2.b);
// Expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// Expected output: "foo"
