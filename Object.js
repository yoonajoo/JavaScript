// 1. 생성자 함수
// (1)

function A(){}

const a = new A();
console.log(a, typeof a); // new를 통해 생성한 객체 출력
console.log(A());   
// 생성자 함수가 아닌 A function함수를 실행하여 return 값을 가져오는 것.
// return 값이 없으므로 undefined 이 나온다. 




console.log('===========(2)=============')
// (2) 생성하면서 데이터 넣기
function B(name, age){
    console.log(name, age);
}
// 인자를 넣지 않으므로 undefined undefined가 나온다.
const b = new B();
const c = new B ('Racheal', 11); 
console.log(B()); 





console.log('===========(3)=============')
// (3) 값을 속성으로 넣기
// new D(); => {}
// function D(){ 이 안에 값이 있어야 } 출력값이 나온다.

// 생성자 함수 D
function D(){
    this.name = 'David';
}

const d = new D(); 
console.log(d);




console.log('===========(4)=============')
// (4) 함수를 속성으로 넣기 (함수명:animal)
function E(){
    this.animal = function(){
        console.log('tiger');
    };
}
new E().animal();




// 2. new Object : 객체로 만들어 버리기~
const h = new Object; // 변수h는 new object() 에 의해서 객체가 된다!
console.log(h, typeof h);


const i = new Object(true);
console.log(i, typeof i);


const j = new Object({age: 25, name: 'Kevin'});
console.log(j, typeof j);




