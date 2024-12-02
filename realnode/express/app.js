// dot env
require('dotenv').config(); // dotenv 초기화

// 필요한 모듈 불러오기
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieparser = require("cookie-parser");
const session = require('express-session');
const multer = require('multer');

// 라우터 불러오기
const indexRouter = require('./router');
const userRouter = require('./router/user');



const app = express(); // 서버생성

const cookieScret = process.env.CS
//PORT 설정
app.set('port', process.env.PORT || 3000);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(null, path.basename(file.originalname,path.extname(file.originalname))+'-'+uniqueSuffix+path.extname(file.originalname))//originalname 파일 전체이름 extnam는jpg png
    }
});

const upload = multer({ 
    storage:storage,
    limits: {fileSize: 1024 * 1024 * 5 }
})
//single file
// app.post('/upload', upload.single('file'), (req, res) =>{
//     console.log(req.file);
//     res.send(`File Upload Complate: ${req.file.filename}`)
// })


app.post('/upload', upload.array('files',5),(req, res) => {
    console.log(req.files);
    res.send('Multiple File Upload')
})



//(공통)미들웨어
// app.use((req,res,next)=>{
//     console.log("내가 만든 미들웨어")
//     const error = new Error("에러 발생");
//     error.status = 503
//     next(error)
// })
// app.use(morgan('combined'));
// app.use(cookieparser(cookieScret)) // 모든 쿠키에 대해서 사용함.
// app.use(session({
//     secret: process.env.SESSSION_SCRET,
//     resave: false,
//     saveUninitialized : true,
//     cookie: {maxAge:60000, httpOnly:true}
// }));
// app.use(express.static(path.join(__dirname, 'public', 'imgs')))

//body-parser(json)미들웨어
app.use(express.json()); //json을 파싱하는 작업을 여기서 함

//body-parser(urlencoded) 미들웨어
app.use(express.urlencoded({extends: true})) //true를 안하면 파싱을 못함

// 에러 처리 미들웨어
app.use((err, req, res, next)=>{
    res.status(err.staus || 200).send(err.message);
})

// ******라우터******
// 라우터로 가는 코드
// 1. 기본 url
app.use('/', indexRouter)


// 2. /user/ 다음에 나오는 url
app.use('/user', userRouter)    


// 3. error 처리 미들웨어
app.use((req,res,next)=>{
    res.status(404).send('Not Found')
})

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);  // 정해주기 나름 404주던지
})












//서버 실행
app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트 서버 대기중`)
})

