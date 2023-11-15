function Emp(fName, lName){
  this.fName = fName; // 자바와는 다르게 (선언부에 선언할 수 없다. - class껍데기 없다) 전역변수이다.
  this.lName = lName;
  console.log(this);
}
// arrow function과 function으로 함수를 정의할 때 this가 달라진다. - 주의
Emp.prototype.printName = function() {
  console.log(this);
  return `${this.fName} ${this.lName}`
}

Emp.prototype.see = function(pic){
  console.log(pic); // 노울사진 출력 , 사진 출력
}

const james = new Emp("초보", "나") // 생성자 함수 라고 함
const king = new Emp("신입", "김")

console.log(james.printName());
console.log(king.printName());

james.see("노을사진")
king.see("사진")