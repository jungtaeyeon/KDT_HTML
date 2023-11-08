/* 
내장함수 -1
: UI만 가지고도 단위테스트를 할 수 있다.

splice & slice -> 얕은복사 인가? 깊은 복사인가?

*/
const names = ["나신입", "강감찬", "이성계"]

const result = names.toString();
console.log(result);
// join - DOM API를 사용하는게 별로다 (가독성이 안좋다) -> 문자열 템플릿으로 만들어서 쓰자 -> 그럼 최소한 DOM Tree가 보인다.
const result2 = names.join("+");
console.log(result2);

names.splice(0, 0, "나초보") // (추가할 Index자리, (추가할 index뒤 부터)삭제할 개수, 추가할 값)
console.log(names);

const other = names.slice(0); // (삭제할 개수)
console.log(other);
other.push("강호동");
console.log(other);
console.log(names);