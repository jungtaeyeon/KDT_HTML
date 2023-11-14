// Async, Await
// then 함수를 쓰려면 Promise이어야 한다. - then은 Promise 프로토타입이 제공하는 함수이다.
// 여기서 프로토타입에 대한 정의는 뭘까??
// 어떤 객체에 대해서도 재사용이 가능한 객체인 것

// fetch함수는 BOM이라서 REPL로 실행이 불가능하다.
// console.log(fetch("http://www.omdbapi.com/?i=tt3896198&apikey=808c450&s=bodyguard"));

// 이 실습코드 작성 목적
// 코드 a는 1초 후 실행되는 비동기 코드 이다. 
// 그렇게(내 안에 setTimeout) 만들어진 비동기 코드가 실행되고 나서 b함수의 실행을
// 보장받으려면 then이라는 prototype 메소드를 사용해서 내용을 작성할 수 있다. 

const a = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  }) ;
};

const b = () => console.log(2);
// a() 함수는 리턴타입이 Promise 인스턴스 라서 Promise.prototype.then()을 호출할 수 있다.
a().then(() => b());
// b() 함수의 리턴터입은 Promise가 아니라서 then을 사용할 수 없다.
// b().then(() => a()); // Cannot read properties of undefined (reading 'then')