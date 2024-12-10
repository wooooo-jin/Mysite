const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get('/',async(req,res,next)=>{
    try{
        const user = await User.find({}); 
        res.render('Mongoose',{user})
    }catch(err){
        console.error(err)
        next(err);
    }
})

module.exports = router;