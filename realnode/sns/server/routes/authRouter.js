const express = require('express');
const { isLoggdIn, isNotLoggdIn } = require("../middleware");
const { join, login, logout } = require("../controller/auth");

const router = express.Router();


// POST /auth/join -> 회원 가입창으로 이동
// 미들웨어가(middleware) => isNotLoggdIn 로그인이 됐는지 안됐는지
// 컨트롤러가(controller) => join   req,res,콜백 대신 만드는 것이 컨트롤러임
router.post('/join', isNotLoggdIn, join)     //isNotLoggdIn 트루면 join 실행


// POST /auth/login -> 로그인 --데이터 전달
// 미들웨어가(middleware) => isNotLoggdIn
// 컨트롤러가(controller) => login 이라는 메서드를 만들어준다. req,res,콜백 대신 만드는 것이 컨트롤러임
router.post('/login', isNotLoggdIn, login)  //isNotLoggdIn 트루면 login 실행


// GET /auth/logout -> 로그아웃
// 미들웨어가(middleware) => isNotLoggdIn
// 컨트롤러가(controller) => logout 이라는 메서드를 만들어준다. req,res,콜백 대신 만드는 것이 컨트롤러임
router.get('/logout', isLoggdIn, logout) //isNotLoggdIn 트루면 logout 실행



module.exports = router;