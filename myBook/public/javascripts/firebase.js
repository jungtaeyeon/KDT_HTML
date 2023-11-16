import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// initializeApp함수는 firebase-app.js에서 제공하는 함수 입니다.
// import { initializeApp } from "firebase/app"; 로컬에 firebase 설치되어 있을 때 사용하기.
// type=module 을 사용해야함
// 여기 생성된 객체는 어떻게 사용되죠?

// 둘 - 파이어베이스 콘솔에서 mybook이라는 이름으로 프로젝트를 생성하면 키와 기타 정보들을 제공해준다.
const firebaseConfig = { // 나는 오브젝트 이다. - 클래스는 아니다.
  // 객체 - 키: 값
  // AIzaSyDMBZeT1HOEi_puog_U6goM2Mea1OtLuik
  apiKey: "AIzaSyBbKMZh-XdiAUn-45V-BMkZMcCVXFso1YM",
    authDomain: "mybook-28ad3.firebaseapp.com",
    projectId: "mybook-28ad3",
    storageBucket: "mybook-28ad3.appspot.com",
    messagingSenderId: "419512552070",
    appId: "1:419512552070:web:72f810fe9d7058bbde5f07"
};

// Initialize Firebase - 파이어베이스 프로젝트를 활용하여 웹 서비스를 제공받기 위한 초기화 작업이다.
// 앞에 export를 붙여야 외부에서 사용이 가능하다.(ES6 모듈)
// <script type="module"> </script>
export const app = initializeApp(firebaseConfig); // 초기화 - 인증 - 서버측 요청 - 응답(토큰값을 쥔다)
