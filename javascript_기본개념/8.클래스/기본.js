// 객체를 쉽게 만드는 템플릿
// 고전적인 방법 - 생성자 함수라고 함
// 클래스 - ES6에서
class Fruit { // 리액트 활용되다가 훅으로 지원함 - 클래스 사용빈도가 좀 줄어듦 - 이유? this 불분명한 부분
  constructor(name, emoji){ // 생성자는 constructor 로!
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 안에서는 함수 선언 시 function 예약어 사용 불가능. Arrow function을 사용해라!
  display = () => { 
    console.log(`${this.name}:${this.emoji}`);
  }
} ///// end of class
// kiwi는 Fruit클래스의 인스턴스변수 이다.
const kiwi = new Fruit("kiwi", "🥝");
const tomato = new Fruit("tomato", "🍅");

console.log(kiwi);
console.log(kiwi["name"]);
console.log(kiwi.name);
tomato.display();
kiwi.display();