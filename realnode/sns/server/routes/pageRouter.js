const express = require("express");
const router = express.Router();
const { isLoggdIn, isNotLoggdIn } = require('../middleware');
const { renderJoin, renderMain, renderProfile } = require('../controller/page');


//라우터 만들기
router.get('/profile', isLoggdIn, renderProfile);

router.get('/join', isNotLoggdIn, renderJoin);

router.get('/', renderMain);

router.get('/', (req, res, next)=>{
    res.end('연결 성공')
})

module.exports = router;