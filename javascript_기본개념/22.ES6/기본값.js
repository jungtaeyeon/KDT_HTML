// Default parameters
// 기본값 매개변수
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters

const msgPrint = (msg) => {
  if(msg == null) {
    msg = "default message";
  }
  console.log(msg);
}

msgPrint("hello"); // hello
msgPrint(); // default message

{ // 위와 중복된 이름 선언으로 {} 안에 감싸줌 
  // 자바와 다르게 파라미터 자리에 초기화 가능하다.
  const msgPrint = (msg = "default message") => {
    console.log(msg);
  }

  msgPrint("hello"); // hello
  msgPrint(); // default message

}