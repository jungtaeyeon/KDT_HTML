// 리턴
// return을 명시적으로 하지 않으면 자동으로 undefined 반환됨

function hap(a,b){

}
console.log(hap(1,2));

// return을 함수 중간에 만나면 함수가 종료된다?

function m(num){
  // 파라미터 받은 값에 대한 유효성 여부 체크 하는 코드 추가한다. - 초보가 아니다.
  if(num < 0){
    return; // 전달되는 값이 유효한지 여부를 미리 체크해 본다.
  }
  console.log(num); // 5만 출력 된다.
}

m(5)
m(-5)