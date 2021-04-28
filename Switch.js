// switch 뒤 괄호 안에 있는 값이 무엇인지, 중괄호 안에 있는 코드들을 비교해서 실행
// 이중에 default: 뒤에 있는 문장은 항상 참이어서 실행되는 블럭 => 이전 문장에 break 걸어줘야함.

let n = 7;

switch(n) {
    default:
        console.log(n);        // 문장이 한 줄일때 중괄호 생략
}


// n 이 5로 나누었을때 나머지가 0인 경우에 실행되는 블럭 추가
// case '비교할 값' : 을 이용해서 맞으면 실행
// case 0: 인 경우와 default: 인 경우 두 블럭 모두 순서대로 실행이된다.  
// 해당 블럭이 실행된 후 다음 블럭을 거치지 않고 switch 문을 나가고 싶다면 case 문 안에서 break;를 실행.

switch(n % 5){
    case 0 : {
        console.log('5의 배수 입니다.');
        break;
    }
    default :
        console.log(n);
}


// break와 case 문의 순서를 잘 조정하여, 원하는 코드를 만들어 낼 수 있도록 제대로 이해해야 함.

switch(n % 5){
    case 0 : {
        console.log('5의 배수 입니다.');
        break;
    }
    case 1 :
        case 2:
            case 3: 
                case 4:
                    console.log('5의 배수가 아닙니다.');
    default :
    console.log(n);
}