var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("users/join", function (req, res, next) {
  res.render("index", { title: "회원가입", pageName: "users/join.ejs" });
});
router.get("/cart", function (req, res, next) {
  // res.send(); 를 하면 파라미터 문자열이 출력되고 나는 장바구니 화면을 출력할 거니까 render 함수 호출함
  res.render("index", { title: "장바구니", pageName: "users/cart.ejs" });
});
router.get("/mypage", function (req, res, next) {
  res.render("index", { title: "마이페이지", pageName: "users/mypage.ejs" });
});

module.exports = router;
