const a = () => {
  console.log('A');
}

const b = (c) => {
  console.log(c); // 함수일까 아니면 값일까?
  c() // 함수 a가 c가 됐기때문에 위의 a함수가 호출됨.
}

b(a)