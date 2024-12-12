exports.isLoggdIn = (req, res, next) =>{
    // 로그인 되어있는지 확인
    if (req.isAuthenticated()) {// 만약에 isAuthenticated 라는 것을 사용하면 로그인을 한지 알수 있다.
    next()
    } else {
        res.status(403).send('로그인이 필요합니다.')
    }
}
exports.isNotLoggdIn = (req, res, next) =>{
    if(!req.isAuthenticated()){
        next()
    } else {
        res.status(403).json({message: "이미 로그인한 상태입니다."})
    }
}
