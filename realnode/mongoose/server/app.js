// 모듈 import
const express = require("express"); // 서버를 생성을 위한 모듈
const path = require("path"); // C:/program Fill <<---(구분자) path의 구분자를 맞춰주기 위한 모듈
const cors = require("cors"); // front 와 server를 연동하기 위한 모듈
const morgan = require("morgan"); // 요총 log 생성을 위한 모듈
// 라우터 import
const indexRouter = require('./routers/index');
const userRouter = require('./routers/users');
const commentRouter = require('./routers/comments');
//model inport
const connect = require('./models/index');

// 미들웨어 생성

const app = express(); //서버 생성
app.set('port', process.env.PORT || 3000); //포트 설정 3000번
connect(); //mongodb 연결 실행

app.use(cors());
app.use(morgan('dev')); 
app.use(express.json()); //body parser   //router에서 보다 먼저 실행을 해서 파서를 해줘야하낟.   //local host:3000/user/:id
app.use(express.urlencoded({extended:false})); //extended 확장 프로그램을 사용할거냐?     //local host:3000/user/:userid    //  local host:3000/ 이 부분이 url    **  /user/:userid 이 부분이 파람

// Router
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/comment', commentRouter);




// error처리 미들웨어
app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
    error.status = 404;
    next(error)
})
app.use((err, req, res, next)=>{
    console.error(err)
    res.status(err.status || 500).json({error:err.message});
})
app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')} 서버 대기중`)
})