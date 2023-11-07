
const getNumber = () => {
  return 123;
}

console.log(typeof getNumber); // function 출력
console.log(typeof getNumber()); // number 출력
console.log(getNumber); // [Function: getNumber] 출력
console.log(getNumber()); // 123 출력
