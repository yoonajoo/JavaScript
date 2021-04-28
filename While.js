// while 무한 루프 => break;문을 넣지 않으면 무한적으로 찍힌다. 

while(true){
    console.log('Hello?');
    if(Math.random() * 100 > 90){
        break;
    }
}

// do while 반복문 => do while은 최소 한번은 찍힌다. 조건을 나중에 확인하므로 
do {
    console.log('google');
} while(Math.random() * 100 <= 90);