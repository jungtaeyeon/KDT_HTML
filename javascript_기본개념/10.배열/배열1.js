/* 
Array - 내장함수 -> 얕은복사, 깊은복사 -> 제어문 forEach문
: 연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조 -> Map
*/
const colors = ["red", "blue", "green"];
console.log(colors);

colors.forEach((color)=>{ // JSON포맷 다루기
  console.log(color); // colors 배열의 방 안에 있는 값을 한번씩 다 출력
})
console.log(colors[0]);

colors.map((color) => console.log(color));

for(let i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

const arr1 = ["a", "b", "c"];
let cnt = 0;
arr1.forEach((arr) => { // arr1배열의 방 만큼 반복된다.
  console.log(arr); // a, b, c 가 하나씩 호출된다.
  console.log(cnt);
  cnt++
})
console.log(cnt); // 3

const names = ["나신입", "강감찬", "이성계"]
const copy = [];

for(let i = 0; i<names.length; i++){
  copy.push(names[i])
  console.log(`copy[${i}]: ${copy[i]}`);
}
copy.push("나초보");
// 깊은 복사란, 새로운 배열을 추가하는 것 이고
// 얕은 복사란 주소번지가 같은 거니까 한쪽을 바꾸면 다른쪽도 바뀐다.
console.log(copy);
console.log(names);

names.push(copy)
console.log(names);

names.forEach((name) => {

})

// 얕은복사??? 한번 여쭤보기 !!
const names2 = ["나신입", "강감찬", "이성계"];
const copy2 = names2.slice();

console.log(copy2);
copy2.push("정태연")
console.log(copy2);
console.log(names2);