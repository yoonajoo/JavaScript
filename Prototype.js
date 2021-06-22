// 1. prototype 상속

//(1)

function People(){}

// Person 이라는 함수의 prototype으로 doctor라는 함수를 만든다. 
People.prototype.doctor = function(){
    console.log('doctor');
};

function Korean(region){
    this.region = region;
    this.where = function(){
        console.log('where', this.region); 
    };

}
 

// Korean의 prototype을 People의 prototype으로 바꾼다. 
Korean.prototype = People.prototype;

const k = new Korean('Seoul');
k.doctor();
k.where();



//(2) instanceof 확인해보기
console.log(k instanceof Korean);
console.log(k instanceof People);
console.log(k instanceof Object);


 

console.log('=======2.=======')
// 2. 객체 리터럴 : {}에 직접 써 넣음으로써 객체로 만드는 것. ex) const a = {}; => a가 객체가 됨. 

//(1) 객체
const a = {}; // a가 객체가 되었다. 빈 객체이므로 {} 가 출력된다. 

console.log(a, typeof a);


//(2) 객체
const b = {
    job: 'developer'
};
console.log(b, typeof b);

//(3) 객체
const c = { // this는 이 객체 전역을 의미한다. 
    job: 'teacher',
    food1(){
        console.log('chicken', this);
    },
    food2: function() {
        console.log('apple', this);
    },
    food3: () => { 
        console.log('cookie', this); // 문제되는 코드! arrow function 은 this 사용이 안된다. 
    }
};

c.food1();
c.food2();
c.food3();







// 3. prototype

// (1)
function Person(name,age){
    this.name = name;
    this.age = age;
    // this.hello = function(){
    //     console.log('hello', this.name, this.age);
    // };
}

// 이렇게 빼서 Person 이라는 함수의 prototype으로 hello 함수를 만들 수 있다. 
Person.prototype.hello = function(){
    console.log('hello', this.name, this.age);
}


const p = new Person('Musk', 18);
p.hello();



// (2)
console.log(p.toString());
console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.hello); // hello는 객체로 사용되야지 출력 가능
console.log(Person.prototype.hello);   



// (3)
console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);


// (4)
// instanceof : 어떤것으로부터 나온 instance 인가?
console.log(p instanceof Person); // p는 Person 생성자 함수로 부터 나온 instance 인가? 
console.log(p instanceof Object); // Object는 기초 내장 객체이므로 Person 또한 Object로 부터 prototype chain을 받아왔다. 


// javascript는 태생적으로 prototype을 이용한 상속방식을 채택했다.