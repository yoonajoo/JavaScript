// function

// 1. function hello(){} : 선언적 방식 => hoisting 현상이 일어나지 않는다. 
// (1) 이름이 hello인 함수를 선언
function hello(){
    console.log('hello');
}

console.log(hello, typeof hello);

// (2) 함수의 매개변수
// 함수를 호출할 때 값을 지정
function goodbye(name){
    console.log('goodbye', name);
}
 

// (3) 함수의 리턴
// 함수를 실행하면 얻어지는 값
function cheer(name){
    return `cheer ${name}`;
}

console.log(cheer('ladarious'));



// 2. const hello = function(){} : 함수 이름없이 function을 만든 후에, 만들어진 것을 특정 변수에 담아두는 방식
// (1) 이름이 hello1인 함수를 선언

const hello1 = function(){
    console.log('hello1');
}

console.log(hello1, typeof hello1);

// (2) 함수의 매개별수
// 함수를 호출할 때 값을 지정
const goodbye1 = function(name){
    console.log('goodbye', name);
}



// (3) 함수의 리턴
// 함수를 실행하면 얻어지는 값
const cheer1 = function(name){
    return `cheer1 ${name}`;
}

console.log(cheer1('LaDarious'));



// 3. const hello = new Function();
// => new Function(/* 인자1, 인자2, ... , 함수의 바디 */);

const sum = new Function('a','b','c','return a+b+c');
console.log(sum(101,2,7));


// 4. arrow 함수 :  () => {}
// 선언적 방식으로 쓸 수 없으며, 항상 익명 함수이다. 

// (1) arrow 함수를 만들어 peach 변수에 할당
const peach = () => {
    console.log('peach');
};

// (2) 함수의 매개변수
// 함수를 호출할 때 값을 지정

// 매개별수가 하나일 때, 괄호 생략 가능
const peach2 = fruit => {
    console.log('peach2', fruit);
};

const peach3 = (fruit,color) => {
    console.log('peach3', fruit, color);
};
console.log('return 값이 없으므로 undefined!');
console.log(peach3());

// (3) 함수의 리턴
// 함수를 실행하면 얻어지는 값
const peach4 = (fruit, color) => {
    return `peach4 ${fruit, color}`;
}
console.log(peach4,'grape', 'purple');

// 리턴을 더 간단하게 쓸 수 있음
const peach5 = fruit => `peach5 ${fruit}`;
console.log(peach5,'grape');




// 5. 생성자 함수 : new 함수 ();
// (1) 생성자 함수를 이용하여  새로운 객체를 만들어 내는 방법

// 함수 생성
function Person(name, age) {
// console.log(this); 가 있다
  this.name = name;
  this.age = age;
}
// 객체 생성
const p = new Person('Mark',44);
console.log(p, p.name, p.age);

// 객체는 여러개 생성 가능하다
const b = new Person('Ladarious',22);
console.log(b, b.name, b.age);

const a = new Person('youna',25);
console.log(a);



// (2) 함수를 호출하면 함수를 만들어서 리턴

function plus(base){
    return function(num){
        return base + num ;
    };
}

const plus5 = plus(5); // 5가 base에 들어가 return 5+num 인 함수가 탄생
console.log(plus5(10));


const plus8 = plus(8);
console.log(plus8(10));


// (3) 함수를 인자로 하여 함수를 호출

function hello(callback) {
    console.log('hello');
    callback();
}

hello(function() {
    console.log('콜백');
});



