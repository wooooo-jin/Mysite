const fs = require('fs');

fs.watch('./test.txt', (eventType, filename)=>{
    console.log(eventType, filename)
})  //중요 파일을 감지할 수 있다.