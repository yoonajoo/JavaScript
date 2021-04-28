// Class 상속(Extends)



// 1. extends : 클래스의 상속 기본 
// (1) 자식 class는 부모 class의 멤버변수, 멤버함수를 상속받는다
class Parent {
    name = 'Joo';

    family(){
        console.log('Family Member', this.name);
    }
}

class Child extends Parent {};

const m = new Parent;
const n = new Child;    // child 클래스는 비어있지만 상속받아서 parent 내용이 출력된다.
console.log(m,n);

// 상속받은 Child는 Parent class의 함수를 직접적으로 받을 수 있다.
n.family();
n.name = 'Kim';
n.family();




// 2. override : 부모에서 구현된 함수나 변수가 자식에게 똑같이 구현되는 것을 overriding이라고 함. 
// => 자식(클래스의 상속 멤버)이 부모의 변수나 함수를 덮어 쓰거나 추가하는 것.  
//상속시 자식이 만들어놓은 함수가 부모에게 덮어씌어지는 결과
class Parent2 {
    name = 'Harry';

    cousin(){
        console.log('cousin name', this.name);
    }
}

class Child2 extends Parent2{
    age = 4;

    cousin(){
        console.log('cousin name', this.name, this.age);
    }
}
const p = new Parent2();
const q = new Child2();

console.log(p,q);

q.name = 'Anna';
q.cousin();




// 3. super : 클래스의 상속 생성자 함수 변경
// => 자식이 constructor에 뭔가를 추가하려고할때 super를 꼭 호출해야한다. 
// ** constructor : 최초의 초기값을 객체 안으로 넣어주는 기능 제공
class Parent3 {
    name;

    constructor(name){
        this.name = name;
    }
    
    brother() {
        console.log('brother name is', this.name);
    }
}
class Child3 extends Parent3 {
    age;

    constructor(name, age){
        // name은 parent 에서 온것이므로 constructor에 추가하려면 super로 꼭 호출해줘야함.
        super(name);
        this.age = age;
    }

    brother(){
        console.log('brother name is', this.name, this.age);
    }
}

const y = new Parent3('kb');
const z = new Child3('kb',22);

console.log(y,z);
z.brother();



// 4. static : 클래스의 상속 static 상속
// ** static 변수, 함수 : 객체가 아니고, 직접 클래스를 통해서 변수와 함수 사용

// static도 상속이 된다!
class Parent4 {
    static age = 20;
}

class Child4 extends Parent4 {}

console.log(Parent4.age, Child4.age);

 