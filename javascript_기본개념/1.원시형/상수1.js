// 원시자료형
// 상수 선언하기
const num1 = 1;
const num2 = 2;

console.log(num1 + 1);
console.log(typeof(num1 + 1)); // instanceOf연산자
console.log(num1+num2);
console.log(num1+null);
console.log(typeof(num1 + null));
console.log(num1+undefined); //Not a Numbercd
console.log(typeof(num1+undefined)); 
console.log(num1-num2);

/* 
  자료형(Data Type)
  원시형자료(primative type) - 특정값이 메모리에 바로 저장된다(값만 저장된다)
  종류 
  1. 문자(String)
  2. 숫자(Number)
  3. 논리형(Boolean: true, false)
  // 디버깅 할 때 개발자센터에서 자주 출몰함
  4. undefined: 변수를 선언하고 그 값을 할당하지 않으면 undefined가 대신 저장됨(에러상황) - NullPointerException
  참조형자료(reference type): 값이 위치하고 있는 참조주소값만 메모리에 저장한다
  -> 관련된 내장함수까지도 같이 참조된다
  5. null(Object) - 명시적으로 특정 변수의 값을 비워둘 때 
  6. array(Object) - 연관된 값들을 그룹으로 묶어서 관리하는 형태이다
  7. 객체(Object) - Object 데이터를 key라는 인덱싱을 통해 자료를 구조적으로 묶어놓은 상태
  - 6,7,JSON 섞어서 쓸 수 있어야 한다(차이를 정리하고, 왔다갔다 쓸 수 있도록)
  ex. 목록처리시 array를 json으로 바꿔쓰기, json을 array로 자유롭게 바꿔쓸 수 있게

*/