/* 비동기를 다루는 또다른 방법인 Async-Await (다른 하나는 Promise)
    비동기 처리를 밑으로 흘러갈 수 있게 하는 것이 가장 큰 장점

(1) async-await은 Promise를 기반으로 하고 있다.

(2) async function : 이름처럼 함수(function) 앞에 async를 붙이는 것

(3) 형태
    1.  asynce function 함수이름(){}
    2.  const 함수이름 = async() => {} 
*/




// 1. Promise 객체를 리턴하는 함수
    function a(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ms);
            }, ms);
        });
        
    }

// Promise 객체를 이용해서 비동기 로직을 수행할 때
    a(1000).then((ms) => {
        console.log(`(1) ${ms} ms 후에 실행된다.`);
    });
 

// 2. await 를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다. 
    function b(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ms);
            }, ms);
        });   
    }

    (async function main() {
        const ms = await b(1500);
        console.log(`(2) ${ms} ms 후에 실행된다.`);
    })();


// 3. Promise 객체가 rejected 된 경우의 처리를 위해 "try catch" 를 이용한다. 
    function c(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('(3) Reason!!!'));
            }, ms);
        });   
    }

    (async function main() {
        try {
            const ms = await c(2000);
        } catch (error) {
            console.log(error);
        }
    })();
    //main(); 


// 4. async function 에서 return 되는 값은 Promise.resolve 함수로 감싸서 리턴된다. 
    

    //(4-1) reject 사용시 resolve만 되므로 reject 사용시 Youna만 return 된다.

    function d(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('(4-1) !!!Reason'));
            }, ms);
        });   
    }

    async function asyncD() {
        return '(4-1) Youna';
    }

    (async function main() {
        try {
            const name = await asyncD();
            console.log(name);
       
        } catch (error) {
            console.log(error);
        }
    })();


    /* (4-2) resolve 진행시 : 맨 밑 main 함수에서 asyncE를 불러서 asyncE에 갔다가 
    -> p로 가서 resolve 될때까지 기다렸다가 -> resolve된 후에 return */

    function e(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ms);
            }, ms);
        });   
    }

   async function asyncE() {
        const ms = await e(2500);
        return '(4-2) Youna : ' + ms;
    }

    (async function main() {
        try {
            const name = await asyncE();
            console.log(name);
    
        } catch (error) {
            console.log(error);
        }
    })();

    //(4-3) try에 있는 문장이 실행이 안되면 catch로 간다.

    function f(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve(ms);
                reject(new Error('(4-3) Error is Error!!!')); // 3번째 -> reject이므로 catch(error)로 이동
            }, ms);
        });   
    }

   async function asyncF() { // 2번째
        const ms = await f(3000);
        return '(4-3) Youna : ' + ms;
    }

    (async function main() {
        try {   // 1번째 실행
            const name = await asyncF();
            console.log(name);
    
        } catch (error) {
            console.log(error);
        }
    })();



/*  5. try-catch 이후의 마지막 실행 "finally" 
    (1) try 찍히고 finally 찍히거나  (2) catch 찍히고 finally 찍힘. */

    function g(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve(ms);
                reject(new Error('(5) Five is Error!!!'));  
            }, ms);
        });   
    }

    async function asyncG() {  
        const ms = await g(3500);
        return '(5) Youna : ' + ms;
    }

    (async function main() {
        try {    
            const name = await asyncG();
            console.log(name);

        } catch (error) {
            console.log(error);
        } finally {
            console.log('(5) Game Over');
        }
    })();


// 6. 연속된 Promise 처리 VS 연속된 async await 처리 비교

    function h(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                 resolve(ms);
                // reject(new Error('(5) Five is Error!!!'));  
            }, ms);
        });   
    }

    // 6-1. 연속된 Promise 처리 (체이닝 처리) : 만들어서 리턴해서 체이닝

    h(1500)
            .then(() => h(1500))
            .then(() => h(1500))
            .then(() => {
        console.log('(6-1) 4500 ms 후에 실행');
    });

   // 6-2. 연속된 async await 처리 : 한줄 한줄이 비동기가 끝나면 진행

   (async function main() {
       await h(1500);
       await h(1500);
       await h(1500);
       console.log('(6-2) 4500 ms 후에 실행');
    })();


// 7. Promise.all VS Promise.race

    function i(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ms);
            }, ms);
        });   
    }

    // 7-1. Promise.all 함수
    (async function main(){
        const results = await Promise.all([i(1000), i(2000), i(3000)]);
        console.log(results);
    })();
    // 3000 ms 안에 모든 값(all)이 출력된다.


    // 7-2. Promise.race 함수
    (async function main(){
        const result = await Promise.race([i(1000), i(2000), i(3000)]);
        console.log(result);
    })();    
    // 가장 먼저 resolve되는 1000ms 만 출력된다.
