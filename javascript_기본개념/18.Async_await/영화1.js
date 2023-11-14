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

// movieList("avata"); // 함수 호출이 잘못됐다.
movieList("avatar")//
.then(() => {
  console.log("아바타");
  return movieList("avengers")
})
.then(() => {
  console.log("어벤져스");
  return movieList("frozen")
})
.then(() => {
  console.log("겨울왕국");
})