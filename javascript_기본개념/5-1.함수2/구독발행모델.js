// 함수 안에 함수 선언이 가능하다. - 일급함수 - 리덕스 -> FLUX아키텍쳐
// , 열거형 연산자 -> ES6 스프레드 연산자
const createStore = () => { // 함수 앞에 const, let 이 오면 그냥 에로우 펑션이랑 뭐가 다른지?./..
  let state; // 상태 관리
  let handlers = [];
  // 함수 안에 함수를 또 선언할 수 있다.
  const send = () => {

  }
  const subscribe = (handler) => { // 구독해줘
    handlers.push(handler); // 영속성, 유지, 기억해준다.
  }
  return {
    send, subscribe
  }
}
const store = createStore();
console.log(store);

store.subscribe(() => {
  console.log("subscribe");
});
store.send();