// 비교

const a = 1
const b = 2
const c = '2'

console.log(a==b); // false
console.log(a!=b); // true

// 일치
console.log(a===b); // false
console.log(b==c);  // true
console.log(b===c); // false

// 불일치
console.log(b!==c); // true

console.log(a>b);
console.log(a<=b); // 작거나 같니? 합집합 - 둘 중 하나만 맞아도 참이다