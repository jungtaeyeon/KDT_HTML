// 배열 -> filter -> 얕은복사 or 깊은복사
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// -> filter는 다른 여러객체에서도 재사용할 수 있는 prototype이다.
// -> filter함수는 리턴타입이 배열이다. 그런데 깊은복사 이다. -> 새로운 배열이 만들어지는 것 이다. (두 배열이 주소번지가 다르다.)
const result = words.filter((word) => word.length > 6); // return타입: Array
console.log(typeof result);
console.log(result.length);
words.push("abcdefg");
console.log(words); // [ 'spray','elite','exuberant','destruction','present','abcdefg' ]
console.log(result); // [ 'exuberant', 'destruction', 'present' ] 결론 : filter는 깊은복사다.

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// 구조분해할당 적용 - 배열에 대한 초기화를 한 줄로 끝냄 - react -> props
const [r1,r2,r3] = result;
console.log(r1); // "exuberant"
console.log(r2); // "destruction"
console.log(r3); // "present"
