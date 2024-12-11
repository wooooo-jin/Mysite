const dotenv = require("dotenv");     //외부적
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser")  // 파싱은 쿠키파서 가서 하셈
const cors = require("cors");

dotenv.config()

const pageRouter = require("./routes/pageRouter")

const app = express();
app.set('port', process.env.PORT || 3000);


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET))


app.use('/',pageRouter);

//에러처리
app.use((req,res,next)=>{
    const err = new Error(`${req.method} ${req.url} 라우터가 없음`); // method는 무슨 요청으로 들어왔는지입니다. get, post
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    console.error(err)
    res.status(err.status || 500).json({error:err.message});
    // res.status = 500
    // req.json({error:err.message});  위에 res는 한줄로 처리를 한 것이다.
});

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')} 서버 대기중`)
});