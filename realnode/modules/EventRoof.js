// console.log('Hello World')

// function thirdFunction(){
//     console.log('세번째 함수')
// };

// function firstFunction(){              //2번실행 setTimeout 백그라운드로 빠짐 첫번째 함수 1초 secondFuntion 실행
//     setTimeout(()=>{
//         console.log('첫번째 함수')    // 백그라운드 1초 끝나면
//     }, 1000)
//     secondFuntion();
// };

// function secondFuntion(){           // 3번 실행 setTimeout 백그라운드로 감 2초  console.log('두번째 함수')찍힘
//     setTimeout(()=>{
//         thirdFunction();           //백그라운드 2초
//     }, 2000)
//     console.log('두번째 함수')
// };

// firstFunction();                  // 1번 실행

// function run() {
//     console.log('3초 후 실행');
// }
                                        //하나의 작업이 실행되는 동안 다른 작업을 같이 수행하는 것이 비동기식 처리
// console.log('시작');                // 첫번째 시작frirst 콘솔로그에 찍고 끝이기 때문에 시작을 찍고 바로 나감.
// setTimeout(run, 3000);             // setTimeout /setintabel 비동기 함수입니다. 호출스택에서 비동기 함수는 백그라운드로 넘겨준다.
                                     // 백그라운드로 넘어가서 3초를 세어주고 (콜백함수는)테스크Q라는 곳으로 run 함수가 들어간다. 
// console.log('끝');               // 들어가자마자 끝을 찍어주고 나간다.
                                    // 

// console.log('시작')
// setTimeout(firstFuntion, 3000)
// setTimeout(secondFuntion, 1000)
// setTimeout(thirFunction, 2000)
// console.log('끝')

function longTask() {
    const start = Date.now()                 // 호출스택에 들어가는 순간 시간을 찍어요.
    while (Date.now() - start < 3000){      // while은 반복문 맞는지 아닌지 한 사이클은 돌아야지 알 수 있다. 
    }                                       // while이 돌 때 마다 시간을Date.now에 찍어주고 그 시간에 start의 시간을 빼주고 3초보다 적은 동안만 반복해준다.
    console.log("longTask 작업 완료")    
}

function firstFunction(){
    setTimeout(()=>{
        console.log('첫번째 함수') 
    }, 1000)
};

console.log('시작')
longTask();
firstFunction();
console.log('끝')