// prototype

const fruits = ["🍎", "🍅", "🥝"];
const fruits2 = new Array("🍎", "🍅", "🥝");

console.log(fruits);
console.log(fruits2);
console.log(fruits2.includes("🍎")); // 사과가 존재해서 true
console.log(fruits2.includes("💚")); // 존재하지 않아서 false

Array.prototype.method = function () {
  console.log(this);
}
fruits2.method();

const arr = [];
arr.method(); // [] 출력