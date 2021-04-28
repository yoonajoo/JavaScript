// if () {} else if () {} else {}

const n = 71;

if (n % 4 === 0){
    console.log('n은 4의 배수 입니다.');
} else if (n % 5 === 0){
    console.log('n은 5의 배수 입니다.');  
} else {
    console.log('n은 4의 배수도 아니고, 5의 배수도 아닙니다.');
}


// n이 4의 배수이면서, 5의 배수이면 뭐라고 출력 될까?

if(n % 4 === 0 && n % 5 === 0){
    console.log('n은 4의 배수이면서 5의 배수입니다. ')
} else if(n % 4 ===0){
    console.log('n은 4의 배수 입니다.');
} else if(n % 5 ===0){
    console.log('n은 5의 배수 입니다.');
} else {
    console.log('n은 4의 배수도 아니고, 5의 배수도 아닙니다.');
}


// n % 4 === 0 과 n % 5 === 0 의 값은 여러번 반복되므로, 변수나 상수에 넣습니다.

const multipleOfFour = (n % 4 === 0);
const multipleOfFive = (n % 5 === 0);

if(multipleOfFour && multipleOfFive){
    console.log('n은 4의 배수이면서 5의 배수입니다. ')
} else if(multipleOfFour){
    console.log('n은 4의 배수 입니다.');
} else if(multipleOfFive){
    console.log('n은 5의 배수 입니다.');
} else {
    console.log('n은 4의 배수도 아니고, 5의 배수도 아닙니다.');
}
