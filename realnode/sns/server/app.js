const dotenv = require("dotenv");     //외부적
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser")  // 파싱은 쿠키파서 가서 하셈
const cors = require("cors"); // 연결시키는 용도로만 사용
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport"); //session이 있어야지 사용 가능
const LocalStrategy = require("passport-local"); //dnlclsms passport 밑에




dotenv.config()
// router import
const pageRouter = require("./routes/pageRouter");
const authRouter = require("./routes/authRouter");
const postRotuer = require("./routes/postRouter");


//스키마 import
const User = require("./schemas/users");
const Post = require("./schemas/posts");
const Hashtag = require("./schemas/hashtags");



// webserver
const app = express();
app.set('port', process.env.PORT || 3000);
// mongodb
mongoose.connect(process.env.DB_URI)   // DB서버 연결
.then(()=>
console.log('DB 연결 성공')) 
.catch((err)=>{
    console.error(err);
})

// 미들 웨어
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({           // 안전하게 데이터 저장후 전달해주는게 session
    resave:false, //변경사항이 있는데 변경하겠냐 한다true 안함false
    saveUninitialized:false,  // 빈 값이 들어와도 받겠냐.
    secret:process.env.COOKIE_SECRET, // COOKIE_SECRET 환경변수로 특정형태로 변환시키는 키값(위치는 .env)
    cookie:{    
        httpOnliy:true, // 자바스크립트로 접근 못하게 막는다.
        secuire:false,  // https의 s가 secuire임
        maxAge:1000 * 60 * 5         //미리세컨드 1000미리세컨드는 1초
        //여기까지 세션 만들기
    }
}))
// 전략 인증 passport
app.use(passport.initialize());
app.use(passport.session()); //우리는 인증 전력으로 session을 사용할 것이다.  //여기서 import함 index.js에 필요한거

//passport -serialize : 세션에 사용자 id 저장 //세션에 저장하고 계속 감시를 함 받은 세션정보에서 그 사람이 맞는지 아닌지 확인
passport.serializeUser((user, done)=> {
    console.log('SerializeUser:', user) //암호화 저장이 아니고 사용자 이름 이런것중 어떤걸 저장할지 정한다.
    done(null, user._id)
})

//passport-deserialize : 세션에 사용자 정보 복원
passport.deserializeUser(async(id, done)=>{ 
    try{       //db랑 데이터가 같은지 맞춰보고 세션정보에 있는걸 유저정보가 맞으면 유지하고 아니면 에러창 띄우고
        const user = await User.findById(id);
        done(null, user);
    }catch(err){
        console.error(err)
        done(err)
    }
})

// router
app.use('/',pageRouter);
app.use('/auth', authRouter);
app.use('/post', postRotuer);



//에러처리 error midleware
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