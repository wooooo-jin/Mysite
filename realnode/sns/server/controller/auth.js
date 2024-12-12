const User = require("../schemas/users");
const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config()


// 회원 가입
exports.join = async (req, res, next) =>{  // 비동기 함수를 사용할 거라서 async 사용
    const { snsid, password, email, phone, nick } = req.body; // 사용자가 다 작성하고 회원가입을 눌렀는데 어덜트 창이뜨면 기분 나쁨
    try{                 
        //중복검사  //id 중복검사를 하기 위해서는 타자를 하나하나 칠 때마다 req를 보내서 확인한다.
        const dupliucateUser = await User.findOne({$or:[{snsid},{email},{phone}]})
        if (dupliucateUser) {
            return res.redirect('/join?error=exist');
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
            phonNB:phon,
            nick
        });
        return res.redurect('/',)
    } catch(err) {
        console.error(err)
        return next(err)
    }
}

// 로그인 
// passport 가지고 로그인 기능을 만듬
exports.login = (req, res, next)=>{
    passport.authenticate('local', (authError, user, info)=>{ // local은 passport에서 값을 만들어 줘야함 passport라는 폴더를 만들고 local을 정의 해줘야함
        if (authError){                       // info는 비밀번호가 틀렸음 이라는 실패의 원인들을 메세지로 들어오게 만들어줌
            console.error(authError);
            return next(authError); //에러 들어옴
        }
        if (!user){ //실패 원인이 나옴   //정보 없
            return res.redirect(`/?error=${info.message}`) // 에러 메세지를 전달해줌
        }
        return req.login(user, (loginError)=>{ // 사용자의 로그인이 실행이 되면 
            if(loginError) {        // 로그인 성공하면 리다이렉트로 보내고 아니면 에러창으로 보냄
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/')
        })
    })(req, res, next);
}

// 로그아웃
exports.logout = (req,res) =>{
    req,logout((err)=>{
        if(err){
            console.error(err);
            return res.redirect('/?error=logout_failed')
        }
        res.redirect('/');
    })
}