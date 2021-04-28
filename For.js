// 1. for
//(1) 초기화 하면서 선언된 변수를 중괄호 안 반복 블럭에서 사용할 수 있음.

for(let i=0, j=5; i<5; i++ ){
    console.log('안녕하세요', i, j);
}

for(let i=0, j=2; i<5; i++, j=j*j){
    console.log('안녕히가세요', i,j);
}

//(2) break;
// 반복문을 '즉시 종료'하고 싶을 떄는 반복되는 블럭 안에서 break; 를 실행하면 가능.
for(let i=0; i<7; i++){
    console.log(i);
    if(i>4){
        break;
    }
    console.log('안녕하세요',i);
}

// (3) continue;
// 반복되는 블럭 안에서 continue;를 만나면 거기서 해당 블럭은 종료되고 다음 반복문으로 올라간다.
// continue;를 만나면 다음 반복문을 실행하려 올라가며 밑줄 코드는 실행되지 않는다. 
for(let i=0; i<5; i++){
    console.log(i);
    if(i<2){
        continue;
    }
    console.log('고니찌와입니다.',i);
}


// (4) for 무한 루프 => 조건 없이 세미콜론 두개만 있음
// Math.random() : 함수는 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환하며, 이 값은 사용자가 원하는 범위로 변형할 수 있다. 
// 랜덤함수에 의해 니하오가 찍힐 확률은 랜덤이다.
// break가 없다면 니하오는 무한적으로 찍힌다.
for(;;){
    console.log('니하오');
    if(Math.random() * 100 > 90){
        break;
    }
}



// 2. for of
// iterable 객체에 사용. 배열을 사용하면 요소 하나하나 반환.
// iterable 의 의미는 member를 하나씩 차례로 반환 가능한 object를 말한다

for (const i of [1,2,3,7,8,13,5]){
    console.log(i);
}


// 3. for in
// 모든 프로퍼티에 사용 가능 :'Property' 는 속성 이란 뜻으로, 객체 내부의 속성 을 의미
// test가 같이 출력되는 것처럼 개발자가 의도하지 않는 출력이 나올 수 있음을 주의.

Object.prototype.test = function(){};

for(const i in {a:1, b:2, c:3}) {
    console.log(i);
}
