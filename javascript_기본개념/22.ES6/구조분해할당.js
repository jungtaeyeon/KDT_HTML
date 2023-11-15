// 구조분해할당
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Object

const Sonata = {
  carColor: "블랙",
  speed: 30,
};

const carColor1 = Sonata.carColor;
console.log(carColor1);
const speed1 = Sonata.speed;
console.log(speed1);

const {carColor, speed} = Sonata;
console.log(carColor);
console.log(speed);

// 다른 이름으로 정의해서  사용하기
{ // carColor, speed 이름이 겹쳐서 감싸놨다.
  const {carColor: myColor, speed: mySpeed} = Sonata;
  console.log(myColor);
  console.log(mySpeed);
}

const fruits = ["토마토", "키위", "사과"];
const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

{
const [first, second, third] = fruits;
console.log(first, second, third);
}