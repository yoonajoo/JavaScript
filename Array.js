// 표준 내장 객체 : 객체가 이미 runtime 환경에 만들어져있는 것. 
// ex => Object, Function, Boolean, Array ... 등등

// 표준 내장 객체인 Array 사용법

//(1) 나열을 통한 배열
const a = new Array('red', 'blue', 'black'); // = ['red','blue', 'black'] 대괄호와 같은 값을 갖는다. 
console.log(a, typeof a);

//(2)
console.log(a instanceof Array);
console.log(a instanceof Object);

//(3) => (1)과 같은 값을 갖는다. 
// 리터럴(문자그대로 표현) 사용
const b = ['red', 'blue', 'black'];
console.log(b, typeof b);

//(4)
console.log(b instanceof Array);
console.log(b instanceof Object);


// 2. slice(n,z) => array에 있는 함수이며, 'n번째'부터 'z개'를 짤라오겠다는 뜻.
console.log(b.slice(0,2)); // b의 0번째부 2개 짤라오겠다.
console.log(b.slice(0,1));





