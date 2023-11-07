// package.json에 추가해야함 -> "type":"module",
import number, { str, fruits, Sonata } from "./module1.js";

console.log(number);
console.log(str);
console.log(fruits);
const myCar = new Sonata();
console.log(myCar.speed);
myCar.speedUp(); // 함수 이름 뒤에 괄호가 있어야 호출이다.
console.log(myCar.carColor);
// 자바에서는 전역변수를 반드시 선언하고 this.xxx 이렇게 사용해야 하는데;
// 자바스크립트 에서는 생략이 가능하다. (전역변수 생략하고 바로 this 사용)
console.log(myCar.wheelNum);
