var express = require("express"); //외부 프레밍워크 가져올때
var router = express.Router(); //페이지 전환

/* GET home page. 
express가 Restful API를 지원해서 웹 서비스를 제공할 수 있게 해준다.(서블릿, JSP)
router는 페이지 전환 해주는 API로 - 화면 전환 처리 이벤트
get 함수의 첫 번째 파라미터가 요청에 대한 URL 주소이다.
URL주소마다 자바에서는 메소드를 설계(구현)해야 한다.

아래 get요청에 대한 첫번째 자리는 요청에 따른 URL 패턴 이름이다.
이름을 가지고 메소드를 나눈다. -> 프레임워크(스프링) 에서는 그렇게 해준다.
그래서 라우터가 눈에 보이지 않는 것 이다.

첫 번째 파라미터가(req -> request) 요청객체 이다. - 정보 담기, 사용자가 입력한 값을 받아옴, 요청이 유지되는 동안에 유지해줌
두 번째 파라미터는(res -> response) 응답객체 이다. - mime type - 브라우저 확장자는 의미없다. 페이지 이동처리를 한다. - 라우팅
확장자가 jsp이더라도 mime type이 application/json 으로 되어있다면 그냥 JSON이다.

함수로 나누어지지 않은 대신에 세 번째 인자인 next를 통해서 다른 서비스를 호출해준다 (무조건 세 번째 인자에 next를 넣어줘야 한다!)

express프레임워크 에서는 request와 response를 제공해줌
다른 서비스를 요청하기 위해서 next도 제공해줌
next를 통해서 다른 서비스 즉 다른 미들웨어에 연결도 가능하다.
Restful api 지원받을 수 있다. - 웹 서비스를 구현하고 제공할 수 있다.
express역할을 하는것이 서블릿 이다.

*/
router.get("/", function (req, res, next) {// app.js -> path 라이브러리 __dirname, views
  // render함수를 호출하면 화면을 그려줌. -> 그래서 파라미터 자리에는 반드시 html파일이 온다.
  // res.send("값") 함수를 호출하면 인자값이 전송된다. - 값이 JSON일 수도 있다.
  // 응답에 대한 결과가 꼭 html일 필요는 없다.
  // 화면 처리에 대한 엔진으로 ejs가 선택되었다.
  res.render("index", { title: "도서관리시스템", pageName: "home.ejs" });
});
router.get("/login", function (req, res, next) {// app.js -> path 라이브러리 __dirname, views
  res.render("index", { title: "로그인", pageName: "auth/login.ejs" });
});
router.get("/board", function (req, res, next) {// app.js -> path 라이브러리 __dirname, views
  res.render("index", { title: "글목록", pageName: "board/list.ejs" });
});
router.get("/board/write", function (req, res, next) {// app.js -> path 라이브러리 __dirname, views
  res.render("index", { title: "글쓰기", pageName: "board/write.ejs" });
});
router.get("/board/:id", function (req, res, next) {// app.js -> path 라이브러리 __dirname, views
  // 글을 읽어올 때는 id가 필요하니까  :id 를 붙여준다
  let id = req.params.id;
  res.render("index", {title: "상세보기", pageName: "board/read.ejs", id: id,});
});
router.get("/board/update/:id", function (req, res, next) {// app.js -> path 라이브러리 __dirname, views
  // 글을 읽어올 때는 id가 필요하니까  :id 를 붙여준다
  let id = req.params.id;
  res.render("index", {title: "수정하기", pageName: "board/update.ejs", id: id,});
});

module.exports = router;
