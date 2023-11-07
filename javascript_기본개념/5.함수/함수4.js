// 함수는 하나의 데이터이다
const getNumber = function(){
  return 123;
}
const getNumber2 = () => {
  return 5;
}

console.log(typeof getNumber); // Function 출력
console.log(typeof getNumber()); // number 출력
console.log(typeof getNumber2()); // number 출력
