const User = require("../schemas/users");
const crypto = require("crypto");
const dotenv = require("dotenv");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

dotenv.config()


// exports.dupliucateUser = async (req, res, next)=>{
//     try{
//         const userdup = req.body.value
//         if(await User.findOne({snsid: userdup})){
//             res.json({duplicate:true})
//         } else if () {

//         }
//         else{
//             res.json({duplicate:false}) // false일 때만 디세이블을 해줘라
//         }
//         const dupliucateUser = await User.findOne({$or:[{snsid},{email},{phone}]})
//     }
// }



// 회원 가입
exports.join = async (req, res, next) =>{  // 비동기 함수를 사용할 거라서 async 사용
    const { snsid, password, email, phone, nick } = req.body; // 사용자가 다 작성하고 회원가입을 눌렀는데 어덜트 창이뜨면 기분 나쁨
    try{                 
        //중복검사  //id 중복검사를 하기 위해서는 타자를 하나하나 칠 때마다 req를 보내서 확인한다.
        const dupliucateUser = await User.findOne({$or:[{snsid},{email},{phone}]})
        console.log("join console:",req.body)
        if (dupliucateUser) {
            return res.json({error:'exist'});
        }
        // 비밀번호 암호화(PBKDF2 암호화 방식)
        const salt = process.env.SALT                 //salt는 아무값이나 넣으면된다.
        // 로그인할 때도 똑같이 값주기!
        const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex'); //16진수 형태로 이 값을 바꿔준다.
        

        // 사용자 데이터 저장(DB-Create 단계)
        await User.create({
            snsId : snsid,
            password : hash,
            email,
            phonNB:phone,
            nick
        });
        return res.redirect('/',)
    } catch(err) {
        console.error(err)
        return next(err)
    }
}

//local Strategy
passport.use(new LocalStrategy({ // passport인증전략  LocalStrategy를 불러오는 것은 local
    usernameField: 'email', // 사용자 아이디
    passwordField: 'password',  // 사용자가 입력한 password //단방향 암호화를 했다.
    passReqToCallback : false, //콜백함수에 req객체도 전달을 할 건지 할거면 true        콜백함수에 req객체 전달 안함.

},async (email, password, done)=>{  // done은 다 끝나고 나서 next역할 다 끝났다를 알려줌
    try{
        console.log("001")
        const user = await User.findOne({email : email}); // 가입 회원 찾기
        console.log(user) //나오면 값이 제대로 들어옴
        if(!user){
            console.log("002")
            return done(null, false, {message: '가입되지 않은 회원입니다.'}) // null은 빈값 db연결 실패하면 에러
            // done은 콜백 함수 doen(error(Error|null), user(Object|false), info(Object|undifined))
        }
        //비밀번호 검증
        const salt = process.env.SALT // 데이터베이스에서 암호화한 password와 사용자가 입력한 password의 데이터가 다르기 때문에 사용자가 입력한 password도 암호화 해서 서로 같은지 확인을 해주는 작업을 한다.
        const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
        console.log(hash)
        if (user.password !== hash){
            console.log("003") // 여기에 문제가 있다고 알려주겠죠 안찍히면 문제없
            return done(null, false, {message:"비밀번호가 일치하지 않습니다."}) 
        }
        console.log("0063")
        return done(null, user) //user 정보는 object 정보로 받는다.
    } catch(err){
        console.error(err)
        return done(err)
    }
})
)

// 로그인 
// passport 가지고 로그인 기능을 만듬
exports.login = (req, res, next)=>{
    console.log(req.body)
    passport.authenticate('local', (authError, user, info)=>{ // local은 passport에서 값을 만들어 줘야함 passport라는 폴더를 만들고 local을 정의 해줘야함
        console.log(user,info) // user정보가 들오면 로그에 찍혀야 정상
        if (authError){                       // info는 비밀번호가 틀렸음 이라는 실패의 원인들을 메세지로 들어오게 만들어줌
            console.error(authError);
            return next(authError); //에러 들어옴
        }
        if (!user){ //실패 원인이 나옴   //정보 없
            return res.json({error:info.message}) // 에러 메세지를 전달해줌
        }
        return req.login(user, (loginError)=>{ // 사용자의 로그인이 실행이 되면 
            if(loginError) {        // 로그인 성공하면 리다이렉트로 보내고 아니면 에러창으로 보냄
                console.error(loginError);
                return next(loginError);
            }
            return res.json(user)
        })
    })(req, res, next);
}

// 로그아웃
exports.logout = (req,res) =>{
    req.logout((err)=>{
        if(err){
            console.error(err);
            return res.redirect('/?error=logout_failed')
        }
        res.redirect('/');
    })
}