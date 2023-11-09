// 구조분해 할당
// 1.배열
const colors = ["red", "green", "blue"];
// ES5
const color0 = colors[0];
const color1 = colors[1];
const color2 = colors[2];
// ES6 - 구조분해 할당
const [c1, c2, c3] = colors;

console.log(`${color0}+${color1}+${color2}`);
console.log(`${c1}+${c2}+${c3}`);

// 2.객체
const dept = {
  deptno: 10,
  dname: "개발부",
  loc: "서울"
};
// ES5
console.log(dept.deptno);
console.log(dept["dname"]);

// ES6
const {deptno, dname, loc} = dept;
console.log(deptno);
console.log(dname);
console.log(loc);
