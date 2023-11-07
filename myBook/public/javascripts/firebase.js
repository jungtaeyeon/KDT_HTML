import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
// import { initializeApp } from "firebase/app"; 로컬에 firebase 설치되어 있을 때 사용하기.

const firebaseConfig = {
  apiKey: 'AIzaSyC7QEJjivA4DLjOmwgKwbkTCN3FSmSkXR4',
  authDomain: 'jty20231106.firebaseapp.com',
  projectId: 'jty20231106',
  storageBucket: 'jty20231106.appspot.com',
  messagingSenderId: '71039890999',
  appId: '1:71039890999:web:b45c10164c7490ba9271b2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
