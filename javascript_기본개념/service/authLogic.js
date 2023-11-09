import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
class AuthLogic {
  constructor() {
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
} //end of AuthLogic
// import { AuthLogic } from "./service/authLogic.js"   ->  export뒤에 default가 있을 때는
// import 다음 좌중괄호 우중괄호 안됨
export default AuthLogic;
// import { loginGoogle, logintKakao, logout } from "./service/authLogic.js"
// 클래스의 주소번지 없이도(authLogic.loginGoogle 요렇게 앞에 authLogic.을 붙이지 않고) 호출하고(어디서? - html, js)싶다면
// 함수 선언 앞에 export를 붙이자
// 로그아웃 할 때 (html에서 버튼 클릭)할 때 호출되는 함수이다.
// 파라미터에는 auth(firebase.js -> app -> getAuth)가 필요하다.
// 파라미터로 auth를 넣어줘야 signOut호출이 가능하다.
// 이 때 에러가 발생(인증토큰이 없다 - 우리 가족이 아니다 - 너 인증없이 url로 접근하려는거야?)하면 
// 인증한 통로가 아닌 곳으로 오면 침입자로 인식 - catch로 빠짐 -> 403
// catch에 집히면 reject에서 처리 - 인터셉트
export const logOut = (auth) => {
  return new Promise((resolve, reject) => {
    auth.signOut().catch(e=>reject(alert(e+" : 로그아웃 에러 발생")))
    // 원서비스에서는 세션에서 관장해야 한다. - 구글서버측에서 담당 -> signOut()
    localStorage.removeItem("uid"); // uid를 쥐고 있다는 건 구글 서버로부터 정상적으로 토큰을 받았고 그 결과 uid를 갖게됨
    localStorage.removeItem("displayName"); // uid를 쥐고 있다는 건 구글 서버로부터 정상적으로 토큰을 받았고 그 결과 uid를 갖게됨
    localStorage.removeItem("email"); // uid를 쥐고 있다는 건 구글 서버로부터 정상적으로 토큰을 받았고 그 결과 uid를 갖게됨
    resolve();
  }) 
}
export const loginGoogle = (auth, googleProvider) => {
  console.log("loginGoogle 호출 성공");
  console.log(googleProvider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    console.log(result); // object Object - 안보임 - uid, displayName-relname, email
    console.log(JSON.stringify(result));
    const user = result.user;
    localStorage.setItem("uid", user.uid);
    localStorage.setItem("displayName", user["displayName"]);
    localStorage.setItem("email", user["email"]);
    resolve(user);
  }).catch((error) => reject(error));
  });
}; //end of loginGoogle
// 파이어베이스 인증에 수동으로 등록해둔 이메일과 비번으로 로그인 하기
export const loginEmail = (params) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, googleProvider)
      .then((result) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
}; //end of loginEmail
export const loginKakao = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: "카카오토큰을 받아올 URL주소 -카카오개발자 센터 긁어옴",
        params: params,
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //end of loginKakao
