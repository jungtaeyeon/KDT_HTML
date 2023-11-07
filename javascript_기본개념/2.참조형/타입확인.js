const a = 123;

console.log(typeof a);

console.log(typeof '이순신'); // string (소문자)
console.log(typeof '이순신' == 'string'); // true
console.log(typeof '이순신' === 'String'); // false
console.log(typeof undefined === 'undefined'); // true
console.log(typeof null  == 'object'); // true
console.log(typeof [] == 'object'); // true
console.log(typeof {} == 'object'); // true
console.log(typeof function(){} == 'function'); // true

console.log([].constructor === Array); // true
console.log({}.constructor === Object); // true