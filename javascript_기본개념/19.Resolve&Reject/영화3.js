// OMDB - API 활용 실습
// Promise에서 에러 핸들링하는 방법
// fetchrk BOM제공하는 API라서 반드시 브라우저를 통해 확인해 본다.

const movieList = (movieTitle) => { // 파라미터 하나일 때는 () 생략 가능 ex) const movieList = movieTitle => {}
  return new Promise((resolve, reject) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=808c450&s=${movieTitle}`)
      .then(response => response.json())
      .then(json => {
        console.log(json.Response);
        if(json.Response === "False"){
          // 아래가 호출되면 catch로 간다.
          // . 앞에는 누가 있는걸까? - then으로 간다면 Promise가 있다.
          reject(json.Error)
        }
        resolve(json);
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        console.log("무조건 호출");
      })
  }); /////// end of Promise
}; ///// end of movieList

let loading = true;

movieList("avatar")//
.then(movies => console.log(movies))
.catch(error => console.log(error))
.finally(() => loading = false)