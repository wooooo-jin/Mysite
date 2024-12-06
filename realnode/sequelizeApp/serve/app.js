const express = require("express");
const path = require("path");
const cors = require("cors");
// router 가져오기
const indexRouter = require('./router');
const userRouter = require('./router/users')
const commentRouter = require('./router/comments')

const { sequelize } = require("./models");

const app = express(); // 서버생성함
app.set ('port', process.env.PORT || 3000); // 포트설정

// 데이터베이스 연결
sequelize.sync({force: false}) // 데이터베이스 연결
    .then(()=>{
        console.log("데이터베이스 연결 성공")
    })
    .catch(()=>{
        console.log(err)
    })

    // 미들 웨어 설정
    app.use(express.static(path.join(__dirname, ' public'))); //static 미들웨어
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))//바디 파서
    app.use(cors());
    // 라우터 설정
    app.use('/', indexRouter);  //Root page 맨 처음으로 보이는 페이지
    app.use('/user', userRouter);
    app.use('/comment', commentRouter);

    //에러처리 미들웨어
    app.use((req, res, next)=>{
        res.status(404).send(`${req.method} ${req.url} 라우터 없음`);
    })

    app.use((err,req,res,next)=>{
        const status = err.status || 500;
        console.error(err);
        res.status(status).json({ error : err.message });
    })

    app.listen(app.get('port'), () =>{
        console.log(`${app.get('post')}번 포트에서 서버 실행중`)
    })