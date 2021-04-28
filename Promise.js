// Promis 개체, 객체
// => es6 부터 javascript 표준 내장 객체로 추가됨, es6 를 지원하는 브라우저나 Node.js에서 전역에 있는 Promis를 확인할 수 있다.

console.log(Promise);

 // 1. Promise 란...

 // 생성자를 통해서 프로미스 객체를 만들 수 있다 (비동기)
 // => 생성자의 인자로 executor 함수 이용. 
 // => executor 함수는 resolve 와 reject를 인자로 가진다.
 // (resolve, reject) => {바디} 
 // resolve와 reject는 함수이다. ----> resolve(), reject()
 
 // (1) 기본 구성
 new Promise(/* executor => */ (resolve, reject) => {});

 // (2) 생성자를 통해서 프로미스 객체를 만드는 순간 Pending(대기) 상태라고 한다. 
 new Promise((resolve, reject) => {}); // pending 상태

 // (3) executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 된다. 
 // (4) executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태가 된다. 



 // 2, p 라는 프로미스 객체를 1000ms 후에 fulfilled 되게 해보기.
 new Promise((resolve,reject) => {
    /* pending 상태에 돌입 */
    setTimeout(() => { // setTimeout 함수 : 설정ms 후에 실행되도록하는 타이머 함수
        resolve(); /*fulfilled 상태 돌입 */
    }, 1000); // 1000ms 후에 resolve() 함수를 실행하여 fulfilled 상태에 돌입
 });




 