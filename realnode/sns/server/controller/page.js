const Post = require('../schemas/posts');
const User = require('../schemas/users');
const Hashtag = require('../schemas/hashtags');

//프로필 페이지 렌더링
exports.renderProfile = (req, res)=>{
    res.render('profile', {title: '내정보 - sns'})
};

exports.renderJoin = (req, res)=>{
    res.render('join', {title: '회원가입 - sns'})
}

exports.renderMain = async(req,res,next)=>{
    try{
        const posts = await Post.find()
        .populate({path: 'user', select:'snsid nick'})
        .sort({createAt: -1});

        res.json({title: 'SNS-Main', twits: posts})
    }
    catch(err){
        console.error(err)
        next(err)
    }
}
