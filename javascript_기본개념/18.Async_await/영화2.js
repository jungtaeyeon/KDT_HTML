// OMDB - API 활용 실습

const movieList = (movieTitle) => { // 파라미터 하나일 때는 () 생략 가능 ex) const movieList = movieTitle => {}
  return new Promise(resolve => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=808c450&s=${movieTitle}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        resolve();
      });
  });
};

// 주의사항
// async와 await은 한 쌍 이다.
// console.log 앞에는 await을 사용할 수 없다 ! ! ! 
// 왜?? 콘솔로그는 Promise 인스턴스를 반환하지 않으니까.. 그래서 안된다.
// async를 붙이는 자리는 콜백함수 자리이다.
// Promise를 사용한 구문을 async와 await으로 변경하기 위해서는 
// await을 감싸는 함수를 선언할 것

const wrapping = async() => {
  await movieList("avatar")
  console.log("아바타");
  await movieList("avengers")
  console.log("어벤져스");
  await movieList("frozen")
  console.log("겨울왕국");
}
// 테스트 주의사항 -> fetch함수는 BOM API 이라서  REPL로는 확인 불가능함.
// 그러니 html문서를 통해 실행할 것 - Open with Live Server

wrapping();