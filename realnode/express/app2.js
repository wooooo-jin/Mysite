// dot env
require('dotenv').config(); // dotenv 초기화

// 필요한 모듈 불러오기
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieparser = require("cookie-parser");
const session = require('express-session');
const multer = require('multer');

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


// app.post('/form', (req, res)=>{
//     console.log(req.body);
//     res.send(`데이터 처리 완료 : ${JSON.stringify(req.body)}`);
// })


// app.use(express.static(path.join(__dirname,'public'))); //public 만쓰면 public 안에 index를 가져오는게 기본임


// app.post('/send-json', (req, res)=>{
//     const {name, age, gender} =req.body //구조분의 할 당으로 꺼내옴
//     console.log(req);
//     console.log(`Parsing Data : ${name}, ${age}, ${gender}`); //파싱 데이터 찍어봄
//     res.json({message:`Parsing Data : ${name}, ${age}, ${gender}`}); //send는 문자나 html // json은 키 값
// })


// app.get('/session', (req, res, next )=>{
//     if (req.query.skip){ // /session?skip=true
//         return next("route")
//     }else{
//         req.session.data = {name: 'soondong', role:'admin'}
//         res.send("세션정보 저장 완료")
//     }
// });

// app.get('/session', (req, res )=>{
//     res.send("다른 라우터 동작")
// });


// app.get('/session/clear', (req, res)=>{
//     // req.session.destroy() // 세션 정보 삭제 (쿠키는 유지)
//     res.clearCookie('connect.sid') // 쿠키를 삭제
//     res.send("세션을 삭제하였습니다.")
// })


// app.get('/session/read', (req, res) =>{
//     if (req.session){
//         res.send(`세션 정보 : ${req.session.data.name}`)
//     }else{
//         res.send("세션 정보가 없습니다.")
//     }
// })





























//라우터
// app.get('/', (req, res)=>{
//     // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//     // res.end("Hello World")
//     res.send('Hello World')
// })

// app.get('/', (req, res)=>{
//     res.cookie('name', 'soondong', {
//         signed: true,
//         maxAge: 60000,
//         httpOnly: true, 
//         path: '/',
        
//     })
//     res.send('쿠키 생성 완료')
// })

// app.get('/cookie/read/', (req, res) =>{
//     const userCookie = req.signedCookies.name;
//     if (userCookie){
//         console.log(req.signedCookies)
//         res.send(`쿠키는 ${userCookie}`)
//         console.log(req.signedCookies)
//     }else{
//         res.send('쿠키 정보가 없습니다.')
//     }
// })



// app.get('/category', (req,res)=>{
//     res.send("user Info")
// })

// app.get('/category/*', (req, res)=>{
//     res.send("카테고리 모든 요청 처리")
// })

// app.get('/category/book', (req,res)=>{
//     res.send("user Book")
// })

// app.get('/category/note', (req,res)=>{
//     res.send("user Note")
// })

// app.get('/', (req, res)=>{
//     res.send('Goob bye World')
// })

// app.get('*',(req, res)=>{
//     res.send("404 에러 발생")
// })





//서버 실행
app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트 서버 대기중`)
})

