const fs = require('fs');


// console.log('시작');
// fs.readFile('./sample.txt', 'utf8', (err, data) => {  //readFile 비동기함수
//     if(err) throw err;
//     console.log('1번', data.toString());
// })
// console.log('끝');











// console.log('시작');

// (async ()=>{    //async 함수앞에
//     try{
//         const data1 = await fs.promises.readFile('./sample.txt', 'utf8');
//         console.log('1번', data1.toString());

//         const data2 = await fs.promises.readFile('./sample.txt', 'utf8');
//         console.log('2번', data2.toString());

//         const data3 = await fs.promises.readFile('./sample.txt', 'utf8');
//         console.log('3번', data3.toString());

//         const data4 = await fs.promises.readFile('./sample.txt', 'utf8');
//         console.log('4번', data4.toString());

//         const data5 = await fs.promises.readFile('./sample.txt', 'utf8');
//         console.log('5번', data5.toString());


//     }catch (err) {
//         console.error('에러발생', err);
//     }
// })();
// console.log('끝');


// fs.readFile('./sample.txt',(err, data)=>{
//     if(err) {throw err}
//     console.log('1번', data.toString())
// });

// fs.readFile('./sample.txt',(err, data)=>{
//     if(err) {throw err}
//     console.log('2번', data.toString())
// });

// fs.readFile('./sample.txt',(err, data)=>{
//     if(err) {throw err}
//     console.log('3번', data.toString())
// });

// fs.readFile('./sample.txt',(err, data)=>{
//     if(err) {throw err}
//     console.log('4번', data.toString())
// });


 
//readFileSync함수자체가 동기 함수  Sync를 붙인다.
//promises는 형태이다.
const data1 =  fs.readFileSync('./sample.txt', 'utf8');
console.log('1번', data1.toString());

const data2 =  fs.readFileSync('./sample.txt', 'utf8');
console.log('2번', data2.toString());

const data3 =  fs.readFileSync('./sample.txt', 'utf8');
console.log('3번', data3.toString());

const data4 =  fs.readFileSync('./sample.txt', 'utf8');
console.log('4번', data4.toString());

const data5 =  fs.readFileSync('./sample.txt', 'utf8');
console.log('5번', data5.toString());


