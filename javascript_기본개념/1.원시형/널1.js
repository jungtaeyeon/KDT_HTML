// null 값이 존재하지 않는다
let age = null;
console.log(age); //null

// setTimeout이라는 함수를 사용하면 두 번째 파라미터 시간만큼 (ms단위.1000이 1초) 지연 시켰다가 함수를 호출
// 3초 후에 함수가 실행된다
// setTimeout함수 - 시간관리함 - 타임라인을 변경할 때 사용함 
setTimeout(() => { 
  age = 80;
  console.log(age);
},3000)