// 1 2 3을 순서대로 출력하는 문장을 작성해 보시오

/* console.log(1); // 첫 번째로 1 출력

setTimeout(() => {
  console.log(2); // 세 번째로 2 출력
}, 2000);

console.log(3); // 두 번째로 3 출력
*/

// 위 코드를 콜백함수를 사용해 1 2 3 순서대로 출력하게 해보자

console.log(1); 

const second = (cback) => {
  setTimeout(() => {
    console.log(2); 
    first();
  }, 2000);
};

const first = () => {
  console.log(3); 
};

second(first);
// 1 출력 > 2초 후 2 3 출력