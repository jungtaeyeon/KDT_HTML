// 아래는 동기인가? 비동기인가??
// 자바스크립트는 순서대로 처리가 된다. (defer 강조 - 보류(지연))
// 흐름을 바꾼다(진지) - 논리적 오류 - 트러블 슈팅
// DOM Tree(브라우저) - DOM API를 통해서 접근이 가능하다.
const hap = (a, b) => {
  setTimeout(() => {
    // return, 실행문-제어문
    return a + b;
  }, 1000); // 1초동안 지연이 발생함
};

const x = hap(1, 2);
const y = x;
console.log(x); // undefined
console.log(y); // undefined
// hap(1,2)가 호출된 후 reurn이 정의되기 전 undefined가 반환되고 1초 후 return a + b; 가 진행됨
// 그래서 x, y는 undefined가 떨어진다.

/* 
  setTimeout(콜백함수, 지연되는 시간-ms단위)

  비동기적인 상황을 마주하기 전에 대비를 해 본다.
  html + 서블릿
  html + jsp
  html + 지연발동 + 스프링 + 오라클
  html + javascript + 스프링
*/
