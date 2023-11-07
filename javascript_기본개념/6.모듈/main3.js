setTimeout(async () => {
  const temp = await import("./main1.js");
  console.log(temp);
},3000);

/* 
  자바스크립트는 기본적으로 동기적인데
  만일 꼭 비동기적으로 처리를 해야할 때 setTimeout함수를 사용하세요.
  async와 await은 커플이다. 꼭 같이 와야한다.

  어떨 때 사용하나??
  Front-End: ReactJS, UI솔루션 - 클라이언트 사이드
  Back-End: Java - 서버사이드(지연발생 - 출처가 다름(CORS이슈)) - 비동기 처리를 해야한다. -> 자바는 비동기가 가능함
  그런데 이것을 받아주는 자바스크립트는 불가능함. 그걸 비동기처럼 하려할 때 사용한다. 
  ㄴ http://localhost:9000/dept/getDeptList.jsp
*/
