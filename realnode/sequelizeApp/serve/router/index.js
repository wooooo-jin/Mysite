const express = require("express");
const router = express.Router()

const User = require('../models/User') // 유저테이블 호출   // 사용자 정보를가져옴


router.get('/', async(req,res,next)=>{
    try{
        const user = await User.findAll()
        res.send(user)
    }catch (err){
        console.error(err)
        next(err)
    }
})



module.exports = router;