const express = require("express");
const router = express.Router()
const Comment = require("../models/comment") // 사용할 모델
const User = require("../models/user");
const comment = require("../models/comment");

router.route('/')
.get(async(req, res, next)=>{
    try{
        const comment = await Comment.find()
        res.json(comment)
    }catch(err){
        console.error(err);
        next(err)
    }
})
.post(async (req, res, next) =>{
//     try{
//         const comment = await Comment.create({
//             commenter : req.body.userid,
//             comment : req.body.comment,
//         });
//         res.json(comment)
//     }catch(err) {
//         console.error(err);
//         next(err)
//     }
// })
    try{
        console.log(req.body)
        const userId = await User.findOne({name : req.body.userid})
        const comment = await Comment.create({
            commenter : userId._id,
            comment : req.body.comment
        });
        res.json(comment)
    }catch(err) {
        console.error(err);
        next(err)
    }
})

router.route('/:id')  //patch 일부 put은 전체  updateOne하나만 업데이트 updateAll은 전체 업데이트
.patch(async(req,res,next)=>{
    try{
        const result = await Comment.updateOne({        //뭘 업데이트 해야하는지 찾아준느거
            _id:req.params.id
        },
    {comment: req.body.text}) //업데이트 해서 바꿔줌
    res.json(result)
    }catch(err){
        console.error(err)
        next(err)
    }
})
.delete(async(req,res,next)=>{
    try{  //try 감시
        await Comment.deleteOne(
            {_id:req.params.id} // 아이디를 찾아서 삭제하겠다. params은 url에 있는 데이터를 사용
        )
        res.end()
    }catch(err){
        console.error(err)
        next(err)
    }
})




module.exports = router;