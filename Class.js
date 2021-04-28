// 1. 선언적 방식
class A {}

console.log(new A());


// 2. class 표현식을 변수에 할당
const B = class {};

console.log(new B());

 
// 3. 클래스 생성자 constructor : 최초의 초기값을 객체 안으로 넣어주는 기능 제공
// (1) constructor는 class에서 함수 역할을 한다.
class C{
    constructor() {
       console.log('constructor');
    };
 
} 
console.log(new C());


// (2) 
class D{
    constructor(name,age) {
        console.log('constructor', name, age);
    }
}

console.log(new D('Mac', 17))



// 4. 멤버 변수 : 객체의 프로퍼티

// (1)
class E {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}
console.log(new E('Mac',21));


// class field 는 런타임 확인
//(2)
class F {
    name;
    age;
}
console.log(new F());


//(3)
class G {
    // 초기값 설정
    name = 'no name'
    age = 0;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new G('Gavin',82));


// 5. 멤버 함수
//(1)
class H {
    hello1() {
        console.log('hello1', this);
    }
    hello2 = () => {
        console.log('hello2', this);
    };
}

new H().hello1();
new H().hello2();

// 출력 후 확인해보면 this가 의미하는 것 : H { hello2: [Function: hello2] }


//(2)
class I {
    name = 'Cavin';

    hello(){
        console.log('Say Hi', this.name);
    }
}
new I().hello();


// 6. get, set 게터 세터

class J {
    _name = 'no name';

    set name(value){
        this._name = value + '!!!'; 
    }

    get name() {
        return this._name + '@@@';
    }

}

console.log('===============');

const j = new J();
console.log(j);

j.name = 'Youna';
console.log(j);

console.log(j.name);
console.log(j._name);


// readonly는 set 세터 함수 없이 get 게터 함수만 써서 readonly처럼 보이도록 한다. 
// => 이 경우에는  _name : 'no name'; 여기서 언더바는 외부에서 값을 바꾸지 말자는 의미가 된다. 값을 고정시키는.



// 7. static 변수, 함수 : 객체가 아니고, 직접 클래스를 통해서 변수와 함수 사용
//(1)
class K {
    static age = 55;    // static 변수
    static ageage(){      // static 함수
        console.log(K.age); // Class 내부에서 직접 접근
    }
}

console.log(K, K.age);
K.ageage();     // 함수 호출


//(2) static 함수는 객체에 속해있는 함수가 아니다.
//(3) static name 변수는 class 이름이다.
class L{
    static name = 'static name 변수는 class 이름이다.';
}
console.log(L);

