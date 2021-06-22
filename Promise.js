// Promise 개체, 객체
// => es6 부터 javascript 표준 내장 객체로 추가됨, es6 를 지원하는 브라우저나 Node.js에서 전역에 있는 Promise를 확인할 수 있다.


console.log(Promise);

 // 1. Promise 란... 

 console.log('Promise를 사용하면 비동기적 상황에서 코드를 실행하게 만든다.');

 // 생성자를 통해서 프로미스 객체를 만들 수 있다 (비동기)
 // => 생성자의 인자로 executor 함수 이용. 
 
 // executor 함수는 resolve 와 reject를 인자로 가진다.
 // (resolve, reject) => {바디} 
 // resolve와 reject는 함수이다. ----> resolve(), reject()
 
 // (1) 기본 구성
 new Promise(/* executor => */ (resolve, reject) => {});

 // (2) 생성자를 통해서 프로미스 객체를 만드는 순간 Pending(대기) 상태라고 한다. 
 new Promise((resolve, reject) => {}); // pending 상태

 // (3) executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 된다. 
 // (4) executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태가 된다. 



 // 2. p 라는 프로미스 객체를 1000ms 후에 fulfilled 되게 해보기.
    new Promise((resolve,reject) => {
        /* pending 상태에 돌입 */
        setTimeout(() => { // setTimeout 함수 : 설정ms 후에 실행되도록하는 타이머 함수
            resolve(); /*fulfilled 상태 돌입 */
        }, 1000); // 1000ms 후에 resolve() 함수를 실행하여 fulfilled 상태에 돌입
    });


 // 3. P 라는 프로미스 객체가 fulfilled 되는 시점에, p.then 안에 설정한 callback 함수가 실행된다.
    

    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(); /* fulfilled  => then()으로 넘어간다.*/
        }, 1000);
    });

    p.then(/* callback */ () => {
        console.log('(3)1000ms 후에 fulfilled 완료시 실행되는 코드');
    });


/*  (현업에서 객체를 만들어 사용하는 3번보다 4번을 주로 사용)
    4. then 을 설정하는 시점을 정확히하고, 
    함수의 실행과 동시에 프로미스 객체를 만들어서 pending이 시작되도록 하기 위해
    프로미스 객체를 생성할면서 리턴하는 함수(q)를 만들어, 함수(q) 실행과 동시에 then을 설정합니다. 
*/

    function q(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(); /* fulfilled  => then()으로 넘어간다.*/
            }, 1000);
        });
    }

    q().then(() => {
        console.log('(4)1000ms 후에 fulfilled 완료시 실행되는 코드');
    });



// 5. 마찬가지로 프로미스 객체가 rejected 되는 시점에 k.catch 안에 설정한 callback 함수가 실행됩니다. 
/* 
    [(1) Promise에서 then은 resolve,reject 다 받는다]
    [(2) catch는 reject만 받는다.]
      
*/
   
    function k(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(); /* rejected*/
            }, 1000);
        });
    }

    k().then(() => {
        console.log('(5-1)1000ms 후에 fulfilled 완료시 실행되는 코드');
    }).catch(()=> {
        console.log('(5-2)1000ms 후에 rejected 완료시 실행되는 코드');         
    });



/* 6. 데이터 넘기기 (중요!)
executor의 resolve 함수를 실행할 때 인자를 넣어서 실행하면, 
then의 callback 함수의 인자로 받을 수 있습니다. 

    [resolve 와 message] 

    resolve('hello');
    then((message) => {...})
*/

function t(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello world'); 
        }, 1000);
    });
}

t().then((message) => {
    console.log('(6-1)1000ms 후에 fulfilled 완료시 실행되는 코드',message);
}).catch(()=> {
    console.log('(6-2)1000ms 후에 rejected 완료시 실행되는 코드');         
});


/* 7. 마찬가지로 executor의 reject 함수를 실행할 때 인자를 넣어 실행하면,
catch의 callback 함수의 인자로 받을 수 있습니다. 
    
    [reject 와 reason] 

    reject('error');
    then((reason) => {...})
*/
function y(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error'); 
        }, 1000);
    });
}

y().then((message) => {
    console.log('(7-1)1000ms 후에 fulfilled 완료시 실행되는 코드',message);
}).catch((reason)=> {
    console.log('(7-2)1000ms 후에 rejected 완료시 실행되는 코드', reason);         
});



/* 8. 보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데, 
"표준 내장 객체인 Error" 의 생성자를 이용하여 Error 객체를  넘기는게 일반적이다.  */

function e(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Error reason')); 
        }, 1000);
    });
}

e().then((message) => {
    console.log('(8-1)1000ms 후에 fulfilled 완료시 실행되는 코드',message);
}).catch((error)=> {
    console.log('(8-2)1000ms 후에 rejected 완료시 실행되는 코드', error);         
});




/*  9. fulfilled 되거나 rejected 된 후에 
    then,catch로 이어간 후에 최종적으로 실행할 것이 있다면,
    .finally()를 설정하고 함수를 인자로 넣는다.
*/


function f(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Error reason')); 
        }, 1000);
    });
}

f().then((message) => {
    console.log('(9-1)1000ms 후에 fulfilled 완료시 실행되는 코드',message);
}).catch((error)=> {
    console.log('(9-2)1000ms 후에 rejected 완료시 실행되는 코드', error);         
}).finally(() => {
    console.log('(9-3)end!')
} );


/* 10. (callback을 활용한 비동기 작업)
    보통 비동기 작업을 할 때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
    이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다. */

   function c(callback) {
       setTimeout(() => {
           callback();
       }, 1000);
   }

   // callback 한번 실행
   c(() => {
       console.log('(10-1)1000ms 후에 callback 함수가 실햅됩니다.');
   });

   // callback 3번 실행
     c(() => {
        c(() => {
            c(() => {
                console.log('(10-2)3000ms 후에 callback 함수가 실햅됩니다.');
            });
        });
   });
   



/* 11. (Promise를 활용한 비동기 작업 -> callback 보다 보기 편하고, 순차적으로 표현 가능)
   
    then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 
    비동기 작업을 순차적으로 아래로 표현할 수 있다.
    
    then에 함수를 넣는 여러 방법을 확인해 보자.
*/  
    
    function m(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000)
        });
    }

   m().then(() => {
       return m();   // 1초
   })
   .then(() => m())  // 2초
   .then(m)         // 3초
   .then(() => {
       console.log('(11)4000ms 후에 fulfilled 됩니다.')
   });




   /*
    12. value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행.
        value가 프로미스 객체면, resolve 된 then 메서드를 실행.
        value가 프로미스 객체가 아니면, value를 인자로 보내면서 then 메서드를 실행.
   */
   
    Promise.resolve(/* value(인자) =>  (1)프로미스 객체 (2)일반 값 */);    

    // (1)  value(인자)가 프로미스 객체면, resolve 된 then 메서드를 실행.
    Promise.resolve(new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 1000);
    })).then((data) => {
        console.log('(12-1)프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됩니다.', data);

    });

    // (2) value가 프로미스 객체가 아니면, value를 인자로 그대로 보내면서 then 메서드를 실행.
    Promise.resolve('bar').then(data => {
        console.log('(12-2)then 메서드가 없는 경우, fulfilled 됩니다.',data);
    });



    /* 13.  Promise.reject 를 사용하면, catch 로 연결된 rejected 상태로 변경된다. */

    Promise.reject(/* value(인자) : 주로 error 객체 */);

    Promise.reject(new Error('This is a Error'))
        .then(error => {})
        .catch(error => {
        console.log(error);
    });



    /* 14. 프로미스 객체 여러개를 생성하여,
    배열로 만들어 인자로 넣고 promise.all 을 실행하면
    배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then의 함수가 실행된다. 

    then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려준다.*/

    // Promise.all([프로미스 객체들]);

    function a(ms) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(ms);
            }, ms);
        });
        
    }
      
    Promise.all([a(1000), a(2000), a(3000)]).then((messages) => {
        console.log('(14)모두 fulfilled 된 이후에 실행됩니다',messages);
    });
    // 모두 fulfilled 되는데 a(3000)이 있으므로 총 3초 걸린다.  
   


    /* 15 .프로미스 객체 여러개를 생성하여,
        배열로 만들어 인자를 넣고 Promise.race를 실행하면
        배열의 모든 프로미스 "객체들 중 가장 먼저 fulfiled 된 걸로" then의 함수가 실행된다.
        then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려준다.
        
        Promise.race([프로미스 객체들]);
    */

    function r(ms) {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(ms);
                }, ms);
            });
            
        }
          
        Promise.race([r(1000), r(2000), r(3000)]).then((message) => {
            console.log('(15)가장 빠른 하나가 fulfilled 된 이후에 실행됩니다',message);
        });
        // 가장 먼저 fulfilled되는 1000ms 이 출력된다. 
