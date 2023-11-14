// Async, Await

const a = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  }) ;
};

const b = () => console.log(2);

// a().then(() => b());  // 1 2 순서 보장받음


const wrapping = async() => {
  await a(); // await을 쓰면 뒤에 있는 비동기 함수의 실행을 기다려준다.
  b();
}

wrapping();