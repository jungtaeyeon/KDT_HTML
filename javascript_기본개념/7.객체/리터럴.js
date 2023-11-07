// 객체를 생성하는 방법(Object create)
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let sonata = {
  // key: value
  carName: "2024년형 소나타",
  carColor: "검정",
  wheelNum: 4
}

// 속성, 데이터에 접근하는 방법
console.log(sonata.wheelNum);
console.log(sonata["carColor"]);

// 속성 추가가 가능하다.
sonata.speed = 30;
console.log(sonata.speed);
console.log(sonata["speed"]);

// 속성 삭제가 가능하다.
delete sonata.speed;
console.log(sonata.speed);