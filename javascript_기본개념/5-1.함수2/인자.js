// 인자 -> 파라미터, 매개변수
// 파라미터의 기본값은 undefined이다.
// 파라미터의 정보는 함수 내부에서 접근이 가능한 arguments객체에 저장된다.
function hap(a,b){
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }  [Arguments] { '0': 1, '1': 2, '2': null }
  console.log(arguments[0]); // 1 1
  console.log(arguments[2]); // 3 null
  return a+b;
};
hap2 = (a,b) => {

};
console.log(hap(1,2,3)); // 3

hap(1,2,null);

// ES6 - Parcel, Webpack
// 매개변수 기본값을 줄 수 있다.
function hap3(a=2, b=3){
  return a+b;
}
// 호출 시 파라미터를 주지 않아도, 초기값으로 연산이 처리된다.
console.log(hap3()); // 5
console.log(hap3(1,2)); // 3


// Rest Parameter
function sum(...numbers) {
  console.log(numbers);
};
sum(1,3,5,7,9)

function sum2(x, y, ...numbers){
  console.log(x); // 1
  console.log(y); // 3
  console.log(numbers); // [5,7,9]
}

sum2(1,3,5,7,9)