const express = require("express");
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.end('연결 성공')
})

module.exports = router;