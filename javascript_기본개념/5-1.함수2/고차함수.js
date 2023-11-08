// 고차함수 - 반환형으로 함수 사용할 수 있다. -> return에 함수가 오는 것
// 고차함수는 리턴에 오는 값이 함수이니까 이것을 호출하려면
// 할당연산자로 일단 받아내고 - [Function: ]
const sayHello = () => {
  return function (){
    console.log("hello");
  }
}
sayHello(); // return 함수가 호출되지 않는다.. 아래 과정을 거쳐야 호출이 가능하다.
console.log(sayHello); // [Function: sayHello]

const myFunc = sayHello();
myFunc();
console.log(myFunc); // [Function]

hap = (a,b) => {
  return a+b;
}

const add = hap
console.log(add);
console.log(hap);
console.log(add(1,2));
console.log(hap(1,2));