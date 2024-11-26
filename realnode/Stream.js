const fs = require('fs');
// const { write } = require('repl');
// const data = [];
// //천천히 청크를 16byt로 쪼개서 들어온다.
// const readStream = fs.createReadStream('./chunk.txt', {highWaterMark:16})

// readStream.on('data', (chunk)=>{
//     data.push(chunk);
//     console.log('data :', chunk.toString(),chunk.length)
// });

// readStream.on('end', ()=>{   //지금까지 들어온 모든 데이터를 합쳐준다.
//     console.log('end', Buffer.concat(data).toString())
// });

// readStream.on('error', (err)=>{
//     console.log('error :', err)
// });



// const writeStream = fs.createWriteStream('./집.txt') //파일 새로 만들기
// writeStream.on('finish', ()=>{
//     console.log('파일 쓰기 완료')
// })

// writeStream.write('집을');
// writeStream.write('빠르게');
// writeStream.write('가자');
// writeStream.end();


const readStream = fs.createReadStreamStream('./집.txt');
const writeStream = fs.createWriteStream('./jin.txt');


readStream.pipe(writeStream)