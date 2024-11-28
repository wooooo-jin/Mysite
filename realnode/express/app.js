const express = require('express');
const path = require("path");
const morgan = require('morgan');
const fs = require('fs');
const app = express(); // 서버 생성     서버 시작은 express는 app이라고 시작 vue는 메인으로 시작
//포트 설정 //http.createServe랑 같음 express
// /const PORT = process.env.PORT || 3000;  // 환경설정 //중요한 값을 변수로 모음
app.set('PORT',process.env.PORT || 3000);


// 로그인 페이지를 접속한 기록들 access로 알 수 있다.
const logStream = fs.createWriteStream(path.join(__dirname,'access.log'), {flags: 'a'});


//morgan 미들웨어 사용  //페이지를 상세하게 알고싶으면
app.use(morgan('combined', {stream:logStream}));

//라우터 설정 
app.get('/',(req, res)=>{   //    '/'이것은 패스정보  get요청은 전부 app.get에서 실행이 된다.
    res.send('Hello my Express');  // 라우터는 사실 맨 밑에 있어야함.
});


app.get('/html', (req,res)=>{
    res.sendFile(path.join(__dirname, './index.html')); //현재 디렉토리(res.sendFile(path.join(__dirname,)와 join
});


app.listen(app.get('PORT'), ()=>{
    console.log(`${app.get('PORT')}번 포트에서 서버 대기중`);
});

// app.listen(PORT, ()=>{
//     console.log(`${app.get('PORT')}번 포트에서 서버 대기중`)
// })

