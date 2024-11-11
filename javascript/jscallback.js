// console.log(1);
// setTimeout(delayPrint, 1000);
// console.log(3);

// function delayPrint(){
//     console.log(2)
// }



// const myPromise =new Promise((resolvem, reject)=>{
//     const condition = true;
//     if(condition){
//         resolvem("성공");
//     }else{
//         reject("실패");
//     }
// });

// myPromise.then(res=>{
//     console.log(res);
// }).catch(err =>{
//     console.log(err);
// })


// 음식 주문
// 음식 주문 -> 음식을 요리 -> 테이블로 서빙

//  비동기 작업에 대한 함수를 예시
function oderFood(food) {
    return new Promise((resolve) =>{
      console.log(`주문을 받았습니다.(${food})`)
      setTimeout(() =>{
        resolve(`${food} 준비 완료`)
      }, 2000) // 2초후에 주문 완료
    })
  }
  
  function serveFood(food) {
    return new Promise((resolve) =>{
      console.log(`${food} 서빙중...`)
      setTimeout(()=>{
        resolve(`${food} 서빙 완료`)
      }, 1000)
    })
  }
  
  // async 와 await 사용
  async function placeOder() {
    const oderedFood = await oderFood('피자');
    console.log(oderedFood)
    const servedFood = await serveFood("피자");
    console.log(servedFood);
  }
  
  placeOder()